import { motion } from "framer-motion";
import useAppState from "../../store/useAppState";

function Header() {
  const { scrollToSection } = useAppState();
  return (
    <div className="md:pt-28 pt-30 mx-12 md:mx-0 z-10 flex flex-col items-center justify-center">
      <div className="flex gap-2">
        <p className="dark:text-light text-base border-b-2 dark:border-b-white font-light md:text-4xl text-2xl italic">
          Frank
        </p>
        <p className="dark:text-light  text-third font-bold md:text-4xl text-2xl">
          Here!
        </p>
      </div>
      <div className="flex gap-2">
        <p className="lg:text-8xl md:text-6xl sm:text-4xl text-3xl text-secondary font-bold whitespace-nowrap">
          Full stack
        </p>
        <p className="lg:text-8xl md:text-6xl sm:text-4xl text-3xl dark:text-light text-third font-bold">
          Developer
        </p>
      </div>
      <p className="dark:text-light md:text-6xl sm:text-4xl text-3xl text-third">
        &
      </p>
      <div className="flex gap-2 mb-4">
        <p className="lg:text-8xl md:text-6xl sm:text-4xl text-3xl  text-secondary font-bold">
          UI/UX
        </p>
        <p className="lg:text-8xl md:text-6xl sm:text-4xl text-3xl dark:text-light text-third font-bold">
          Designer
        </p>
      </div>
      <p className="text-center mt-2 dark:text-light lg:mx-52 mx-20 md:font-md hidden md:block">
        Build the backbone of{" "}
        <span className="text-secondary">innovation,</span> turning ideas into
        powerful digital realities. UI/UX designs shape the soul of the
        experience, ensuring every interaction feels seamless and
        human‑centered.
      </p>
      <div className="md:flex mt-6 justify-center items-center">
        <div className="flex flex-row md:ml-0 ml-12">
          <div className="flex flex-col border-r-2 pr-8 border-r-base dark:border-r-light">
            <p className="text-secondary text-md md:text-3xl text-xl">5+</p>
            <p className="text-base dark:text-light font-light md:text-sm text-xs">
              Years in
            </p>
            <p className="text-base dark:text-light font-light md:text-sm text-xs">
              Visual Design
            </p>
          </div>
          <div className="flex flex-col border-r-2 pr-4 pl-10 border-r-base  dark:border-r-light">
            <p className="text-secondary text-md md:text-3xl text-xl">6+</p>
            <p className="text-base dark:text-light font-light md:text-sm text-xs">
              Full Stack
            </p>
            <p className="text-base dark:text-light font-light md:text-sm text-xs">
              School Projects
            </p>
          </div>
          <div className="flex flex-col pl-10 ">
            <p className="text-secondary text-md md:text-3xl text-xl">85%</p>
            <p className="text-base dark:text-light font-light md:text-sm text-xs">
              Professor
            </p>
            <p className="text-base dark:text-light font-light md:text-sm text-xs">
              Projects Satisfaction
            </p>
          </div>
        </div>
        <div
          onClick={() => scrollToSection("about")}
          className="bg-secondary hover:bg-red-400 transition-all p-4 md:px-8 rounded-md md:mt-0 mt-6 md:ml-10 mx-8"
        >
          <p className="text-light text-center">Explore More</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
