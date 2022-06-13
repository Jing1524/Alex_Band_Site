import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useCycle } from "framer-motion";
import classNames from "classnames";
import AudioControls from "./audioControls";
import { SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG } from "constants";

function MusicPlayers({ tracks }): JSX.Element {
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const { title, artist, audioSrc } = tracks[trackIndex];

  // can't run Audio API on server
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio(audioSrc);
    audioRef.current.onloadeddata = () => {
      setDuration(audioRef.current.duration);
    };
  }, []);

  const intervalRef = useRef(0);
  const isReady = useRef(false);

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
      startTimer(); //keep track of the progress
    } else {
      clearInterval(intervalRef.current);
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
  console.log(trackProgress);

  //progress bar dragging
  const onScrub = (value) => {
    //clear any timers that are already running
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  };

  const onScrubEnd = () => {
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  };

  const currentPercentage = duration
    ? `${(trackProgress / duration) * 100}%`
    : "0%";
  const trackStyling = `
  -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))
`;
  console.log(trackStyling);
  return (
    <section className="bg-gradient-to-r from-slate-300 to-blue-500 h-[100vh]">
      <motion.div className="ml-28 rounded w-[40%] h-[1000px] bg-white shadow-xl sm:rounded-3xl pt-10 bg-clip-padding bg-opacity-60 border border-gray-200 backdrop-blur-sm">
        {/* button control */}
        <div className="p-8 mx-20 border border-gray-300 shadow-xl rounded-xl">
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
          <input
            type="range"
            value={trackProgress}
            step="1"
            min="0"
            max={duration ? duration : `${duration}`}
            className="progress w-[100%] mt-10 rounded-lg bg-red-300"
            onChange={(e) => onScrub(e.target.value)}
            onMouseUp={onScrubEnd}
            onKeyUp={onScrubEnd}
            style={{ background: trackStyling }}
          />
        </div>
        <div className="mt-10">
          {tracks.map((track, index) => {
            return (
              <div className="px-8 py-6 mx-10 mb-4 border border-gray-300 shadow-xl rounded-xl">
                <div className="" />
                <h2 className="ml-10">{track.title}</h2>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

export default MusicPlayers;
