const navLinks = document.querySelectorAll(
  ".navbar-nav .nav-link, .navbar-nav .btn"
);
const currentPage = window.location.pathname.split("/").pop() || "Shop.html";
navLinks.forEach((link) => {
  const href = link.getAttribute("href").split("/").pop();
  if (href === currentPage) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});

//image shop
function changeImage(imagePath) {
  const mainImage = document.getElementById("mainImage");
  mainImage.style.opacity = 0; // Giảm độ mờ trước khi thay đổi ảnh
  setTimeout(() => {
    mainImage.src = imagePath; // Thay đổi ảnh
    mainImage.style.opacity = 1; // Tăng độ mờ trở lại
  }, 500); // Thời gian trễ để hoàn thành hiệu ứng
}
// <!-- Dropdown -->
function toggleFAQ(element) {
  const parent = element.parentElement;
  const answer = parent.querySelector(".faq-answer");
  const icon = element.querySelector(".icon");

  if (answer.style.display === "block") {
    answer.style.display = "none";
    icon.textContent = "▼";
  } else {
    answer.style.display = "block";
    icon.textContent = "▲";
  }
}

// menu hamebẻger
function toggleMenu() {
  document.getElementById("menu").classList.toggle("active");
}

//.carousel-container
let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const carousel = document.querySelector(".carousel");
const totalSlides = slides.length;
const slideWidth = 400;
const dotsContainer = document.querySelector(".dots");

function updateCarousel() {
  const offset = -currentIndex * slideWidth + "px";
  carousel.style.transform = "translateX(" + offset + ")";
  updateDots();
}

function moveSlide(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = 0;
  if (currentIndex > totalSlides - 3) currentIndex = totalSlides - 3;
  updateCarousel();
}

function createDots() {
  for (let i = 0; i < totalSlides - 2; i++) {
    let dot = document.createElement("span");
    dot.classList.add("dot");
    dot.addEventListener("click", function () {
      currentIndex = i;
      updateCarousel();
    });
    dotsContainer.appendChild(dot);
  }
  updateDots();
}

function updateDots() {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
}

createDots();
