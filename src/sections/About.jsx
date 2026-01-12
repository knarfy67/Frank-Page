import Overview from "../components/About/Overview";

function About() {
  return (
    <div id="about" className="sm:mt-36 mt-48">
      <p className="dark:text-light text-2xl md:text-4xl ml-12 mb-6">
        About Me
      </p>
      <Overview />
    </div>
  );
}

export default About;
