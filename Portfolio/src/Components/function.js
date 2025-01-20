// Get all the nav link elements
const navLinks = document.querySelectorAll('a[href^="#"]');

// Loop through each link and add the click event listener
navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    // Prevent default behavior (jumping to the section instantly)
    e.preventDefault();
    
    // Get the target section id by the href (this points to the section id)
    const targetId = this.getAttribute('href');
    
    // Find the target element
    const targetElement = document.querySelector(targetId);

    // Scroll to the target element with smooth behavior
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
});
