import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useCycle } from "framer-motion";
import classNames from "classnames";
import AudioControls from "./AudioControls";

function Footer(): JSX.Element {
  return (
    <section className="bg-gradient-to-r from-[#171717] to-black/90 flex flex-col items-center pb-16">
      <p className="text-base text-white/60 font-raleway">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        ultricies viverra convallis. Integer euismod gravida lacus
      </p>
      <p className="text-base text-white/60 font-raleway">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </section>
  );
}

export default Footer;
