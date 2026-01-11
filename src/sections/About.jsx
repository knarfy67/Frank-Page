import Overview from "../components/About/Overview";

function About() {
  return (
    <div id="about" className="h-screen md:mt-30">
      <p className="dark:text-light text-2xl md:text-4xl ml-12 mb-6">
        About Me
      </p>
      <Overview />
    </div>
  );
}

export default About;
