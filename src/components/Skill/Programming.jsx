//logo and svg
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiPhpLine } from "react-icons/ri";
import { FaReact } from "react-icons/fa6";
import { IoLogoLaravel } from "react-icons/io5";
import { FaWordpress } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandAdobePhotoshop } from "react-icons/tb";
import { TbBrandAdobeAfterEffect } from "react-icons/tb";
import { TbBrandAdobeIllustrator } from "react-icons/tb";
import { FaFigma } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiPostman } from "react-icons/si";
import { SiHostinger } from "react-icons/si";

//hooks
import IconItem from "./IconItem";
import { motion } from "framer-motion";

function Programming() {
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
      className="flex flex-col mt-10 p-8 gap-4"
    >
      <div className="flex flex-col bg-white/20 dark:bg-black/20 backdrop-blur-md rounded-md px-10 w-full">
        <div className="flex flex-row mb-6 mt-6">
          <p className="font-medium text-xl dark:text-light">Programming</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6 mt-6 mb-14 place-items-center">
          <IconItem icon={<FaHtml5 />} label="HTML 5" />
          <IconItem icon={<FaCss3Alt />} label="CSS 3" />
          <IconItem icon={<IoLogoJavascript />} label="Javascript" />
          <IconItem icon={<RiPhpLine />} label="Php" />
          <IconItem icon={<FaReact />} label="React" />
          <IconItem icon={<IoLogoLaravel />} label="Laravel" />
          <IconItem icon={<FaWordpress />} label="Wordpress" />
          <IconItem icon={<RiTailwindCssFill />} label="Tailwindcss" />
        </div>
      </div>
      <div className="flex lg:flex-row flex-col justify-between gap-4 ">
        <div className="flex flex-col bg-white/20 dark:bg-black/20 backdrop-blur-md rounded-md px-10 w-full">
          <div className="flex flex-row mb-6 mt-6">
            <p className="font-medium text-xl dark:text-light">
              Art and Design
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 mb-14 place-items-center">
            <IconItem icon={<TbBrandAdobePhotoshop />} label="Photoshop" />
            <IconItem icon={<TbBrandAdobeAfterEffect />} label="AE" />
            <IconItem icon={<TbBrandAdobeIllustrator />} label="Illustrator" />
            <IconItem icon={<FaFigma />} label="Figma" />
          </div>
        </div>
        <div className="flex flex-col bg-white/20 dark:bg-black/20 backdrop-blur-md rounded-md px-10 w-full">
          <div className="flex flex-row mb-6 mt-6">
            <p className="font-medium text-xl dark:text-light">
              Tools and Others
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 mb-14 place-items-center">
            <IconItem icon={<FaGithub />} label="Github" />
            <IconItem icon={<TbBrandFramerMotion />} label="Motion Framer" />
            <IconItem icon={<SiPostman />} label="Postman" />
            <IconItem icon={<SiHostinger />} label="Hostinger" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Programming;
