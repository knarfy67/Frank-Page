//hooks
import useAppState from "../../store/useAppState";

//logo and icons
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import LogoBlack from "../../assets/logo/LogoBlack.png";
import LogoWhite from "../../assets/logo/LogoWhite.png";

function FooterContent() {
  const { scrollToSection, darkMode } = useAppState();
  return (
    <div className="flex flex-col mx-10 space-y-10 md:flex-row justify-between items-start ">
      <div className="flex flex-col ">
        <img
          src={darkMode ? LogoWhite : LogoBlack}
          alt="Logo"
          className="w-50 h-20"
        />
        <p className="dark:text-light text-sm mb-2">
          FullStack Developer and UI/UX Designer
        </p>
        <div className="space-y-2">
          <div className="flex flex-row items-center gap-1">
            <div>
              <MdEmail size={40} color="#D52929" />
            </div>
            <div>
              <p className="text-[10px] dark:text-light">email</p>
              <p className="dark:text-light text-sm">knarfarbz@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-1">
            <div>
              <FaLocationDot size={40} color="#D52929" />
            </div>
            <div>
              <p className="text-[10px] dark:text-light">Location</p>
              <p className="dark:text-light text-sm">Opol, Misamis Oriental</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="dark:text-light font-medium">Quick Links</p>
        <ul className="list-disc list-inside">
          <li
            onClick={() => scrollToSection("home")}
            className="dark:text-light cursor-pointer"
          >
            Home
          </li>
          <li
            onClick={() => scrollToSection("about")}
            className="dark:text-light  cursor-pointer"
          >
            About Me
          </li>
          <li
            onClick={() => scrollToSection("skill")}
            className="dark:text-light cursor-pointer"
          >
            Skill
          </li>
          <li
            onClick={() => scrollToSection("services")}
            className="dark:text-light cursor-pointer"
          >
            Services
          </li>
          <li
            onClick={() => scrollToSection("contact")}
            className="dark:text-light cursor-pointer"
          >
            Contact me
          </li>
        </ul>
      </div>
      <div className="flex flex-col mt-4">
        <p className="dark:text-light">
          Connect With Socials{" "}
          <div className="flex flex-row gap-4">
            <a
              href="https://github.com/knarfy67"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={20} color="#D52929" />
            </a>
            <a
              href="https://www.facebook.com/frank.y.arbiso/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={20} color="#D52929" />
            </a>
            <a
              href="https://www.instagram.com/knarfy67/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={20} color="#D52929" />
            </a>
            <a
              href="https://www.linkedin.com/in/frank-arbiso-817609160/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={20} color="#D52929" />
            </a>
          </div>
        </p>
      </div>
    </div>
  );
}

export default FooterContent;
