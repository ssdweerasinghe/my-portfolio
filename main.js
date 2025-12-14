const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-3-line");
});

navLinks.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
        navLinks.classList.remove("open");
        menuIcon.setAttribute("class", "ri-menu-3-line");
    }
});

// Typewriter Effect
const passions = [
    "Full-Stack Developer",
    "Mobile App Developer",
    "DevOps Engineer",
    "Web Designer",
    "Digital Content Creator"
];

let passionIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typewriterElement = document.getElementById("typewriter");
const typingSpeed = 100;
const deletingSpeed = 50;
const pauseTime = 1500;

function typeWriter() {
    const currentPassion = passions[passionIndex];
    
    if (isDeleting) {
        charIndex--;
        typewriterElement.textContent = currentPassion.substring(0, charIndex);
        
        if (charIndex === 0) {
            isDeleting = false;
            passionIndex = (passionIndex + 1) % passions.length;
            setTimeout(typeWriter, 500);
        } else {
            setTimeout(typeWriter, deletingSpeed);
        }
    } else {
        charIndex++;
        typewriterElement.textContent = currentPassion.substring(0, charIndex);
        
        if (charIndex === currentPassion.length) {
            isDeleting = true;
            setTimeout(typeWriter, pauseTime);
        } else {
            setTimeout(typeWriter, typingSpeed);
        }
    }
}

// Start typewriter effect
typeWriter();

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
    ...scrollRevealOption,
    origin: "right",
});

ScrollReveal().reveal(".header__content h2", {
    ...scrollRevealOption,
    delay: 250,
});

ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header__content p", {
    ...scrollRevealOption,
    delay: 750,
});

ScrollReveal().reveal(".header__content h4", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".header__content .socials li", {
    ...scrollRevealOption,
    delay: 1250,
    interval: 500,
});

ScrollReveal().reveal(".header__btns", {
    ...scrollRevealOption,
    delay: 1500,
});

// About Section
ScrollReveal().reveal(".about__card", {
    ...scrollRevealOption,
    interval: 200,
});

// Skills Section
ScrollReveal().reveal(".skill__category", {
    ...scrollRevealOption,
    origin: "left",
    interval: 200,
});

// Portfolio Section
ScrollReveal().reveal(".portfolio__card", {
    ...scrollRevealOption,
    interval: 200,
});

// Contact Section
ScrollReveal().reveal(".contact__info", {
    ...scrollRevealOption,
    origin: "left",
});

ScrollReveal().reveal(".contact__form", {
    ...scrollRevealOption,
    origin: "right",
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});
