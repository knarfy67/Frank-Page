//logo and svg
import { ReactSVG } from "react-svg";
const LogoDark = new URL("../../assets/logo/Logo.svg", import.meta.url).href;
const LogoLight = new URL("../../assets/logo/LogoLight.svg", import.meta.url)
  .href;
import { FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { CiLight } from "react-icons/ci";

//hooks
import useAppState from "../../store/useAppState";
import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";
//components
import NavMobile from "./NavMobile";

function NavBar() {
  const {
    darkMode,
    toggleDarkMode,
    open,
    setOpen,
    scrolled,
    setScrolled,
    scrollToSection,
  } = useAppState();

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // scroll threshold
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setScrolled]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 flex flex-row justify-between md:items-center p-3 transition-all duration-300
        ${
          scrolled
            ? "bg-white/20 dark:bg-black/20 backdrop-blur-md"
            : "bg-transparent"
        }
      `}
    >
      <div className="flex flex-col md:block gap-4">
        <ReactSVG
          src={darkMode ? LogoDark : LogoLight}
          className="w-32 h-auto"
          beforeInjection={(svg) => {
            svg.classList.add("w-full", "h-auto", "fill-current");
          }}
        />
        {/* mobile view */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ y: -20, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className="w-full fixed top-16 left-0 z-20"
            >
              <NavMobile
                open={open}
                setOpen={setOpen}
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="mt-4 md:hidden" onClick={() => setOpen(!open)}>
        {!open ? (
          <FaBars color={darkMode ? "white" : "black"} />
        ) : (
          <FaTimes color={darkMode ? "white" : "black"} />
        )}
      </div>
      {/* desktop view */}
      <div className="hidden md:flex md:flex-row gap-12">
        <p
          onClick={() => scrollToSection("home")}
          className="relative font-semibold text-sm text-third dark:text-light cursor-pointer
    before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 
    before:bg-secondary before:transition-all before:duration-300 hover:before:w-full"
        >
          Home
        </p>

        <p
          onClick={() => scrollToSection("about")}
          className="relative font-semibold text-sm text-third dark:text-light cursor-pointer
    before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 
    before:bg-secondary before:transition-all before:duration-300 hover:before:w-full"
        >
          About me
        </p>

        <p
          className="relative font-semibold text-sm text-third dark:text-light cursor-pointer
    before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 
    before:bg-secondary before:transition-all before:duration-300 hover:before:w-full"
        >
          Skills
        </p>

        <p
          className="relative font-semibold text-sm text-third dark:text-light cursor-pointer
    before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 
    before:bg-secondary before:transition-all before:duration-300 hover:before:w-full"
        >
          Services
        </p>
      </div>
      <div className="hidden md:flex md:flex-row gap-4 items-center">
        {/* Dark Mode Toggle */}
        <div
          onClick={toggleDarkMode}
          className="p-1.5  px-4 rounded-md border-2 border-base dark:border-light"
        >
          {!darkMode ? (
            <FaMoon size={24} color="black" />
          ) : (
            <CiLight size={24} color="white" />
          )}
        </div>

        <div className="p-2 px-6 rounded-md border-2 border-base dark:border-light">
          <p className="font-semibold text-sm text-third dark:text-light">
            Contact me
          </p>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
