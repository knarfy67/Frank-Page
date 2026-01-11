import { FaMoon } from "react-icons/fa";
import { CiLight } from "react-icons/ci";

function NavMobile({ open, setOpen, darkMode, toggleDarkMode }) {
  if (!open) return null;
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };
  return (
    <div className="mx-2 flex flex-col md:hidden gap-2 dark:bg-base  bg-light shadow-lg rounded-lg p-4">
      <p
        onClick={() => scrollToSection("home")}
        className="relative font-semibold text-sm text-third dark:text-light cursor-pointer
    before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 
    before:bg-secondary before:transition-all before:duration-300 hover:before:w-11"
      >
        Home
      </p>

      <p
        onClick={() => scrollToSection("about")}
        className="relative font-semibold text-sm text-third dark:text-light cursor-pointer
    before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 
    before:bg-secondary before:transition-all before:duration-300 hover:before:w-18"
      >
        About me
      </p>

      <p
        onClick={() => scrollToSection("skill")}
        className="relative font-semibold text-sm text-third dark:text-light cursor-pointer
    before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 
    before:bg-secondary before:transition-all before:duration-300 hover:before:w-10"
      >
        Skills
      </p>

      <p
        className="relative font-semibold text-sm text-third dark:text-light cursor-pointer
    before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 
    before:bg-secondary before:transition-all before:duration-300 hover:before:w-15"
      >
        Services
      </p>

      <div className="flex flex-row gap-2 mt-2">
        <div
          onClick={toggleDarkMode}
          className="p-1.5 px-4 rounded-md border-2 border-base dark:border-light cursor-pointer"
        >
          {!darkMode ? (
            <FaMoon size={20} />
          ) : (
            <CiLight size={22} color="white" />
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

export default NavMobile;
