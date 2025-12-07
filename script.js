console.log("JS loaded");


//adding the name rotation effect 
//a with accent is : "á"
const names = ["Ashraf A.👋", "اشرف", "Achráf A.", "アシュラフ", "Ашраф"];
let nameIndex = 0;
setInterval(() => {
    const el = document.getElementById("name-rotator");
    if (el) {
        nameIndex = (nameIndex + 1) % names.length;
        el.textContent = names[nameIndex];
    }
}, 2000); // Change name every 2 seconds


// Sticky navbar show-on-scroll
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

    
// Example simple interactivity
const projects = document.querySelectorAll(".project-card");
projects.forEach((card) => {
card.addEventListener("mouseenter", () => {
card.style.transform = "scale(1.03)";
card.style.transition = "0.2s";
});
card.addEventListener("mouseleave", () => {
card.style.transform = "scale(1)";
});
});


document.addEventListener("DOMContentLoaded", () => {
  const titles = [
    "Aspiring Developer",
    "Sophomore",
    "Problem Solver",
    "Technology Enthusiast",
    "Engineer in Progress",
    "Lifelong Learner",
    "Computer Science Student"

  ];

  const el = document.getElementById("title-rotator");
  if (!el) return;

  let titleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const TYPING_SPEED = 80;    // ms per character when typing
  const DELETING_SPEED = 40;  // ms per character when deleting
  const PAUSE_AFTER = 1200;   // pause (ms) after full word is typed

  function tick() {
    const current = titles[titleIndex];

    if (!deleting) {
      // typing forward
      charIndex++;
      el.textContent = current.substring(0, charIndex);

      if (charIndex === current.length) {
        // finished typing -> pause then start deleting
        deleting = true;
        setTimeout(tick, PAUSE_AFTER);
        return;
      }
    } else {
      // deleting backwards
      charIndex--;
      el.textContent = current.substring(0, charIndex);

      if (charIndex === 0) {
        // finished deleting -> move to next title
        deleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
      }
    }

    const delay = deleting ? DELETING_SPEED : TYPING_SPEED;
    setTimeout(tick, delay);
  }

  // initialize to empty so typing appears from start
  el.textContent = "";
  tick();
});
