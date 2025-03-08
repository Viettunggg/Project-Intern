const navLinks = document.querySelectorAll(
    ".navbar-nav .nav-link, .navbar-nav .btn"
  );
  const currentPage = window.location.pathname.split("/").pop() || "Catalog.html";
  navLinks.forEach((link) => {
    const href = link.getAttribute("href").split("/").pop();
    if (href === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
document.querySelectorAll(".dropdown-toggle").forEach(button => {
    button.addEventListener("click", function () {
        const menu = this.nextElementSibling;
        document.querySelectorAll(".dropdown-menu").forEach(item => {
            if (item !== menu) item.classList.remove("active");
        });
        menu.classList.toggle("active");
    });
});

document.addEventListener("click", function (event) {
    if (!event.target.closest(".dropdown")) {
        document.querySelectorAll(".dropdown-menu").forEach(menu => menu.classList.remove("active"));
    }
});

document.querySelectorAll(".reset-btn").forEach(resetButton => {
    resetButton.addEventListener("click", function () {
        const dropdown = this.closest(".dropdown-menu");
        dropdown.querySelectorAll("input[type=checkbox]").forEach(checkbox => checkbox.checked = false);
        updateSelectedCount(dropdown);
    });
});

document.querySelectorAll(".dropdown-menu input[type=checkbox]").forEach(checkbox => {
    checkbox.addEventListener("change", function () {
        updateSelectedCount(this.closest(".dropdown-menu"));
    });
});

function updateSelectedCount(menu) {
    const selectedCount = menu.querySelectorAll("input[type=checkbox]:checked").length;
    menu.querySelector(".selected-count").textContent = `${selectedCount} selected`;
}
