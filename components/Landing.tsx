import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useCycle } from "framer-motion";
import classNames from "classnames";

function Landing(): JSX.Element {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  return (
    <section className="flex h-[100vh] w-[100vw] m-auto 2xl:justify-center 2xl:w-[80vw]">
      <div className="flex ml-10">
        <div className="w-[60vw] 2xl:w-[981px] h-auto max-w-[981px] ">
          <Image
            src="/icon/bigCircle.svg"
            layout="responsive"
            width={981}
            height={1022}
          />
        </div>
        <div className="mt-[480px] xl:-ml-[750px] 2xl:-ml-[790px]">
          <h1 className="xl:text-5xl 2xl:text-6xl font-bold font-Cinzel text-[#4D6980] ">
            Album Title
          </h1>
          <p className="text-[#4D6980] xl:text-lg 2xl:text-xl mt-4 font-Aleo">
            RUSSELL KRANES, ALEX LEVINE, SAM WEBER, JAY SAWYER
          </p>
        </div>
      </div>

      <div>
        <div className="w-[60vw] 2xl:w-[179px] h-auto max-w-[179px] mt-32 ml-64 cursor-pointer group hover:opacity-50">
          <Image
            src="/icon/button1.svg"
            layout="responsive"
            width={179}
            height={175}
          />
          <h2 className="text-2xl font-Aleo text-[#4D6980] -mt-28 ml-10 rotate-6">
            VISUAL
          </h2>
        </div>

        <div className="w-[214px] h-auto max-w-[214px] cursor-pointer group hover:opacity-50 ml-[550px]">
          <Image
            src="/icon/button2.svg"
            layout="responsive"
            width={214}
            height={242}
          />
          <h2 className="text-3xl font-Aleo text-[#4D6980] -rotate-6 -mt-32 ml-14">
            TRACKS
          </h2>
        </div>

        <div className="w-[151px] h-auto max-w-[151px] cursor-pointer group hover:opacity-50 mt-32 ml-[350px]">
          <Image
            src="/icon/button3.svg"
            layout="responsive"
            width={151}
            height={171}
          />
          <h2 className="text-2xl font-Aleo text-[#4D6980] -mt-24 ml-10 -rotate-5">
            ABOUT
          </h2>
        </div>

        <div className="w-[151px] h-auto max-w-[151px] cursor-pointer group hover:opacity-50 mt-28 ml-[600px]">
          <Image
            src="/icon/button4.svg"
            layout="responsive"
            width={151}
            height={171}
          />
          <h2 className="text-2xl font-Aleo text-[#4D6980] -mt-24 ml-4 rotate-6">
            CONTACT
          </h2>
        </div>
      </div>
    </section>
  );
}

export default Landing;
