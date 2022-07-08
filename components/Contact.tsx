import Image from "next/image";

function Contact(): JSX.Element {
  return (
    <section
      id="contact"
      className=" bg-gradient-to-r from-[#171717] to-black/90 flex flex-col flex-col-reverse lg:flex-row items-start space-x-10 py-16"
    >
      <div className="w-[100vw] basis-3/5 pt-10">
        <Image
          src="/image/contact.jpg"
          layout="responsive"
          height={1001}
          width={1500}
        />
      </div>
      <div className="flex flex-col items-start pl-6 xl:mt-8 lg:items-end space-y-14 basis-2/5">
        <div className="flex flex-col items-start lg:items-end">
          <h1 className="mr-20 text-5xl uppercase 2xl:text-6xl text-white/60 text-semibold font-raleway">
            CONTACT
          </h1>
          <div className="mt-5 mr-20 border border-2 border-solid border-white/60 w-80 " />
        </div>

        <div className="flex flex-col mr-20 space-y-10">
          <div className="flex flex-col items-start lg:items-end">
            <h3 className="text-2xl 2xl:text-3xl text-white/60 font-raleway">
              RUSSELL KRANES
            </h3>
            <h3 className="text-xl 2xl:text-2xl text-white/60 font-raleway">
              1kranes@gmail.com
            </h3>
          </div>
          <div className="flex flex-col items-start lg:items-end">
            <h3 className="text-2xl 2xl:text-3xl text-white/60 font-raleway">
              RUSSELL KRANES
            </h3>
            <h3 className="text-xl 2xl:text-2xl text-white/60 font-raleway">
              1kranes@gmail.com
            </h3>
          </div>
        </div>
        {/* social media */}
        <div className="flex mr-20 space-x-5 text-white/60">
          <button className="w-8 h-8">
            <Image
              src="/icon/facebook.svg"
              layout="responsive"
              height={8}
              width={8}
            />
          </button>
          <button className="w-8 h-8">
            <Image
              src="/icon/instagram.svg"
              layout="responsive"
              height={8}
              width={8}
            />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
