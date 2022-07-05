import Image from "next/image";

function About(): JSX.Element {
  return (
    <section
      id="about"
      className="bg-gradient-to-r from-[#171717] to-black/90 flex flex-col xl:flex-row items-center space-x-0 2xl:space-x-10 pt-24"
    >
      <div className="flex flex-col ml-16 basis-1/2">
        <h1 className="text-5xl uppercase text-white/60 2xl:text-6xl text-bold font-raleway">
          about the project
        </h1>
        <div className="mt-5 border border-2 border-solid border-white/60 w-80 md:w-[500px]" />
        <p className="text-xl 2xl:text-3xl text-white/60 font-raleway pr-16 2xl:pr-0 max-w-[100%] mt-10 leading-relaxed">
          I Live Dreaming is an album of collaboratively interpreted American
          standards and original compositions. Since meeting in New York City
          nearly a decade ago, pianist Russell Kranes, bassist Sam Weber,
          guitarist Alex Levine, and drummer Jay Sawyer have formed a collective
          musical identity through thousands of hours of performance across a
          vast array of musical contexts. Having all studied with musical
          masters, including Geri Allen, Robert Hurst, Rodney Jones, Fred
          Hersch, and Billy Hart, I Live Dreaming is both an homage to the
          tradition and a fresh approach to creative composition. Each of the
          four musicians strive to impart spirit and honesty with the hope that
          each listener can discover a deeper connection with their own
          conception of life’s beauty.
        </p>
      </div>
      <div className="w-[100vw] basis-1/2 my-20">
        <Image
          src="/image/about.jpg"
          layout="responsive"
          height={1001}
          width={1500}
        />
      </div>
    </section>
  );
}

export default About;
