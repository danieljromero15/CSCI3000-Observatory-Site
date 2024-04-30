var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 00,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
      slideShadows: true,
    },
    autoplay:{
        delay: 3000,
        disableOnInteraction: false,
    }
    
  });