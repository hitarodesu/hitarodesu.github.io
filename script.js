// JavaScript code goes here
// You can add your custom JavaScript functionality

// Add interactivity to class boxes
const classBoxes = document.querySelectorAll('.class-box');

classBoxes.forEach((box) => {
  box.addEventListener('click', () => {
    // Add your desired functionality for when a box is clicked
    console.log('Class box clicked');
  });
});



// Theme switcher functionality
const themeSwitcher = document.getElementById('theme-switcher');
const body = document.body;

themeSwitcher.addEventListener('click', () => {
  body.classList.toggle('dark');
  themeSwitcher.classList.toggle('on');
});
