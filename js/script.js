document.addEventListener("DOMContentLoaded", () => {
  const gradientCircle = document.getElementById("gradientCircle");

  if (!gradientCircle) {
    console.error("Element gradientCircle tidak ditemukan!");
    return;
  }

  document.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    gradientCircle.style.transform = `translate(${mouseX - 200}px, ${
      mouseY - 200
    }px)`;
  });

  // Set posisi awal di tengah layar
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  gradientCircle.style.transform = `translate(${centerX - 200}px, ${
    centerY - 200
  }px)`;
});

// Mobile Menu Toggle
const menuButton = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");

menuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });

      // Close mobile menu if open
      if (!mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.add("hidden");
      }
    }
  });
});

// Active section highlighting
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("text-red-500");
    link.classList.add("text-gray-600");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.remove("text-gray-600");
      link.classList.add("text-red-500");
    }
  });
});

// Skill Bar Animation
document.addEventListener("DOMContentLoaded", function () {
  function isPartiallyInViewport(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;

    return rect.top < windowHeight && rect.top + 100 > 0;
  }

  const skillBars = document.querySelectorAll(".bg-red-500");
  const skillsSection = document.querySelector("#skills");

  const targetWidths = [];

  skillBars.forEach((bar) => {
    targetWidths.push(bar.style.width);
    bar.style.width = "0%";
    bar.style.transition = "width 1.2s ease-out";
  });

  let animated = false;

  function animateSkillBars() {
    if (isPartiallyInViewport(skillsSection) && !animated) {
      skillBars.forEach((bar, index) => {
        setTimeout(() => {
          bar.style.width = targetWidths[index];
        }, index * 150);
      });
      animated = true;
    }
  }

  window.addEventListener("scroll", animateSkillBars);
  animateSkillBars();
});
