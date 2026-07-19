// ===============================
// Portfolio JavaScript
// ===============================

// Page Loaded
window.addEventListener("load", () => {
    console.log("Portfolio Loaded Successfully!");
});

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Hire Me Button
const hireBtn = document.getElementById("hireBtn");

if (hireBtn) {
    hireBtn.addEventListener("click", () => {
        alert("Thank you for visiting my Portfolio!");
    });
}

// Download CV Button
const downloadBtn = document.getElementById("downloadBtn");

if (downloadBtn) {
    downloadBtn.addEventListener("click", () => {
        window.open("resume.pdf", "_blank");
    });
}

// Contact Button
const contactBtn = document.getElementById("contactBtn");

if (contactBtn) {
    contactBtn.addEventListener("click", () => {
        const contactSection = document.getElementById("contact");

        if (contactSection) {
            contactSection.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
}

// Scroll Animation
const sections = document.querySelectorAll("section");

function revealSections() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < window.innerHeight - 100) {
            section.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealSections);
revealSections();