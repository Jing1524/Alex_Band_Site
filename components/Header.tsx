import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useCycle } from "framer-motion";
import classNames from "classnames";

function Header(): JSX.Element {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  return (
    <section
      id="navbar"
      className="bg-black opacity-[88%] xl:bg-opacity-0 relative z-50"
    >
      <div className="flex justify-center pt-10 pb-5 space-x-10 xl:justify-end xl:mr-32">
        <motion.div className="z-10 group" whileHover={{ scale: 1.1 }}>
          <div className="flex flex-col items-center nav-item ">
            <a
              className="z-10 text-lg font-bold text-gray-200 lg:text-2xl font-raleway"
              href="#tracks"
            >
              TRACKS
            </a>
            <div className="w-[100px] invisible group-hover:visible">
              <Image
                src="/icon/stroke.svg"
                layout="responsive"
                height={30}
                width={150}
              />
            </div>
          </div>
        </motion.div>
        <motion.div className="z-10 group" whileHover={{ scale: 1.1 }}>
          <div className="flex flex-col items-center nav-item">
            <a
              className="z-10 text-lg font-bold text-gray-200 lg:text-2xl font-raleway "
              href="#about"
            >
              ABOUT
            </a>
            <div className="w-[100px] invisible group-hover:visible">
              <Image
                src="/icon/stroke.svg"
                layout="responsive"
                height={30}
                width={150}
              />
            </div>
          </div>
        </motion.div>

        <motion.div className="z-10 group" whileHover={{ scale: 1.1 }}>
          <div className="flex flex-col items-center nav-item">
            <a
              className="z-10 text-lg font-bold text-gray-200 lg:text-2xl font-raleway "
              href="#contact"
            >
              CONTACT
            </a>
            <div className="w-[100px] invisible group-hover:visible">
              <Image
                src="/icon/stroke.svg"
                layout="responsive"
                height={30}
                width={150}
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* <motion.div
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
      </motion.div> */}

      {/* <button
        className="flex items-center justify-center ml-5 space-x-2 opacity-100 group lg:hidden"
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
      </button> */}
    </section>
  );
}

export default Header;
