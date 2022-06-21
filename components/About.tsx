import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useCycle } from "framer-motion";
import classNames from "classnames";
import AudioControls from "./AudioControls";

function About({}): JSX.Element {
  return (
    <section className="bg-gradient-to-r from-[#171717] to-black/90 h-[100vh] w-[100vw] flex">
      <div className="flex flex-col basis-1/2">
        <h1 className="text-6xl uppercase text-white/60 text-semibold font-raleway">
          about the project
        </h1>
        <p className="text-3xl text-white/60 font-raleway max-w-[100%] mt-14">
          I Live Dreaming is an album of collaboratively interpreted American
          standards and original compositions. Since meeting in New York City
          nearly a decade ago, pianist Russell Kranes, bassist Sam Weber,
          guitarist Alex Levine, and drummer Jay Sawyer have formed a collective
          musical identity through thousands of hours of performance across a
          vast array of musical contexts. Having all studied with musical
          masters, including Geri Allen, Robert Hurst, Rodney Jones, Fred
          Hersch, and Billy Hart, I Live Dreaming is both an homage to the
          tradition and a fresh approach to creative composition. Each of the
          four musicians strive to impart spirit and honesty with the hope that
          each listener can discover a deeper connection with their own
          conception of life’s beauty.
        </p>
      </div>
      <div className="w-[100vw] basis-1/2">
        <Image
          src="/image/about.jpg"
          layout="responsive"
          height={1001}
          width={1500}
        />
      </div>
    </section>
  );
}

export default About;
