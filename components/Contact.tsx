import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useCycle } from "framer-motion";
import classNames from "classnames";
import AudioControls from "./AudioControls";

function Contact(): JSX.Element {
  return (
    <section
      id="contact"
      className=" bg-gradient-to-r from-[#171717] to-black/90 flex flex-col flex-col-reverse xl:flex-row items-start space-x-10 py-16"
    >
      <div className="w-[100vw] basis-3/5 pt-10">
        <Image
          src="/image/contact.jpg"
          layout="responsive"
          height={1001}
          width={1500}
        />
      </div>
      <div className="flex flex-col items-start pl-6 xl:mt-8 xl:items-end space-y-14 basis-2/5">
        <div className="flex flex-col items-start lg:items-end">
          <h1 className="mr-32 text-5xl uppercase 2xl:text-6xl text-white/60 text-semibold font-raleway">
            CONTACT
          </h1>
          <div className="mt-5 border border-2 border-solid mr-[130px] border-white/60 w-80 " />
        </div>

        <div className="flex flex-col mr-32 space-y-10">
          <div className="flex flex-col items-start 2xl:items-end">
            <h3 className="text-2xl 2xl:text-3xl text-white/60 font-raleway">
              RUSSELL KRANES
            </h3>
            <h3 className="text-xl 2xl:text-2xl text-white/60 font-raleway">
              1kranes@gmail.com
            </h3>
          </div>
          <div className="flex flex-col items-start 2xl:items-end">
            <h3 className="text-2xl 2xl:text-3xl text-white/60 font-raleway">
              RUSSELL KRANES
            </h3>
            <h3 className="text-xl 2xl:text-2xl text-white/60 font-raleway">
              1kranes@gmail.com
            </h3>
          </div>
        </div>
        {/* social media */}
        <div className="flex mr-32 space-x-5 text-white/60">
          <button>
            <i className="fab text-[36px]">&#xf082;</i>
          </button>
          <button>
            <i className="fab text-[36px]">&#xf16d;</i>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
