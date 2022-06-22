import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useCycle } from "framer-motion";
import classNames from "classnames";

function Landing(): JSX.Element {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  return (
    <section className="absolute flex flex-col top-[75%] items-left ml-32 ">
      <h1 className="z-10 font-bold text-gray-200 text-8xl font-raleway">
        I LIVE DREAMING
      </h1>
      <p className="z-10 mt-5 text-3xl text-gray-200 uppercase font-raleway">
        russell kranes, alex levine, sam weber, jay sawyer
      </p>
    </section>
  );
}

export default Landing;
