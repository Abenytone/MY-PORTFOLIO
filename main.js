// Import Swiper styles (only needed if you're using a bundler)
import "swiper/swiper-bundle.min.css";

// Import Swiper (only needed if using a bundler)
import Swiper from "swiper";

// Initialize Swiper
const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1, // Show one slide at a time
  spaceBetween: 20, // Space between slides
  navigation: {
    nextEl: ".swiper-button-next", // Right arrow
    prevEl: ".swiper-button-prev", // Left arrow
  },
  breakpoints: {
    // Adjust settings for larger screens
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
