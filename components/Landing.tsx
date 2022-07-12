import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useCycle } from "framer-motion";
import classNames from "classnames";

function Landing(): JSX.Element {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  return (
    <section className="xl:-mt-28">
      <div className="w-[100%]">
        <Image
          src="/image/landing.jpg"
          layout="responsive"
          width={2048}
          height={1536}
        />
      </div>

      <div className="flex flex-col items-end text-right pr-7 md:pr-20 py-10 bg-black opacity-[91%] xl:absolute xl:bg-opacity-0 xl:-mt-80 xl:items-start xl:ml-16">
        <h1 className="text-4xl font-bold text-gray-200 md:text-6xl lg:text-6xl 2xl:text-8xl font-raleway">
          I LIVE DREAMING
        </h1>
        <p className="hidden mt-10 text-3xl text-gray-200 uppercase font-raleway xl:block">
          russell kranes, alex levine, sam weber, jay sawyer
        </p>
        <div className="flex flex-col items-end mt-10 space-y-3 text-2xl text-gray-200 uppercase font-raleway xl:hidden">
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
