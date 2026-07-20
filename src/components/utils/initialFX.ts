import gsap from "gsap";
import { smoother } from "../Navbar";

export function initialFX() {
  document.body.style.overflowY = "auto";
  smoother.paused(false);
  document.getElementsByTagName("main")[0].classList.add("main-active");

  // Navbar + social icons fade in
  gsap.fromTo(
    [".header", ".icons-section"],
    { opacity: 0, y: -8 },
    { opacity: 1, y: 0, duration: 0.7, ease: "power2.out", delay: 0.1 }
  );

  // Left column — stagger each element
  gsap.fromTo(
    [".landing-greeting", ".landing-name", ".landing-roles", ".landing-tagline", ".landing-cta"],
    { opacity: 0, y: 28 },
    { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.1, delay: 0.25 }
  );

  // Center character — scale + fade
  gsap.fromTo(
    ".landing-char-img",
    { opacity: 0, scale: 0.92, y: 20 },
    { opacity: 1, scale: 1, y: 0, duration: 1.1, ease: "power2.out", delay: 0.35 }
  );

  // Glow
  gsap.fromTo(
    ".landing-char-glow",
    { opacity: 0 },
    { opacity: 1, duration: 1.4, ease: "power2.out", delay: 0.6 }
  );

  // Stats card
  gsap.fromTo(
    ".landing-stats",
    { opacity: 0, x: 20 },
    { opacity: 1, x: 0, duration: 0.8, ease: "power2.out", delay: 0.5 }
  );

  // Scroll indicator
  gsap.fromTo(
    ".landing-scroll",
    { opacity: 0 },
    { opacity: 0.45, duration: 1, ease: "power2.out", delay: 1 }
  );
}
