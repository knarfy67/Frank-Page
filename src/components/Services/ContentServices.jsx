//hooks
import ContentItem from "./ContentItem";
import { motion } from "framer-motion";

//icons
import { MdOutlineWeb } from "react-icons/md";
import { FaMobile } from "react-icons/fa";
import { BsCollectionPlayFill } from "react-icons/bs";
import { MdWebAsset } from "react-icons/md";
import { RiProfileFill } from "react-icons/ri";

function ContentServices() {
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
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex flex-col bg-white/20 dark:bg-black/20 backdrop-blur-md rounded-md px-10 w-full pb-2">
          <ContentItem
            icon={<MdOutlineWeb size={30} />}
            tittle={"Web Development"}
            Description={
              "Build Web app with latest framework with React-Vite as front end development and backend laravel also in Web Animation with GSAP and Motion Framer and in  API Testing for Postman"
            }
          />
        </div>
        <div className="flex flex-col bg-white/20 dark:bg-black/20 backdrop-blur-md rounded-md px-10 w-full">
          <ContentItem
            icon={<FaMobile size={30} />}
            tittle={"Mobile Development"}
            Description={
              "Build Mobile app with latest framework with React Native Cli and React Native Expo as front end development and backend laravel also in Animation with Reanimated  and in  API Testing for Postman."
            }
          />
        </div>
      </div>
      <div className="flex lg:flex-row flex-col justify-between gap-4 ">
        <div className="flex flex-col bg-white/20 dark:bg-black/20 backdrop-blur-md rounded-md px-10 pb-2 w-full">
          <ContentItem
            icon={<BsCollectionPlayFill size={30} />}
            tittle={"Video Editing"}
            Description={
              "Video editing with After Effects and Sony Vegas lets you cut, enhance, and polish footage while also creating simple videos for dynamic text, logos, and animations."
            }
          />
        </div>
        <div className="flex flex-col bg-white/20 dark:bg-black/20 backdrop-blur-md rounded-md px-10 w-full">
          <ContentItem
            icon={<MdWebAsset size={30} />}
            tittle={"UI/UX Design"}
            Description={
              "Designing  with Figma UI/UX either Mobile or Webpage following the fundamentals of UI/UX Design  Wireframing, High Fedility and Low Fidelity."
            }
          />
        </div>
        <div className="flex flex-col bg-white/20 dark:bg-black/20 backdrop-blur-md rounded-md px-10 w-full">
          <ContentItem
            icon={<RiProfileFill size={30} />}
            tittle={"Graphic Design"}
            Description={
              "Designing  with Photoshop and Illustrator create Graphic Ads, Posters, Logo Design and Email Designs."
            }
          />
        </div>
      </div>
    </motion.div>
  );
}

export default ContentServices;
