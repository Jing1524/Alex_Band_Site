import { useState, useEffect, useRef } from "react";

function CurrentTrack({
  title,
  tracks,
  toPrevTrack,
  toNextTrack,
  setIsPlaying,
  isPlaying,
  onScrubEnd,
  onScrub,
  calculateTime,
  audioRef,
  trackIndex,
  audioSrc,
  durationTime,
  intervalRef,
}): JSX.Element {
  const [trackProgress, setTrackProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  //   const intervalRef = useRef(0);
  const isReady = useRef(false);

  const startTimer = () => {
    clearInterval(intervalRef?.current);

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

    audioRef.current = new Audio(audioSrc);
    setTrackProgress(audioRef?.current?.currentTime);
    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      isReady.current = true;
    }
  }, [trackIndex]);

  return (
    <div className="p-8 mx-20">
      <h2 className="text-xl font-bold text-center text-white/80 font-raleway">
        {title}
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
          <p className="block float-right text-xs font-bold text-white/80 font-PT_sans">
            {`${calculateTime(
              audioRef?.current?.currentTime
            )}/-${durationTime}`}
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default CurrentTrack;
