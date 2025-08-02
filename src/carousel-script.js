// src/carousel-script.js

window.initializeCarousel = function () {
    const track = document.querySelector(".carousel-track");
    const cards = document.querySelectorAll(".carousel-card");
    const indicators = document.querySelectorAll(".indicator");
    const prevBtn = document.querySelector(".carousel-button.prev");
    const nextBtn = document.querySelector(".carousel-button.next");
  
    let currentIndex = 0;
  
    function updateCarousel(index) {
      const offset = index * (cards[0]?.offsetWidth + 32 || 0);
      track.style.transform = `translateX(-${offset}px)`;
  
      indicators.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
      });
    }
  
    function moveToSlide(index) {
      currentIndex = index;
      updateCarousel(currentIndex);
    }
  
    prevBtn?.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + cards.length) % cards.length;
      updateCarousel(currentIndex);
    });
  
    nextBtn?.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % cards.length;
      updateCarousel(currentIndex);
    });
  
    indicators.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        currentIndex = i;
        updateCarousel(currentIndex);
      });
    });
  
    // Expose function for React useEffect
    window.moveToSlide = moveToSlide;
  
    // Init carousel
    updateCarousel(currentIndex);
  };
  