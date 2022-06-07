import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useCycle } from "framer-motion";
import classNames from "classnames";

function Header(): JSX.Element {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  return (
    <section className="flex items-center pt-10 justify-end pr-10 w-[100vw] m-auto 2xl:w-[90vw] 4xl:w-[80vw]">
      <motion.div
        className=" w-[40px] h-auto max-w-[40px] hover:cursor-pointer"
        onClick={() => setIsActive(!isActive)}
        animate={{ rotate: isActive ? 180 : 0 }}
      >
        <Image
          src="/icon/toggle.svg"
          layout="responsive"
          height={40}
          width={40}
        />
      </motion.div>

      <button
        className="flex items-center justify-center ml-5 space-x-2 opacity-100 group"
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        <div
          className={classNames(
            "h-12 w-1 my-[2px] rounded-full bg-[#4D6980] transition ease transform duration-300",
            navbarOpen
              ? "rotate-45 translate-y-0 translate-x-3 opacity-50 group-hover:opacity-100"
              : "opacity-50 group-hover:opacity-100"
          )}
        />
        <div
          className={classNames(
            "h-12 w-1 my-[2px] rounded-full bg-[#4D6980] transition ease transform duration-300",
            navbarOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
          )}
        />
        <div
          className={classNames(
            "h-12 w-1 my-[2px] rounded-full bg-[#4D6980] transition ease transform duration-300",
            navbarOpen
              ? "-rotate-45 -translate-y-0 -translate-x-3 opacity-50 group-hover:opacity-100"
              : "opacity-50 group-hover:opacity-100"
          )}
        />
      </button>
    </section>
  );
}

export default Header;
