import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useCycle } from "framer-motion";
import classNames from "classnames";

function Landing(): JSX.Element {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  return (
    <section className="-mt-[85px] flex">
      <div className="w-[60vw] 2xl:w-[981px] h-auto max-w-[981px] ">
        <Image
          src="/icon/bigCircle.svg"
          layout="responsive"
          width={981}
          height={1022}
        />
      </div>
      <div className="mt-[480px] -ml-[790px] ">
        <h1 className="text-6xl font-bold font-Cinzel text-[#4D6980] ">
          Album Title
        </h1>
        <p className="text-[#4D6980] text-xl mt-4 font-Aleo">
          RUSSELL KRANES, ALEX LEVINE, SAM WEBER, JAY SAWYER
        </p>
      </div>
    </section>
  );
}

export default Landing;
