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
      // @ts-ignore
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
        <motion.div className=" w-full md:w-[85%] lg:w-[60%]">
          {/* button control */}

          <div className="p-8 mx-20">
            <h2 className="text-xl font-bold text-center text-white/80 font-raleway">
              {tracks[trackIndex].title}
            </h2>

            <div className="flex items-center justify-center mt-6 space-x-6">
              <button
                type="button"
                onClick={() => toPrevTrack()}
                className=" w-8 h-8 text-[24px] text-white/40 hover:text-white/80 hover:scale-[1.1]"
              >
                <Image
                  src="/icon/skip.svg"
                  layout="responsive"
                  height={8}
                  width={8}
                />
              </button>
              {isPlaying ? (
                <button
                  type="button"
                  onClick={() => setIsPlaying(false)}
                  className="w-8 h-8 transition duration-150 ease-out group hover:scale-[1.1] text-white/40 hover:text-white/80"
                >
                  <Image
                    src="/icon/pause.svg"
                    layout="responsive"
                    height={8}
                    width={8}
                  />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsPlaying(true)}
                  className="w-8 h-8 transition duration-150 ease-out group hover:scale-[1.1] text-[24px] text-white/40 hover:text-white/80"
                >
                  <Image
                    src="/icon/play_button.svg"
                    layout="responsive"
                    height={8}
                    width={8}
                  />
                </button>
              )}

              <button
                type="button"
                onClick={() => toNextTrack()}
                className="w-8 h-8 rotate-180 text-[24px] text-white/40 hover:text-white/80 hover:scale-[1.1]"
              >
                <Image
                  src="/icon/skip.svg"
                  layout="responsive"
                  height={8}
                  width={8}
                />
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
                  className="flex items-center px-8 py-5 mx-10 mb-4 bg-white shadow-xl cursor-pointer 2xl:py-4 rounded-xl bg-opacity-40 bg-clip-padding backdrop-blur-sm hover:bg-opacity-60"
                >
                  <button
                    type="button"
                    className="w-6 h-6 transition duration-150 ease-out group hover:scale-[1.2] text-[18px] 2xl:text-[24px] text-white/40 hover:text-white/80"
                  >
                    {trackIndex === index && isPlaying ? (
                      <Image
                        src="/icon/pause.svg"
                        layout="responsive"
                        height={8}
                        width={8}
                      />
                    ) : (
                      <Image
                        src="/icon/play_button.svg"
                        layout="responsive"
                        height={8}
                        width={8}
                      />
                    )}
                  </button>

                  <div className="w-0 h-10 ml-4 border border-solid 2xl:ml-8 border-white/60" />
                  <h2 className="flex ml-5 text-lg font-bold 2xl:text-xl grow text-white/60 font-raleway">
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
