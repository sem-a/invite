window.addEventListener("load", function () {
  const text = this.document.getElementById("title");
  const kolp = document.getElementById("kolp");
  setTimeout(function () {
    kolp.classList.add("visible"); // Добавляем класс для плавного появления
  }, 2000); // Задержка в 1000 миллисекунд (1 секунда)
  setTimeout(function () {
    text.classList.add("visible"); // Добавляем класс для плавного появления
  }, 1000); // Задержка в 1000 миллисекунд (1 секунда)
});

document.getElementById("btn").addEventListener("click", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;

  // Проверяем, если поле не пустое
  if (!name) {
    alert("Пожалуйста, введите имя.");
    return;
  }

  console.log(name);
  // Отправка POST-запроса
  fetch("https://sem-a-invite-b633.twc1.net/api/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: name }),
  })
    .then((response) => {
      if (!response.ok) {
        // Если ответ не успешный, создаем ошибку с телом ответа
        return response.text().then((text) => {
          throw new Error(`Ошибка сети: ${text}`); // Используем текст ошибки
        });
      }
      return response.json(); // или response.text(), если ожидается текст
    })
    .then((data) => {
      console.log("Успех:", data);
      window.location.href = "/send";
    })
    .catch((error) => {
      console.error("Ошибка:", error); // Вывод полной ошибки
      alert(`Произошла ошибка при отправке данных: ${error.message}`); // Выводим полное сообщение об ошибке
    });
});
