import React from "react";
import Image from "next/image";
function AudioControls({
  isPlaying,
  onPlayPauseClick,
  onPrevClick,
  onNextClick,
}): JSX.Element {
  return (
    <div className="flex items-center justify-center space-x-5">
      <button
        type="button"
        onClick={onPrevClick}
        className="text-[24px] text-white/40 hover:text-white/80"
      >
        <i className="fas">&#xf04a;</i>
      </button>
      {isPlaying ? (
        <button
          type="button"
          onClick={() => onPlayPauseClick(false)}
          className="w-16 h-16 transition duration-150 ease-out group hover:scale-[1.2] text-[24px] text-white/40 hover:text-white/80"
        >
          <i className="fas">&#xf04c;</i>
        </button>
      ) : (
        <button
          type="button"
          onClick={() => onPlayPauseClick(true)}
          className="w-16 h-16 transition duration-150 ease-out group hover:scale-[1.2] text-[24px] text-white/40 hover:text-white/80"
        >
          <i className="fas">&#xf04b;</i>
        </button>
      )}

      <button
        type="button"
        onClick={onNextClick}
        className="text-[24px] text-white/40 hover:text-white/80"
      >
        <i className="fas">&#xf04e;</i>
      </button>
    </div>
  );
}

export default AudioControls;
