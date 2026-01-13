//hooks
import Lottie from "lottie-react";
import { motion } from "framer-motion";

//logo and icons
import ContactAnimation from "../../assets/animations/ContactAnimation.json";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

function ContactContent() {
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
      className="mt-10"
    >
      <div className="flex flex-1 md:flex-row flex-col">
        <div className="w-full md:w-1/2 flex justify-center">
          <Lottie
            animationData={ContactAnimation}
            loop
            className="w-72 md:w-96"
          />
        </div>
        <div className="flex flex-1 flex-col mx-20">
          <p className="text-2xl font-medium text-primary mb-2 dark:text-light">
            Ping Me!
          </p>
          <p className="text-lg dark:text-light mb-2">
            Let’s stay connected! Follow me on my socials for updates and reach
            out anytime via email for collaborations or inquiries.
          </p>
          <div className="space-y-2">
            <div className="flex flex-row items-center gap-1 bg-base p-2 rounded-md">
              <div>
                <MdEmail size={50} color="#D52929" />
              </div>
              <div>
                <p className="text-xs text-light">email</p>
                <p className="text-light">knarfarbz@gmail.com</p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-1 bg-base p-2 rounded-md">
              <div>
                <FaLocationDot size={50} color="#D52929" />
              </div>
              <div>
                <p className="text-xs text-light">Location</p>
                <p className="text-light">Opol, Misamis Oriental</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-4">
            <p className="dark:text-light">
              Connect With Socials{" "}
              <div className="flex flex-row gap-6 pb-2">
                <a
                  href="https://github.com/knarfy67"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={30} color="#D52929" />
                </a>
                <a
                  href="https://www.facebook.com/frank.y.arbiso/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook size={30} color="#D52929" />
                </a>
                <a
                  href="https://www.instagram.com/knarfy67/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={30} color="#D52929" />
                </a>
                <a
                  href="https://www.linkedin.com/in/frank-arbiso-817609160/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={30} color="#D52929" />
                </a>
              </div>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ContactContent;
