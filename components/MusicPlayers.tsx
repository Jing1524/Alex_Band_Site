import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useCycle } from "framer-motion";
import classNames from "classnames";

function MusicPlayers(): JSX.Element {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <section>
      <motion.div className="ml-10 rounded border border-2 border-red-500 border-solid w-[600px] h-[1000px]">
        {/* play */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-16 h-16 transition duration-150 ease-out bg-green-200 rounded-full group hover:scale-150"
        >
          {isPlaying ? (
            <div className="w-[24px] h-[24px] m-auto">
              <Image
                src="/icon/play.svg"
                layout="responsive"
                height={24}
                width={24}
              />
            </div>
          ) : (
            <div className="w-[24px] h-[24px] m-auto">
              <Image
                src="/icon/stop.svg"
                layout="responsive"
                height={24}
                width={24}
              />
            </div>
          )}
        </button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
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
      </motion.div>
    </section>
  );
}

export default MusicPlayers;
