import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useCycle } from "framer-motion";
import classNames from "classnames";
import AudioControls from "./AudioControls";

function MusicPlayers({ tracks }): JSX.Element {
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const { title, artist, audioSrc } = tracks[trackIndex];

  // can't run Audio API on server
  // const [audio, setAudio] = useState(null)
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio(audioSrc);
    audioRef.current.onloadeddata = () => {
      setDuration(audioRef.current.duration);
    };
  }, []);

  const intervalRef = useRef();
  const isReady = useRef(false);
  console.log(duration);

  const toPrevTrack = () => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(tracks.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
  };

  const toNextTrack = () => {
    if (trackIndex < tracks.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
    }
  };

  const startTimer = () => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        toNextTrack();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);
  console.log(audioRef);
  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    audioRef.current.pause();

    audioRef.current = new Audio(audioSrc);
    setTrackProgress(audioRef.current.currentTime);
    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      isReady.current = true;
    }
  }, [trackIndex]);

  return (
    <section className="bg-gradient-to-r from-slate-300 to-blue-500 h-[100vh]">
      <motion.div className="ml-28 rounded w-[40%] h-[1000px] bg-white shadow-xl sm:rounded-3xl sm:p-20 bg-clip-padding bg-opacity-60 border border-gray-200 backdrop-drop-sm">
        {/* button control */}
        <div className="flex flex-col items-center mt-5 mb-10 track-info">
          <h2>{title}</h2>
          <h3>{artist}</h3>
        </div>
        <AudioControls
          isPlaying={isPlaying}
          onPrevClick={toPrevTrack}
          onNextClick={toNextTrack}
          onPlayPauseClick={setIsPlaying}
        />
      </motion.div>
    </section>
  );
}

export default MusicPlayers;
