import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useCycle } from "framer-motion";
import classNames from "classnames";

function Landing(): JSX.Element {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  return (
    <section className="w-[100vw] h-auto 2xl:-mt-28">
      <Image
        src="/image/landing.jpg"
        layout="responsive"
        width={2048}
        height={1536}
      />
      <div className="flex flex-col items-end text-right pr-10 md:pr-20 py-20 bg-black opacity-[91%] 2xl:absolute 2xl:bg-opacity-0 2xl:-mt-80 2xl:items-start 2xl:ml-16">
        <h1 className="text-5xl font-bold text-gray-200 md:text-6xl lg:text-8xl font-raleway">
          I LIVE DREAMING
        </h1>
        <p className="hidden mt-10 text-3xl text-gray-200 uppercase font-raleway lg:block">
          russell kranes, alex levine, sam weber, jay sawyer
        </p>
        <div className="flex flex-col items-end mt-10 space-y-3 text-3xl text-gray-200 uppercase font-raleway lg:hidden">
          <p>russell kranes</p>
          <p>alex levine</p>
          <p>sam weber</p>
          <p>jay sawyer</p>
        </div>
      </div>
    </section>
  );
}

export default Landing;
