import React, { useState, useEffect } from "react";

function Contact() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [timer, setTimer] = useState(100);

  const handleSendMail = () => {
    // Gmail compose URL
    const gmailComposeURL = `https://mail.google.com/mail/?view=cm&fs=1&to=nitpatel678@gmail.com&su=Let's Connect for Future Partnership!&body=Hi Nitin Patel,%0D%0A%0D%0AI came across your contact details and would like to connect with you for future partnerships and collaborations.%0D%0A%0D%0ALooking forward to hearing from you!%0D%0A%0D%0ABest Regards,`;

    // Open Gmail in a new tab
    const newTab = window.open(gmailComposeURL, "_blank");

    if (newTab) {
      const interval = setInterval(() => {
        if (newTab.closed) {
          clearInterval(interval);
          // Show the popup and start the timer
          setIsPopupVisible(true);
          startPopupTimer();
        }
      }, 500);
    } else {
      alert("Unable to open Gmail. Please check your browser settings.");
    }
  };

  const startPopupTimer = () => {
    let timeLeft = 100;
    const progressBar = setInterval(() => {
      timeLeft -= 1;
      setTimer(timeLeft);

      if (timeLeft <= 0) {
        clearInterval(progressBar);
        setIsPopupVisible(false);
      }
    }, 30); // Update every 30ms for smooth transition
  };

  return (
    <section className="py-16 bg-gray-50" id="contact-me">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start justify-between">
        {/* Contact Info */}
        <div className="w-full md:w-1/3 flex flex-col gap-6 mb-8 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold text-violet-600">Contact Me</h2>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <i className="fas fa-envelope text-xl text-violet-600"></i>
              <p className="text-lg text-gray-600 font-syne font-bold">
                nitpatel678@gmail.com
              </p>
            </div>
            <div className="flex items-center gap-3">
              <i className="fab fa-instagram text-xl text-violet-600"></i>
              <p className="text-lg text-gray-600 font-syne font-bold">nitin_rave</p>
            </div>
            <div className="flex items-center gap-3">
              <i className="fab fa-linkedin text-xl text-violet-600"></i>
              <p className="text-lg text-gray-600 font-syne font-bold">nitinpatelftp</p>
            </div>
          </div>
        </div>

        <div className="hidden md:block border-l-2 border-gray-900 h-auto mx-6"></div>

        {/* Instant Connect Section */}
        <div className="w-full md:w-2/3">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-700">
            Want to Connect Instantly?
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Connect with me via email and get a quick response for future partnerships and collaborations.
          </p>

          <button
            onClick={handleSendMail}
            className="bg-violet-600 text-white py-3 px-6 rounded-lg hover:bg-violet-800 transition duration-300 font-syne font-extrabold"
          >
            Send Mail
          </button>
        </div>
      </div>

      {/* Message Sent Popup */}
      {isPopupVisible && (
        <div className="fixed top-28 left-1/2 transform -translate-x-1/2 bg-white p-4 w-3/4 lg:w-1/3 border-violet-600 rounded-xl shadow-lg flex justify-between items-center">
          <div className="text-lg text-green-500 font-bold">Message Sent Successfully</div>
          <div className="text-3xl text-green-500">&#10004;</div>
        </div>
      )}

      {/* Progress Bar for Popup Timer */}
      {isPopupVisible && (
        <div
          className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-violet-600"
          style={{
            width: `${timer}%`,
            height: "5px",
            transition: "width 0.03s linear",
          }}
        />
      )}
    </section>
  );
}

export default Contact;
