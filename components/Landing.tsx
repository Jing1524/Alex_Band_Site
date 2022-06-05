import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useCycle } from "framer-motion";
import classNames from "classnames";

function Landing(): JSX.Element {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  return (
    <section className="-mt-[85px]">
      <div className="w-[981px] h-auto max-w-[981px] ">
        <Image
          src="/icon/bigCircle.svg"
          layout="responsive"
          width={981}
          height={1022}
        />
      </div>
    </section>
  );
}

export default Landing;
