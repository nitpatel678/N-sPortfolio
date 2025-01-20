import React from "react";

function Header() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-16 bg-white mt-1 z-20" id="home">
      {/* Left Side: Image */}
      <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
        <img
          src="./src/Images/Portfolio3d.png"
          alt="Nitin Patel"
          className="img-hover-effect rounded-3xl max-w-full"
        />
      </div>

      {/* Right Side: Introduction */}
      <div className="w-full md:w-2/3 text-black md:pl-8">
        {/* Introduction */}
        <h1 className="text-3xl md:text-5xl font-bold leading-tight text-center md:text-left animate-slideInFromLeft">
          <span className="text-black">
            <span className="">I </span>am{" "}
          </span>
          <span className="text-violet-600 typewriter">Nitin Patel</span>
        </h1>

        {/* Paragraph with more content and line by line */}
        <p className="mt-6 text-gray-600 text-lg md:text-xl font-syne leading-relaxed text-justify mx-auto md:ml-auto md:mr-10 max-w-full md:max-w-4xl">
          I am a passionate software developer focused on full-stack development
          and AI technologies. With experience in JavaScript, Python, and Java,
          I craft solutions that solve complex problems and enhance user
          experiences. I’m excited about the transformative power of generative
          AI and continuously improving my skills to stay ahead of emerging
          technologies. Let’s build something amazing together!
        </p>

        {/* Social Media Icons */}
        <div className="mt-6 flex justify-center md:justify-start gap-4 text-3xl">
          <a
            href="https://github.com/nitpatel678"
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-600 hover:text-violet-800 transition-colors"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="http://linkedin.com/in/nitinpatelftp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-600 hover:text-violet-800 transition-colors"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>

        {/* Resume Button */}
        <div className="flex justify-center md:justify-start">
          <a
            href="./src/Images/Resume.pdf"
            class="mt-8 inline-block font-poppins px-5 py-3 bg-violet-600 text-white font-bold rounded-lg hover:bg-violet-700 hover:shadow-lg hover:scale-105 transition-all duration-300"
            download
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Header;