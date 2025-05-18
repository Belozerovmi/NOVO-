document.addEventListener("DOMContentLoaded", function () {
  const backToTopButton = document.getElementById("backToTop");

  // Показать/скрыть кнопку при прокрутке
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.add("visible");
    } else {
      backToTopButton.classList.remove("visible");
    }
  });

  // Плавная прокрутка при клике
  backToTopButton.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
