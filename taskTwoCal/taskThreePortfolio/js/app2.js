document.addEventListener("DOMContentLoaded", function () {
    // Scroll to top button
    const scrollUp = document.querySelector("#scroll-up");
    if (scrollUp) {
        scrollUp.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
            });
        });
    }

    // Hire Me button
    const hireBtn = document.querySelector("#hireBtn");
    const hireSection = document.getElementById("hire-section");

    if (hireBtn && hireSection) {
        hireBtn.addEventListener("click", function () {
            hireSection.scrollIntoView({ behavior: "smooth" });
        });
    }

    // Burger menu
    const burger = document.querySelector("#burger-menu");
    const overlay = document.querySelector("#nav-overlay");
    const closeBtn = document.querySelector("#close-btn");
    const navLink = document.querySelectorAll(".nav-link");

    if (burger && overlay) {
        burger.addEventListener("click", () => {
            overlay.classList.add("active");
            document.documentElement.style.overflow = 'hidden';
        });
    }

    if (closeBtn && overlay) {
        closeBtn.addEventListener("click", () => {
            overlay.classList.remove("active");
            document.documentElement.style.overflow = '';
        });
    }

    navLink.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href");
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
            overlay.classList.remove("active");
            document.documentElement.style.overflow = '';
        });
    });

    if (overlay) {
        overlay.addEventListener("click", (event) => {
            if (event.target === overlay) {
                overlay.classList.remove("active");
                document.documentElement.style.overflow = '';
            }
        });
    }
});



// Contact form
const form = document.querySelector('#contactForm');
const thankYou = document.querySelector('#thankYou');

form.addEventListener('submit', function(e){
  e.preventDefault();
  thankYou.style.display = 'block';
  form.reset();

   // Auto hide after 3 seconds
  setTimeout(() => {
     thankYou.style.display = 'none'; 
    }, 3000);
});

// Hire form
const hireForm = document.querySelector('#hireForm');
const hireThankYou = document.querySelector('#hireThankYou'); 

hireForm.addEventListener('submit', function(e) {
  e.preventDefault();
  hireThankYou.style.display = 'block';
  hireForm.reset();

   // Auto hide after 3 seconds
  setTimeout(() => {
     hireThankYou.style.display = 'none'; 
    }, 3000);
});

