document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector("#navMenu");

  if (!navMenu || !menuToggle) {
    console.error("menuToggle or navMenu not found");
    return;
  }

  // Toggle menu
  menuToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    navMenu.classList.toggle("show");
    menuToggle.classList.toggle("active");
  });

  // Active link + close menu on click
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".btn");
    if (!btn) return;

    document.querySelectorAll(".btn").forEach((b) => {
      b.classList.remove("active");
    });

    btn.classList.add("active");

    if (window.innerWidth <= 900) {
      navMenu.classList.remove("show");
      menuToggle.classList.remove("active");
    }
  });

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    const isInsideMenu = navMenu.contains(e.target);
    const isToggle = menuToggle.contains(e.target);

    if (!isInsideMenu && !isToggle && window.innerWidth <= 900) {
      navMenu.classList.remove("show");
      menuToggle.classList.remove("active");
    }
  });

  // Reset on resize
  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      navMenu.classList.remove("show");
      menuToggle.classList.remove("active");
    }
  });
});
