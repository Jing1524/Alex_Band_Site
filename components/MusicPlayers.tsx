import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useCycle } from "framer-motion";
import classNames from "classnames";

function MusicPlayers({ tracks }): JSX.Element {
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);

  // can't run Audio API on server
  const audioRef = useRef(null);

  // useEffect(() => {
  //   audioRef.current = new Audio(tracks[trackIndex].audioSrc);
  //   console.log(audioRef?.current?.duration);
  //   const seconds = Math.floor(audioRef.current.duration);

  //   setDuration(seconds);
  // }, [audioRef?.current?.onloadedata, audioRef?.current?.isReady]);

  //convert milliseconds to min and secs

  const calculateTime = (sec) => {
    const minutes = Math.floor(sec / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(sec % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const intervalRef = useRef(0);

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

  const isReady = useRef(false);

  useEffect(() => {
    if (isPlaying) {
      audioRef?.current?.play();
      startTimer(); //keep track of the progress
    } else {
      clearInterval(intervalRef?.current);
      audioRef?.current?.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audioRef?.current?.pause();
      clearInterval(intervalRef?.current);
    };
  }, []);

  useEffect(() => {
    audioRef?.current?.pause();

    audioRef.current = new Audio(tracks[trackIndex].audioSrc);

    setTrackProgress(audioRef?.current?.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      startTimer();
      setIsPlaying(true);
    } else {
      isReady.current = true;
    }
  }, [trackIndex]);

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

  const playlistSelectionHandler = (e) => {
    const num = Number(e.currentTarget.getAttribute("data-key"));
    setTrackIndex(num);
    if (!isPlaying) {
      setIsPlaying(true);
    }
    setIsPlaying(false);
  };

  return (
    <section
      id="tracks"
      className="bg-gradient-to-r from-[#171717] to-black/90 py-16"
    >
      <div className="flex items-end justify-center">
        {/* <div className="w-[50vw] mb-4">
          <Image
            src="/image/track_photo.jpg"
            layout="responsive"
            height={1500}
            width={1500}
          />
        </div> */}
        <motion.div className=" w-[60%]">
          {/* button control */}

          <div className="p-8 mx-20">
            <h2 className="text-xl font-bold text-center text-white/80 font-raleway">
              {tracks[trackIndex].title}
            </h2>

            <div className="flex items-center justify-center space-x-5">
              <button
                type="button"
                onClick={() => toPrevTrack()}
                className="text-[24px] text-white/40 hover:text-white/80"
              >
                <i className="fas">&#xf04a;</i>
              </button>
              {isPlaying ? (
                <button
                  type="button"
                  onClick={() => setIsPlaying(false)}
                  className="w-16 h-16 transition duration-150 ease-out group hover:scale-[1.2] text-[24px] text-white/40 hover:text-white/80"
                >
                  <i className="fas">&#xf04c;</i>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsPlaying(true)}
                  className="w-16 h-16 transition duration-150 ease-out group hover:scale-[1.2] text-[24px] text-white/40 hover:text-white/80"
                >
                  <i className="fas">&#xf04b;</i>
                </button>
              )}

              <button
                type="button"
                onClick={() => toNextTrack()}
                className="text-[24px] text-white/40 hover:text-white/80"
              >
                <i className="fas">&#xf04e;</i>
              </button>
            </div>

            <div>
              <input
                type="range"
                value={trackProgress}
                // step={0.1}
                min="0"
                max={tracks[trackIndex].durationTime}
                className=" progress w-[100%] mt-10 rounded-lg bg-red-300 inline"
                onChange={(e) => onScrub(e.target.value)}
                onMouseUp={onScrubEnd}
                onKeyUp={onScrubEnd}
                // style={{ background: trackStyling }}
              />
              {audioRef?.current?.duration ? (
                <p className="block float-right text-xs font-bold text-white/80 font-PT_sans">
                  {`${calculateTime(trackProgress)}/${
                    tracks[trackIndex].durationTime
                  }`}
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
                  data-key={index}
                  onClick={playlistSelectionHandler}
                  className="flex items-center px-8 py-4 mx-10 mb-4 bg-white shadow-xl cursor-pointer rounded-xl bg-opacity-40 bg-clip-padding backdrop-blur-sm hover:bg-opacity-60"
                >
                  <button
                    type="button"
                    className="w-16 h-16 transition duration-150 ease-out group hover:scale-[1.2] text-[24px] text-white/40 hover:text-white/80"
                  >
                    {trackIndex === index && isPlaying ? (
                      <i className="fas">&#xf04c;</i>
                    ) : (
                      <i className="fas">&#xf04b;</i>
                    )}
                  </button>

                  <div className="w-0 h-10 ml-8 border border-solid border-white/60" />
                  <h2 className="flex ml-5 text-xl font-bold grow text-white/60 font-raleway">
                    {track.title}
                  </h2>
                  <p className="text-base font-bold text-white/60 font-PT_sans">
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
