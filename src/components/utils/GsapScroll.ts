import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// No 3D character — these are called from Loading.tsx but are now no-ops
// kept so existing imports don't break
export function setCharTimeline() {}
export function setAllTimeline() {
  // Animate career items
  document.querySelectorAll(".career-item").forEach((item, i) => {
    gsap.fromTo(
      item,
      { opacity: 0, x: -24 },
      {
        opacity: 1, x: 0, duration: 0.65, ease: "power2.out",
        delay: i * 0.1,
        scrollTrigger: {
          trigger: item,
          start: "top 82%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  // Animate service cards
  document.querySelectorAll(".service-card").forEach((card, i) => {
    gsap.fromTo(
      card,
      { opacity: 0, y: 20 },
      {
        opacity: 1, y: 0, duration: 0.6, ease: "power2.out",
        delay: (i % 2) * 0.08,
        scrollTrigger: {
          trigger: card,
          start: "top 86%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  // Animate achievement cards
  document.querySelectorAll(".ach-card").forEach((card, i) => {
    gsap.fromTo(
      card,
      { opacity: 0, y: 20 },
      {
        opacity: 1, y: 0, duration: 0.6, ease: "power2.out",
        delay: (i % 3) * 0.08,
        scrollTrigger: {
          trigger: card,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  ScrollTrigger.refresh();
}
