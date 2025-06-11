document.addEventListener("DOMContentLoaded", () => {
  const roles = [
    "Full Stack Developer",
    "Java Developer"
  ];
  let current = 0,
      txt = "",
      isDeleting = false;

  const el = document.getElementById("role-text");
  const typeSpeed = 150;   // typing speed in ms per char
  const eraseSpeed = 75;   // erasing speed
  const waitAfter = 2000;  // pause at full word

  function typeLoop() {
    const fullText = roles[current];

    if (isDeleting) {
      txt = fullText.substring(0, txt.length - 1);
    } else {
      txt = fullText.substring(0, txt.length + 1);
    }

    el.textContent = txt;

    let delta = isDeleting ? eraseSpeed : typeSpeed;

    if (!isDeleting && txt === fullText) {
      // word complete, pause then start deleting
      delta = waitAfter;
      isDeleting = true;
    } else if (isDeleting && txt === "") {
      // fully erased, move to next word
      isDeleting = false;
      current = (current + 1) % roles.length;
      delta = typeSpeed;
    }

    setTimeout(typeLoop, delta);
  }

  // kick it off
  typeLoop();
});
