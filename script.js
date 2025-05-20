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
  const popUp = document.getElementById("pop_up");
  const callBack = document.getElementById("callback");

  // Проверка существования элементов
  if (!openPopUp || !closePopUp || !popUp) {
    console.error("Один из элементов не найден!");
    return;
  }

  callBack.addEventListener("click", function (e) {
    e.preventDefault();
    popUp.classList.remove("active");
  });

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

const emailInput = document.getElementById("emailInput");
const errorText = document.getElementById("errorText");

// Запрещаем автоподстановку для email
emailInput.setAttribute("autocomplete", "off");

emailInput.addEventListener("input", function () {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(this.value)) {
    errorText.style.display = "block";
    this.style.borderColor = "red";
  } else {
    errorText.style.display = "none";
    this.style.borderColor = "green";
  }
});

const phoneInput = document.getElementById("phoneInput");
const phoneErrorText = document.getElementById("phoneErrorText");

// Запрещаем автоподстановку для телефона
phoneInput.setAttribute("autocomplete", "off");

// Маска для автоматического форматирования
phoneInput.addEventListener("input", function (e) {
  let x = e.target.value
    .replace(/\D/g, "")
    .match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);

  // Форматируем номер с учетом введенных данных
  let formattedValue = !x[2]
    ? x[1]
    : x[1] +
      (x[2] ? " (" + x[2] + ")" : "") +
      (x[3] ? " " + x[3] : "") +
      (x[4] ? "-" + x[4] : "") +
      (x[5] ? "-" + x[5] : "");

  e.target.value = formattedValue;
});

// Валидация номера
phoneInput.addEventListener("blur", function () {
  const phoneRegex =
    /^(\+?\d{1,3}[\s\-]?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}$/;

  if (!phoneRegex.test(this.value)) {
    phoneErrorText.style.display = "block";
    this.style.borderColor = "red";
  } else {
    phoneErrorText.style.display = "none";
    this.style.borderColor = "green";
  }
});

const nameInput = document.getElementById("nameInput");
const nameErrorText = document.getElementById("nameErrorText");

// Запрещаем автоподстановку для имени
nameInput.setAttribute("autocomplete", "off");

// Валидация имени
nameInput.addEventListener("input", function () {
  if (this.value.trim() === "") {
    nameErrorText.style.display = "block";
    this.style.borderColor = "red";
  } else {
    nameErrorText.style.display = "none";
    this.style.borderColor = "green";
  }
});

function showCustomAlert(message) {
  const alertBox = document.getElementById("customAlert");
  alertBox.textContent = message; // Устанавливаем текст уведомления
  alertBox.classList.add("show"); // Добавляем класс для отображения

  // Показываем уведомление
  alertBox.style.visibility = "visible"; // Устанавливаем видимость в "visible"

  // Скрываем уведомление через 3 секунды
  setTimeout(() => {
    alertBox.classList.remove("show"); // Убираем класс для скрытия

    // Скрываем элемент после завершения анимации
    setTimeout(() => {
      alertBox.style.visibility = "hidden"; // Скрываем элемент
    }, 500); // 500 миллисекунд соответствует времени анимации
  }, 3000); // 3000 миллисекунд = 3 секунды
}

// Добавляем обработчик события для кнопки
document.getElementById("callback").onclick = function () {
  showCustomAlert("Заявка принята!");
};

setTimeout(() => {
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    if (input.matches(":-webkit-autofill")) {
      input.style.backgroundColor = "transparent";
    }
  });
}, 100);
