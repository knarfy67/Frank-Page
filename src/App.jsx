//icons and logo
import Keyboard from "./assets/img/Keyboard.jpg";

//hooks
import { ReactSVG } from "react-svg";

//sections
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Services from "./sections/Services";
import Contact from "./sections/Contact";
import Footer from "./components/Home/Footer";

function App() {
  return (
    <div className="bg-light dark:bg-base relative overflow-hidden min-h-screen">
      <div
        /* 3. Added w-200 h-200 for mobile so it has a size, otherwise it might behave oddly */
        className="absolute -top-40 -left-20 w-200 h-200 md:-top-150 md:-left-50 md:w-340 md:h-300 rounded-full z-0 opacity-60 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, #E62727, rgba(230, 39, 39, 0))",
        }}
      />

      <div
        /* 3. Added w-200 h-200 for mobile so it has a size, otherwise it might behave oddly */
        className="absolute  -bottom-300 -right-40 w-420 h-400 rounded-full z-0 opacity-60 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, #E62727, rgba(230, 39, 39, 0))",
        }}
      />

      <div
        /* 3. Added w-200 h-200 for mobile so it has a size, otherwise it might behave oddly */
        className="absolute hidden md:block top-350 md:-right-50 md:w-100 md:h-100 rounded-full z-0 opacity-60 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, #E62727, rgba(230, 39, 39, 0))",
        }}
      />
      <div
        className="absolute hidden md:block top-110 -right-50
    w-100 h-100 rounded-full opacity-40 pointer-events-none
    bg-[radial-gradient(circle,_#ef4444_1.2px,_transparent_1.2px)]
    bg-[length:10px_10px]
  "
      />

      <div
        className="absolute hidden md:block top-300 -left-50
    w-100 h-100 rounded-full opacity-40 pointer-events-none
    bg-[radial-gradient(circle,_#ef4444_1.2px,_transparent_1.2px)]
    bg-[length:10px_10px]
  "
      />

      <div className="absolute top-200 z-0 flex items-center justify-center opacity-20 pointer-events-none">
        <img
          src={Keyboard}
          alt="Background"
          className="
      w-full max-w-full mt-150 md:mt-0 h-auto object-contain drop-shadow-2xl
      [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]
      [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]
    "
        />
      </div>

      <div className="container mx-auto relative z-10">
        <Home />
        <About />
        <Skills />
        <Services />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
