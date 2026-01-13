//logo and svg
import { ReactSVG } from "react-svg";
import LogoBlack from "../../assets/logo/LogoBlack.png";
import LogoWhite from "../../assets/logo/LogoWhite.png";
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
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            delay: 0.5,
          }}
        >
          <img
            src={darkMode ? LogoWhite : LogoBlack}
            alt="Logo"
            className="w-50 h-20"
          />
        </motion.div>

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
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            delay: 0.6,
          }}
          onClick={() => scrollToSection("home")}
          className="relative font-semibold text-sm text-third dark:text-light cursor-pointer
    before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 
    before:bg-secondary before:transition-all before:duration-300 hover:before:w-full"
        >
          Home
        </motion.p>

        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            delay: 0.7,
          }}
          onClick={() => scrollToSection("about")}
          className="relative font-semibold text-sm text-third dark:text-light cursor-pointer
    before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 
    before:bg-secondary before:transition-all before:duration-300 hover:before:w-full"
        >
          About me
        </motion.p>

        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            delay: 0.8,
          }}
          onClick={() => scrollToSection("skill")}
          className="relative font-semibold text-sm text-third dark:text-light cursor-pointer
    before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 
    before:bg-secondary before:transition-all before:duration-300 hover:before:w-full"
        >
          Skills
        </motion.p>

        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            delay: 0.9,
          }}
          onClick={() => scrollToSection("services")}
          className="relative font-semibold text-sm text-third dark:text-light cursor-pointer
    before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 
    before:bg-secondary before:transition-all before:duration-300 hover:before:w-full"
        >
          Services
        </motion.p>
      </div>
      <div className="hidden md:flex md:flex-row gap-4 items-center">
        {/* Dark Mode Toggle */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            delay: 1,
          }}
          onClick={toggleDarkMode}
          className="p-1.5  px-4 rounded-md border-2 border-base dark:border-light"
        >
          {!darkMode ? (
            <FaMoon size={24} color="black" />
          ) : (
            <CiLight size={24} color="white" />
          )}
        </motion.div>

        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            delay: 1.1,
          }}
          onClick={() => scrollToSection("contact")}
          className="p-2 px-6 rounded-md border-2 border-base dark:border-light hover:bg-secondary cursor-pointer"
        >
          <p className="font-semibold text-sm text-third dark:text-light">
            Contact me
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default NavBar;
