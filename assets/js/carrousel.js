let currentSlide = 0;

function showSlide(index) {
  const banners = document.getElementsByClassName("banner");
  const controls = document.getElementsByClassName("control");

  for (let i = 0; i < banners.length; i++) {
    banners[i].classList.remove("active");
    controls[i].classList.remove("active");
  }

  banners[index].classList.add("active");
  controls[index].classList.add("active");
  currentSlide = index;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % document.getElementsByClassName("banner").length;
  showSlide(currentSlide);
}

function previousSlide() {
  currentSlide = (currentSlide - 1 + document.getElementsByClassName("banner").length) % document.getElementsByClassName("banner").length;
  showSlide(currentSlide);
}

// Intervalo automático (opcional)
//let carouselInterval;

//function startCarousel() {
  //carouselInterval = setInterval(nextSlide, 5000); // Muda de slide a cada 5 segundos
//}

//function stopCarousel() {
  //clearInterval(carouselInterval);
//}

showSlide(currentSlide); // Exibir o primeiro slide
//startCarousel(); // Iniciar o carrossel automático
