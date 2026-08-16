// // Portfolio JavaScript

// // ===============================
// // Typing Animation
// // ===============================

// const typingText = document.querySelector(".hero h3");

// const roles = [
//     "Frontend Developer",
//     "Web Developer",
//     "MCA Graduate"
// ];

// let roleIndex = 0;
// let charIndex = 0;
// let deleting = false;

// function typeEffect() {
//     if (!typingText) return;

//     const currentRole = roles[roleIndex];

//     if (!deleting) {
//         typingText.textContent = currentRole.substring(0, charIndex + 1);
//         charIndex++;

//         if (charIndex === currentRole.length) {
//             deleting = true;
//             setTimeout(typeEffect, 1500);
//             return;
//         }
//     } else {
//         typingText.textContent = currentRole.substring(0, charIndex - 1);
//         charIndex--;

//         if (charIndex === 0) {
//             deleting = false;
//             roleIndex = (roleIndex + 1) % roles.length;
//         }
//     }

//     setTimeout(typeEffect, deleting ? 60 : 100);
// }

// typeEffect();


// // ===============================
// // Active Navigation Link
// // ===============================

// const sections = document.querySelectorAll("section");
// const navLinks = document.querySelectorAll("nav a");

// window.addEventListener("scroll", () => {

//     let currentSection = "";

//     sections.forEach((section) => {

//         const sectionTop = section.offsetTop - 120;

//         if (window.scrollY >= sectionTop) {
//             currentSection = section.getAttribute("id");
//         }

//     });

//     navLinks.forEach((link) => {

//         link.style.color = "";

//         if (link.getAttribute("href") === `#${currentSection}`) {
//             link.style.color = "#38bdf8";
//         }

//     });

// });


// // ===============================
// // Project Button Interaction
// // ===============================

// const projectButton = document.querySelector(".btn");

// if (projectButton) {

//     projectButton.addEventListener("click", () => {

//         const projectsSection = document.querySelector("#projects");

//         if (projectsSection) {
//             projectsSection.scrollIntoView({
//                 behavior: "smooth"
//             });
//         }

//     });

// }


// // ===============================
// // Welcome Message
// // ===============================

// console.log("Welcome to Dande Mahesh's Portfolio!");


// // ===============================
// // Scroll Reveal Animation
// // ===============================

// const revealElements = document.querySelectorAll(
//     ".project, .skill, .education-item, .about"
// );

// const revealObserver = new IntersectionObserver(
//     (entries) => {

//         entries.forEach((entry) => {

//             if (entry.isIntersecting) {

//                 entry.target.style.opacity = "1";
//                 entry.target.style.transform = "translateY(0)";

//             }

//         });

//     },
//     {
//         threshold: 0.15
//     }
// );

// revealElements.forEach((element) => {

//     element.style.opacity = "0";
//     element.style.transform = "translateY(30px)";
//     element.style.transition = "opacity 0.6s ease, transform 0.6s ease";

//     revealObserver.observe(element);

// });
alert("JavaScript is working!");
