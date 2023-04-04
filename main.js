// select all the nav links
const navLinks = document.querySelectorAll('.nav-link');

// add event listener to each nav link
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault(); // prevent default link behavior
    const targetId = link.getAttribute('href'); // get the target section id
    const targetSection = document.querySelector(targetId); // select the target section
    targetSection.scrollIntoView({ behavior: 'smooth' }); // scroll to the target section smoothly
  });
});



