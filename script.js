const roles = ["Coder", "Developer", "Designer", "Creator"];
let roleIndex = 0;
let charIndex = 0;
const typingSpeed = 120;
const deletingSpeed = 80;
const pauseTime = 1000;
const typingText = document.getElementById("typing-text");

function type() {
  const currentRole = roles[roleIndex];
  if (charIndex < currentRole.length) {
    typingText.textContent += currentRole.charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, pauseTime);
  }
}

function erase() {
  const currentRole = roles[roleIndex];
  if (charIndex > 0) {
    typingText.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, deletingSpeed);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(type, typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", type);
