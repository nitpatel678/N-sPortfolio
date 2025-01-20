import React from "react";

function Projects() {
  return (
    <section class="py-16 bg-gray-50" id="projects">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-violet-600">PROJECTS</h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div class="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full">
          <img
            src="./src/Images/ProjectMate_Orange.png"
            alt="Project Image"
            class="w-full h-64 object-cover"
          />

          <div class="p-6 flex flex-col justify-between flex-grow">
            <h3 class="text-3xl font-poppins font-semibold text-gray-900 mb-4">
              Project <span class="text-violet-600">Mate</span>
            </h3>

            <p class="text-lg text-gray-600 text-justify mb-4">
              Project Mate is a platform where users can discover, join, and
              collaborate on various projects, connecting people with
              opportunities to work together and achieve common goals.
            </p>

            <div class="flex justify-start gap-4 mt-6">
              <a
                href="link-to-live-project"
                target="_blank"
                class="text-violet-600 hover:text-violet-800 text-3xl transition duration-300"
                title="Live Preview"
              >
                <i class="fas fa-eye"></i>
              </a>

              <a
                href="link-to-github"
                target="_blank"
                class="text-gray-800 hover:text-gray-600 text-3xl transition duration-300"
                title="GitHub"
              >
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full">
          <img
            src="./src/Images/Gemini.jpg"
            alt="Project Image"
            class="w-full h-64 object-cover"
          />

          <div class="p-6 flex flex-col justify-between flex-grow">
            <h3 class="text-3xl font-poppins font-semibold text-gray-900 mb-4">
              Gemini <span class="text-violet-600">Clone</span>
            </h3>

            <p class="text-lg text-gray-600 text-justify mb-4">
            The Gemini Clone replicates the key features of the Gemini app,user-friendly platform with real-time updates,and seamless user interaction. Designed to provide a similar experience.
            </p>

            <div class="flex justify-start gap-4 mt-6">
              <a
                href="link-to-live-project"
                target="_blank"
                class="text-violet-600 hover:text-violet-800 text-3xl transition duration-300"
                title="Live Preview"
              >
                <i class="fas fa-eye"></i>
              </a>

              <a
                href="link-to-github"
                target="_blank"
                class="text-gray-800 hover:text-gray-600 text-3xl transition duration-300"
                title="GitHub"
              >
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full">
          <img
            src="./src/Images/Email.jpg"
            alt="Project Image"
            class="w-full h-64 object-cover"
          />

          <div class="p-6 flex flex-col justify-between flex-grow">
            <h3 class="text-3xl font-poppins font-semibold text-gray-900 mb-4">
              Invi <span class="text-violet-600">Mail</span>
            </h3>

            <p class="text-lg text-gray-600 text-justify mb-4">
              InviMail validates email addresses to ensure uniqueness and proper
              formatting by checking against previously stored emails, enhancing
              user experience through instant feedback.
            </p>

            <div class="flex justify-start gap-4 mt-6">
              <a
                href="link-to-live-project"
                target="_blank"
                class="text-violet-600 hover:text-violet-800 text-3xl transition duration-300"
                title="Live Preview"
              >
                <i class="fas fa-eye"></i>
              </a>

              <a
                href="link-to-github"
                target="_blank"
                class="text-gray-800 hover:text-gray-600 text-3xl transition duration-300"
                title="GitHub"
              >
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;