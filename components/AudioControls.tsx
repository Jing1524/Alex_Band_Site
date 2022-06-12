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
      <button type="button" onClick={onPrevClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z"
          />
        </svg>
      </button>
      {isPlaying ? (
        <button
          type="button"
          onClick={() => onPlayPauseClick(false)}
          className="w-16 h-16 transition duration-150 ease-out bg-green-200 rounded-full group hover:scale-[1.2]"
        >
          <div className="w-[24px] h-[24px] m-auto">
            <Image
              src="/icon/stop.svg"
              layout="responsive"
              height={24}
              width={24}
            />
          </div>
        </button>
      ) : (
        <button
          type="button"
          onClick={() => onPlayPauseClick(true)}
          className="w-16 h-16 transition duration-150 ease-out bg-green-200 rounded-full group hover:scale-[1.2]"
        >
          <div className="w-[24px] h-[24px] m-auto">
            <Image
              src="/icon/play.svg"
              layout="responsive"
              height={24}
              width={24}
            />
          </div>
        </button>
      )}

      <button type="button" className="rotate-180" onClick={onNextClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z"
          />
        </svg>
      </button>
    </div>
  );
}

export default AudioControls;
