import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useCycle } from "framer-motion";
import classNames from "classnames";
import CurrentTrack from "./CurrentTrack";

function MusicPlayers({ tracks }): JSX.Element {
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  // can't run Audio API on server
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio(tracks[trackIndex].audioSrc);
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

  const handlePlay = (index) => {
    console.log("clicked index", index);
    setIsPlaying((prev) => {
      console.log(prev);
      return prev === index ? false : true;
    });
  };

  const playlistSelectionHandler = (e) => {
    const num = Number(e.currentTarget.getAttribute("data-key"));
    // console.log("selected", num);
    // const selectedIdx = tracks.indexOf(num);
    setTrackIndex(num);
    setIsPlaying(true);
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
          <CurrentTrack
            title={tracks[trackIndex].title}
            audioRef={audioRef}
            tracks={tracks}
            setIsPlaying={setIsPlaying}
            toPrevTrack={toPrevTrack}
            toNextTrack={toNextTrack}
            isPlaying={isPlaying}
            onScrubEnd={onScrubEnd}
            onScrub={onScrub}
            calculateTime={calculateTime}
            trackIndex={trackIndex}
            audioSrc={tracks[trackIndex].audioSrc}
            durationTime={tracks[trackIndex].durationTime}
            intervalRef={intervalRef}
          />
          <div className="mt-10">
            {tracks.map((track, index) => {
              return (
                <div
                  key={index}
                  data-key={index}
                  onClick={playlistSelectionHandler}
                  className="flex items-center px-8 py-4 mx-10 mb-4 bg-white shadow-xl rounded-xl bg-opacity-40 bg-clip-padding backdrop-blur-sm hover:bg-opacity-60"
                >
                  <button
                    type="button"
                    className="w-16 h-16 transition duration-150 ease-out group hover:scale-[1.2] text-[24px] text-white/40 hover:text-white/80"
                  >
                    <i className="fas">&#xf04b;</i>
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
