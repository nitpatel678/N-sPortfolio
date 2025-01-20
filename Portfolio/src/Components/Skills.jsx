import React from "react";

function Skills() {
  return (
    <section className="py-16 bg-white" id="skills">
    <h2 className="text-center text-4xl font-bold text-violet-600 mb-12">
      Skills
    </h2>
  
    <div className="flex flex-wrap justify-center gap-20 px-6 md:px-12">
      
      <div className="group relative flex items-center justify-between px-6 py-4 bg-gray-100 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-[300px]">
        <div className="flex items-center gap-6"> 
        <i className="fab fa-java text-5xl text-violet-800 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-violet-600/50 hover:blur-sm"></i>
        <span className="text-xl font-syne font-bold text-gray-800">Java</span>
        </div>
        <div className="relative w-16 h-16">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" className="stroke-gray-300 fill-transparent stroke-[10]"></circle>
            <circle cx="50" cy="50" r="45" className="stroke-violet-600 fill-transparent stroke-[10]" strokeDasharray="320" strokeDashoffset="84"></circle>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm font-semibold text-black">70%</span>
          </div>
        </div>
      </div>
  
      <div className="group relative flex items-center justify-between px-6 py-4 bg-gray-100 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-[300px]">
        <div className="flex items-center gap-6"> 
          <i className="fab fa-python text-5xl text-violet-800 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-violet-600/50 hover:blur-sm"></i>
          <span className="text-xl font-syne font-bold text-gray-800">Python</span>
        </div>
        <div className="relative w-16 h-16">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" className="stroke-gray-300 fill-transparent stroke-[10]"></circle>
            <circle cx="50" cy="50" r="45" className="stroke-violet-600 fill-transparent stroke-[10]" strokeDasharray="400" strokeDashoffset="180"></circle>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm font-semibold text-black">73%</span>
          </div>
        </div>
      </div>
  
      <div className="group relative flex items-center justify-between px-6 py-4 bg-gray-100 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-[300px]">
        <div className="flex items-center gap-6">
          <i className="fab fa-react text-5xl text-violet-800 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-violet-600/50 hover:blur-sm"></i>
          <span className="text-xl font-syne font-bold text-gray-800">React</span>
        </div>
        <div className="relative w-16 h-16">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" className="stroke-gray-300 fill-transparent stroke-[10]"></circle>
            <circle cx="50" cy="50" r="45" className="stroke-violet-600 fill-transparent stroke-[10]" strokeDasharray="440" strokeDashoffset="180"></circle>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm font-semibold text-black">75%</span>
          </div>
        </div>
      </div>
  
      <div className="group relative flex items-center justify-between px-6 py-4 bg-gray-100 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-[300px]">
        <div className="flex items-center gap-6">
          <i className="fas fa-cloud text-5xl text-violet-800 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-violet-600/50 hover:blur-sm"></i>
          <span className="text-xl font-syne font-bold text-gray-800">Cloud</span>
        </div>
        <div className="relative w-16 h-16">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" className="stroke-gray-300 fill-transparent stroke-[10]"></circle>
            <circle cx="50" cy="50" r="45" className="stroke-violet-600 fill-transparent stroke-[10]" strokeDasharray="282" strokeDashoffset="180"></circle>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm font-semibold text-black">20%</span>
          </div>
        </div>
      </div>
  
     
      <div className="group relative flex items-center justify-between px-6 py-4 bg-gray-100 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-[300px]">
        <div className="flex items-center gap-6">
          <i className="fab fa-database text-5xl text-violet-800 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-violet-600/50 hover:blur-sm"></i>
          <span className="text-xl font-syne font-bold text-gray-800">MySQL</span>
        </div>
        <div className="relative w-16 h-16">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" className="stroke-gray-300 fill-transparent stroke-[10]"></circle>
            <circle cx="50" cy="50" r="45" className="stroke-violet-600 fill-transparent stroke-[10]" strokeDasharray="330" strokeDashoffset="180"></circle>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm font-semibold text-black">50%</span>
          </div>
        </div>
      </div>
      <div className="group relative flex items-center justify-between px-6 py-4 bg-gray-100 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-[300px]">
        <div className="flex items-center gap-6">
          <i className="fab fa-node text-5xl text-violet-800 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-violet-600/50 hover:blur-sm"></i>
          <span className="text-xl font-syne font-bold text-gray-800">Node.Js</span>
        </div>
        <div className="relative w-16 h-16">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" className="stroke-gray-300 fill-transparent stroke-[10]"></circle>
            <circle cx="50" cy="50" r="45" className="stroke-violet-600 fill-transparent stroke-[10]" strokeDasharray="330" strokeDashoffset="180"></circle>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm font-semibold text-black">50%</span>
          </div>
        </div>
      </div>
      <div className="group relative flex items-center justify-between px-6 py-4 bg-gray-100 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-[300px]">
        <div className="flex items-center gap-6">
          <i className="fab fa-js-square text-5xl text-violet-800 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-violet-600/50 hover:blur-sm"></i>
          <span className="text-xl font-syne font-bold text-gray-800">Javascript</span>
        </div>
        <div className="relative w-16 h-16">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" className="stroke-gray-300 fill-transparent stroke-[10]"></circle>
            <circle cx="50" cy="50" r="45" className="stroke-violet-600 fill-transparent stroke-[10]" strokeDasharray="400" strokeDashoffset="180"></circle>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm font-semibold text-black">80%</span>
          </div>
        </div>
      </div>
      <div className="group relative flex items-center justify-between px-6 py-4 bg-gray-100 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-[300px]">
        <div className="flex items-center gap-6">
          <i className="fab fa-figma text-5xl text-violet-800 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-violet-600/50 hover:blur-sm"></i>
          <span className="text-xl font-syne font-bold text-gray-800">Figma</span>
        </div>
        <div className="relative w-16 h-16">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" className="stroke-gray-300 fill-transparent stroke-[10]"></circle>
            <circle cx="50" cy="50" r="45" className="stroke-violet-600 fill-transparent stroke-[10]" strokeDasharray="440" strokeDashoffset="180"></circle>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm font-semibold text-black">85%</span>
          </div>
        </div>
      </div>
      <div className="group relative flex items-center justify-between px-6 py-4 bg-gray-100 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-[300px]">
        <div className="flex items-center gap-6">
          <i className="fas fa-robot text-5xl text-violet-800 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-violet-600/50 hover:blur-sm"></i>
          <span className="text-xl font-syne font-bold text-gray-800">A I</span>
        </div>
        <div className="relative w-16 h-16">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" className="stroke-gray-300 fill-transparent stroke-[10]"></circle>
            <circle cx="50" cy="50" r="45" className="stroke-violet-600 fill-transparent stroke-[10]" strokeDasharray="320" strokeDashoffset="180"></circle>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm font-semibold text-black">50%</span>
          </div>
        </div>
      </div>
  
    </div>
  </section>
  

  );
}

export default Skills;