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

document.addEventListener("DOMContentLoaded", function () {
  const openPopUp = document.getElementById("open_pop_up");
  const closePopUp = document.getElementById("pop_up_close");
  const popUp = document.getElementById("pop_up"); // Добавлено document.

  // Проверка существования элементов
  if (!openPopUp || !closePopUp || !popUp) {
    console.error("Один из элементов не найден!");
    return;
  }

  openPopUp.addEventListener("click", function (e) {
    e.preventDefault();
    popUp.classList.add("active");
  });

  closePopUp.addEventListener("click", function (e) {
    e.preventDefault();
    popUp.classList.remove("active");
  });
  popUp.addEventListener("click", function (e) {
    if (e.target === popUp) {
      popUp.classList.remove("active");
    }
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      popUp.classList.remove("active");
    }
  });
});
