document.addEventListener("DOMContentLoaded", () => {
  const contactLinks = {
    phone: "+528183848009",
    email: "cristorey.esc@arquidiocesismty.org",
  };

  const mobileMenuButton = document.querySelector("#mobile-menu-button");
  const mobileMenu = document.querySelector("#mobile-menu");

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", () => {
      const isExpanded = mobileMenuButton.getAttribute("aria-expanded") === "true";
      mobileMenu.classList.toggle("hidden", isExpanded);
      mobileMenuButton.setAttribute("aria-expanded", String(!isExpanded));
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        mobileMenuButton.setAttribute("aria-expanded", "false");
      });
    });
  }

  const revealElements = document.querySelectorAll(".reveal");

  if (revealElements.length > 0 && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealElements.forEach((el) => observer.observe(el));
  }

  const callNowButton = document.querySelector("#call-now-button");
  const sendEmailButton = document.querySelector("#send-email-button");

  if (callNowButton) {
    callNowButton.setAttribute("href", `tel:${contactLinks.phone}`);
  }

  if (sendEmailButton) {
    sendEmailButton.setAttribute("href", `mailto:${contactLinks.email}`);
  }

  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }
});
