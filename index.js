gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin();


const menu = document.getElementById('menu');
const hamburger = document.getElementById('menu-btn');

hamburger.addEventListener("click", () => {
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
  hamburger.classList.toggle("open");
});

gsap.from(".menu-item", {
  duration: 1,
  opacity: 0,
  y: -30,
  scale: 0.8,
  rotation: 5,
  stagger: {
    amount: 0.5,
    from: "start",
    grid: "auto",
  },
  ease: "circ.out",
});

gsap.from(".logo", {
  duration: 1.5,
  y: -30,
  opacity: 0,
  scale: 1.2,
  rotate: 10,
  ease: "back.out(1.7)",
  delay: 0.5,
});

gsap.from(".hero-title", {
  duration: 1,
  opacity: 0,
  y: 20,
  scale: 0.9,
  ease: "power2.out",
});

// Select all testimonial cards
const testimonials = gsap.utils.toArray("#testimonials .drop-shadow-xl");

testimonials.forEach((testimonial, index) => {
  gsap.from(testimonial, {
    scrollTrigger: {
      trigger: testimonial,
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
    delay: index * 0.2,
  });
});

const featureItems = gsap.utils.toArray("#features .flex-col");
featureItems.forEach((feature, index) => {
  gsap.from(feature, {
    scrollTrigger: {
      trigger: feature,
      start: "top 90%",
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1,
      ease: "power2.out",
    delay: index * 0.1
  });
});



