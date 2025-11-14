 // Home banner carousel
    $(".home-banner-carousel").owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2500,
      autoplayHoverPause: true,
      smartSpeed: 800,
      dots: true,
      nav: false
    });

    // Banner carousel
    $('.banner-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      dots: false,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsive: {
        0: { items: 1 },
        600: { items: 1 },
        1000: { items: 1 }
      }
    });

          $(".industry-stats-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: false,
      dots: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      smartSpeed: 800,
      responsive: {
        0: { items: 1 },
        768: { items: 2 },
        1024: { items: 3 }
      }
    });
      // Optional fade-in on scroll animation
  const boxes = document.querySelectorAll(".vision-box, .mission-box");
  window.addEventListener("scroll", () => {
    boxes.forEach((box) => {
      const boxTop = box.getBoundingClientRect().top;
      if (boxTop < window.innerHeight - 100) {
        box.style.opacity = "1";
        box.style.transform = "translateY(0)";
      }
    });
  });