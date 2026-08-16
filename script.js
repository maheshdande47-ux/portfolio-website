// Portfolio JavaScript

// Welcome message in browser console
console.log("Welcome to Dande Mahesh's Portfolio!");

// Highlight active navigation link while scrolling
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.style.color = "";

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.style.color = "#60a5fa";
        }
    });
});

// Project button interaction
const projectButton = document.querySelector(".btn");

if (projectButton) {
    projectButton.addEventListener("click", () => {
        console.log("Projects section opened.");
    });
}
