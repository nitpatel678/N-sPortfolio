import React from "react";

function About() {
  return (
    <section class="py-16 bg-gray-50" id="about-me">
    <div class="container mx-auto px-4 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between">
      <div class="w-full md:w-1/2 text-left md:pr-8 mt-8 md:mt-0">
        <h2 class="text-3xl md:text-4xl font-bold text-violet-600 mb-4">About Me</h2>
        <p class="text-base md:text-lg text-gray-600 mb-6 text-justify">
          I am a passionate software developer specializing in full-stack
          development and AI technologies. With a solid foundation in computer
          science, I’m dedicated to building innovative solutions that solve
          real-world problems. My focus is on using Generative AI to create
          applications that enhance user experiences and improve efficiency. I
          have worked on various projects, gaining hands-on experience in web
          development, machine learning, and cloud computing. My goal is to
          collaborate on cutting-edge technologies that make a lasting impact
          while continuing to grow as a developer. I thrive in
          problem-solving, prioritizing clean, efficient code and seamless
          interfaces. Outside of work, I stay committed to continuous learning
          and enjoy exploring creative activities to maintain a well-rounded
          approach to personal growth.
        </p>
        <div class="flex items-start gap-4 mb-6">
          <i class="fas fa-graduation-cap text-3xl mt-8 text-violet-600"></i>
          <div>
            <h4 class="font-semibold text-gray-800">
              School: Saraswati Vidya Mandir
            </h4>
            <p class="text-sm text-gray-500">Graduation Year: 2022</p>
            <h4 class="font-semibold text-gray-800 mt-2">
              College: ABESIT Ghaziabad
            </h4>
            <p class="text-sm text-gray-500">Graduation Year: 2027</p>
          </div>
        </div>
        <div class="flex justify-start space-x-4 text-violet-600 mt-6">
          <a href="https://instagram.com/nitin_rave" target="_blank">
            <i class="fab fa-instagram text-2xl md:text-3xl hover:text-violet-800 transition"></i>
          </a>
          <a href="https://reddit.com/u/nitpatel" target="_blank">
            <i class="fab fa-reddit text-2xl md:text-3xl hover:text-violet-800 transition"></i>
          </a>
          <a href="https://twitter.com" target="_blank">
            <i class="fab fa-twitter text-2xl md:text-3xl hover:text-violet-800 transition"></i>
          </a>
        </div>
      </div>
  
      <div class="w-full md:w-1/2 text-center md:text-right">
        <img
          src="./src/Images/Protrait.png"
          alt="Profile Image"
          class="rounded-lg shadow-lg w-full md:w-3/4 h-auto object-cover mx-auto md:ml-auto"
        />
      </div>
    </div>
  </section>
  
  

  );
}

export default About;