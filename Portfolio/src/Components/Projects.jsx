import React, { useState, useEffect } from "react";

function Projects() {
  // Define the state for managing project visibility and loading status
  const [isExpanded, setIsExpanded] = useState(false);
  const [projectsVisible, setProjectsVisible] = useState(3);
  const [popupVisible, setPopupVisible] = useState(false);

  // Mock Projects Data (Add more projects for testing)
  const projects = [
    {
      title: "Project Mate",
      description: "Project Mate is a platform where users can discover, join, and collaborate on various projects.",
      imgSrc: "./src/Images/ProjectMate_Orange.png",
      liveLink: "link-to-live-project",
      githubLink: "https://github.com/nitpatel678/SideProject-ProjectMate",
    },
    {
      title: "Gemini Clone",
      description: "The Gemini Clone replicates key features of the Gemini app, offering real-time updates and seamless interaction.",
      imgSrc: "./src/Images/Gemini.jpg",
      liveLink: "link-to-live-project",
      githubLink: "https://github.com/nitpatel678/Gemini_ReactClone",
    },
    {
      title: "Invi Mail",
      description: "InviMail validates email addresses, ensuring proper formatting and uniqueness.",
      imgSrc: "./src/Images/Email.jpg",
      liveLink: "link-to-live-project",
      githubLink: "link-to-github",
    },
    // Add more projects if required
  ];

  // Handle project visibility expansion
  const toggleExpansion = () => {
    if (projects.length <= 3) {
      setPopupVisible(true);
      setTimeout(() => setPopupVisible(false), 4000); // Hide popup after 4 seconds
    } else {
      setIsExpanded(!isExpanded);
      setProjectsVisible(isExpanded ? 3 : projects.length);
    }
  };

  return (
    <section className="py-16 bg-gray-50" id="projects">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-violet-600">PROJECTS</h2>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 px-6 md:px-12 max-w-7xl mx-auto">
        {projects.slice(0, projectsVisible).map((project, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full">
            <img src={project.imgSrc} alt="Project Image" className="w-full h-64 object-cover" />

            <div className="p-6 flex flex-col justify-between flex-grow">
              <h3 className="text-3xl font-poppins font-semibold text-gray-900 mb-4">
                {project.title}
              </h3>

              <p className="text-lg text-gray-600 text-justify mb-4">
                {project.description}
              </p>

              <div className="flex justify-start gap-4 mt-6">
                <a
                  href={project.liveLink}
                  target="_blank"
                  className="text-violet-600 hover:text-violet-800 text-3xl transition duration-300"
                  title="Live Preview"
                >
                  <i className="fas fa-eye"></i>
                </a>

                <a
                  href={project.githubLink}
                  target="_blank"
                  className="text-gray-800 hover:text-gray-600 text-3xl transition duration-300"
                  title="GitHub"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Popup for 'No New Projects' when only 3 projects */}
      {popupVisible && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-xl font-semibold text-gray-700">There are no new projects!</p>
            <p className="text-sm text-gray-600">Please check back later.</p>
          </div>
        </div>
      )}

      {/* Expand/Collapse Section */}
      <div className="text-center mt-8 flex justify-center items-center">
        <button
          onClick={toggleExpansion}
          className="text-violet-600 hover:text-violet-800 text-xl font-semibold flex items-center justify-center gap-2"
        >
          {isExpanded ? (
            <>
              <span>Show Less</span>
              <i className="fas fa-arrow-up"></i>
            </>
          ) : (
            <>
              <span>See All Projects</span>
              <i className="fas fa-arrow-down"></i>
            </>
          )}
        </button>
      </div>
    </section>
  );
}

export default Projects;
