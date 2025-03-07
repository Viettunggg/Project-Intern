const navLinks = document.querySelectorAll(
  ".navbar-nav .nav-link, .navbar-nav .btn"
);
const currentPage = window.location.pathname.split("/").pop() || "Home.html";
navLinks.forEach((link) => {
  const href = link.getAttribute("href").split("/").pop();
  if (href === currentPage) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});

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
