//hooks
import { ReactSVG } from "react-svg";
import { motion } from "framer-motion";

//logo and images
import { IoMdDownload } from "react-icons/io";
import Frank from "../../assets/img/Frank.png";
const LogoDark = new URL("../../assets/logo/Logo.svg", import.meta.url).href;

//pdf
import CV from "../../assets/pdf/frank.pdf";

function Overview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }} // start slightly up, small, and invisible
      whileInView={{ opacity: 1, y: 0 }} // fade in, scale up, slide to original position
      exit={{ opacity: 0, y: 20 }} // fade out and slide down when leaving
      viewport={{ once: false, amount: 0.5 }} // triggers when 50% visible
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 20,
        duration: 0.5,
      }}
      className="mb-20 p-8"
    >
      {/* Main Card Container */}
      <div className="relative z-0 bg-gradient-to-br from-red-600 to-red-900 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* TEXT CONTENT - Order 2 on mobile, 1 on desktop */}
        <div className="flex-1 mt-50 lg:mt-0 order-2 md:order-1 flex flex-col items-center md:items-start">
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-white text-lg leading-relaxed md:text-left mb-8 max-w-2xl"
          >
            My name is <span className="font-semibold">Frank Arbiso Jr.</span>,
            a dedicated
            <i className="font-bold"> Fullstack Developer and UI/UX Designer</i>
            . My career began as a <i className="font-bold">cartoonist</i>,
            which reflects my creativity and storytelling ability. I later
            worked as a <i className="font-bold">Merchandiser </i>
            at PureSnack, where I gained valuable insights into consumer
            behavior and product presentation. My experience as an{" "}
            <i className="font-bold">Assistant Marketing Associate</i> at Jungle
            Bravo involved creating email designs and graphic ads for social
            media.
          </motion.p>

          {/* Download Button */}
          <a
            href={CV}
            download="Frank-Arbiso-CV.pdf"
            className="flex items-center gap-2 bg-transparent border-2 border-white/50 hover:bg-white hover:text-red-600 transition-all px-6 py-3 rounded-xl text-white font-medium"
          >
            <IoMdDownload size={22} />
            <span>Download CV</span>
          </a>
        </div>

        {/* IMAGE CONTAINER - Order 1 on mobile, 2 on desktop */}
        <div className="absolute z-10 xl:-right-25 lg:-right-40  md:right-45 -top-15 md:-top-20 lg:-top-35 flex-1 flex justify-center items-center order-1 md:order-2">
          {/* The Floating Icons (represented as a simplified div or actual icons) */}
          <div className="relative">
            <img
              src={Frank}
              alt="Frank Arbiso"
              className="w-80 lg:w-150 h-auto  drop-shadow-2xl"
            />
            {/* Custom Logo/Branding on bottom right for Desktop */}
            <div className="hidden lg:block absolute bottom-0 right-40">
              <ReactSVG
                src={LogoDark}
                className="w-32 h-auto"
                beforeInjection={(svg) => {
                  svg.classList.add("w-full", "h-auto", "fill-current");
                }}
              />
            </div>
          </div>
        </div>

        {/* Optional: Subtle Background Watermark (the code brackets) */}
        <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 opacity-10 text-[150px] font-bold text-white pointer-events-none select-none"></div>
      </div>
    </motion.div>
  );
}

export default Overview;
