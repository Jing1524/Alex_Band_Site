import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useCycle } from "framer-motion";
import classNames from "classnames";

function Header(): JSX.Element {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  return (
    <section className="h-[100vh] bg-[url('/image/landing.jpg')] bg-no-repeat bg-cover">
      <div
        className={classNames("inline-block float-right")}
        // className={classNames(
        //   "flex-grow lg:flex items-right float-right h-[100%]",
        //   navbarOpen ? "flex flex-col items-center mt-20 lg:mt-0" : "hidden"
        // )}
        id="navbar"
      >
        <ul
          className={classNames("flex space-x-10 mt-14 mr-32 flex-end")}
          // className={classNames(
          //   "flex flex-col items-center space-y-10 sm:space-y-20 mb-[250px] lg:mb-0 lg:space-y-0 lg:flex-row list-none lg:ml-auto",
          //   navbarOpen && "flex-grow lg:grow-0"
          // )}
        >
          <motion.div className="z-10 group" whileHover={{ scale: 1.1 }}>
            <li className="flex items-center nav-item">
              <a
                // className="pl-2 pr-9 py-2 flex items-center uppercase font-normal font-metropolis text-xl lg:text-base leading-snug text-[#17015B] group-hover:font-bold"
                className="z-10 text-2xl font-bold text-gray-200 font-raleway"
                href="#tracks"
                onClick={() => setNavbarOpen(false)}
              >
                TRACKS
              </a>
            </li>
          </motion.div>
          <motion.div className="z-10 group" whileHover={{ scale: 1.1 }}>
            <li className="flex items-center nav-item">
              <a
                // className="pl-2 pr-9 py-2 flex items-center uppercase font-normal font-metropolis text-xl lg:text-base leading-snug text-[#17015B] group-hover:font-bold"
                className="z-10 text-2xl font-bold text-gray-200 font-raleway "
                href="#about"
                onClick={() => setNavbarOpen(false)}
              >
                ABOUT
              </a>
            </li>
          </motion.div>

          <motion.div className="z-10 group" whileHover={{ scale: 1.1 }}>
            <li className="flex items-center nav-item">
              <a
                // className="pl-2 pr-9 py-2 flex items-center uppercase font-normal font-metropolis text-xl lg:text-base leading-snug text-[#17015B] group-hover:font-bold"
                className="z-10 text-2xl font-bold text-gray-200 font-raleway "
                href="#contack"
                onClick={() => setNavbarOpen(false)}
              >
                CONTACT
              </a>
            </li>
          </motion.div>
        </ul>
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

      <button
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
      </button>
    </section>
  );
}

export default Header;
