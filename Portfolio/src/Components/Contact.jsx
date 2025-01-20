import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [showFieldError, setShowFieldError] = useState(false); // State for field error
  const [timer, setTimer] = useState(100);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  useEffect(() => {
    let interval;
    if (isPopupVisible && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 30);
    } else if (timer === 0) {
      setPopupVisible(false);
    }
    return () => clearInterval(interval);
  }, [isPopupVisible, timer]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setShowFieldError(true); // Show error popup
      return;
    }

    emailjs
      .send(
        "service_tjbl7lq",
        "template_9id7f5w",
        { name, email, message },
        "xF0rHOI_cbCJpRBKB"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setPopupVisible(true);
          setTimer(100);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("FAILED...", error);
        }
      );
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

        {/* Contact Form */}
        <div className="w-full md:w-2/3">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg text-gray-700 font-syne font-bold">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-lg text-gray-700 font-syne font-bold">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-lg font-syne font-bold text-gray-700"
              >
                Your Message
              </label>
              <textarea
                id="message"
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
                rows="4"
                placeholder="Write your message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="relative">
              <button
                type="submit"
                className="bg-violet-600 text-white py-3 px-6 rounded-lg hover:bg-violet-800 transition duration-300 font-syne font-extrabold"
              >
                Send Message
              </button>

              {/* Error Popup */}
              {showFieldError && (
                <div className="absolute right-0 top-0 bg-white border border-violet-600 rounded-lg p-3 shadow-lg flex items-center gap-3">
                  <span className="text-violet-600 text-sm font-bold">
                    Please fill all the fields
                  </span>
                  <button
                    onClick={() => setShowFieldError(false)}
                    className="text-red-500 text-xl"
                  >
                    &times;
                  </button>
                </div>
              )}
            </div>
          </form>
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
            height: '5px',
            transition: 'width 0.03s linear',
          }}
        />
      )}
    </section>
  );
}

export default Contact;
