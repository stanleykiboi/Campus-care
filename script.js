const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", navLinks.classList.contains("open"));
    });
}

document.querySelectorAll("form[data-demo-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const message = form.querySelector(".form-message");
        if (message) {
            message.style.color = "#087f5b";
            message.textContent = "Thanks! Your information has been submitted.";
        }
    });
});
