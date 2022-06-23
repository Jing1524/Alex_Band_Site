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

  const { title, artist, audioSrc, durationTime } = tracks[trackIndex];

  // can't run Audio API on server
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio(audioSrc);
    const seconds = Math.floor(audioRef.current.duration);
    setDuration(seconds);
  }, [audioRef?.current?.onloadedata, audioRef?.current?.isReady]);

  //convert milliseconds to min and secs
  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs & 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

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
      audioRef?.current?.play();
      startTimer(); //keep track of the progress
    } else {
      clearInterval(intervalRef.current);
      audioRef?.current?.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audioRef?.current?.pause();
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

  return (
    <section
      id="tracks"
      className="bg-gradient-to-r from-[#171717]/90 to-black/90 pt-16"
    >
      <div className="flex items-center justify-center">
        <div className="w-[70vw]">
          <Image
            src="/image/track_photo.jpg"
            layout="responsive"
            height={1500}
            width={1500}
          />
        </div>
        <motion.div className=" w-[40%]">
          {/* button control */}
          <div className="p-8 mx-20">
            <div className="flex flex-col items-center mt-5 mb-10 track-info">
              <h2 className="text-xl font-bold text-white/80 font-raleway">
                {title}
              </h2>
              <h3 className="text-xl font-bold text-white/80 font-raleway">
                {artist}
              </h3>
            </div>
            <AudioControls
              isPlaying={isPlaying}
              onPrevClick={toPrevTrack}
              onNextClick={toNextTrack}
              onPlayPauseClick={setIsPlaying}
            />
            <div>
              <input
                type="range"
                value={trackProgress}
                step="0.1"
                min="0"
                max={duration ? duration : `${duration}`}
                className=" progress w-[100%] mt-10 rounded-lg bg-red-300 inline"
                onChange={(e) => onScrub(e.target.value)}
                onMouseUp={onScrubEnd}
                onKeyUp={onScrubEnd}
                // style={{ background: trackStyling }}
              />
              {audioRef?.current?.duration ? (
                <p className="block float-right text-xs font-bold text-white/80 font-raleway">
                  {`${calculateTime(
                    audioRef?.current?.currentTime
                  )}/-${calculateTime(audioRef?.current?.duration)}`}
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="mt-10">
            {tracks.map((track, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center px-8 py-4 mx-10 mb-4 bg-white shadow-xl rounded-xl bg-opacity-40 bg-clip-padding backdrop-blur-sm hover:bg-opacity-60"
                >
                  <button className="text-[24px] text-white/60">
                    <i className="fas">&#xf026;</i>
                  </button>

                  <div className="w-0 h-10 ml-8 border border-solid border-white/60" />
                  <h2 className="flex ml-5 text-xl font-bold grow text-white/60 font-raleway">
                    {track.title}
                  </h2>
                  <p className="text-base font-bold text-white/60 font-raleway">
                    {track.durationTime}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default MusicPlayers;
