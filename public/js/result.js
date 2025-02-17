// Функция для получения списка гостей
function fetchGuestList() {
  // Выполняем GET-запрос на /api/get
  fetch("http://sem-a-invite-e91a.twc1.net/api/get")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Сеть ответила с ошибкой: " + response.status);
      }
      return response.json(); // Преобразуем ответ в JSON
    })
    .then((data) => {
      const guestListContainer = document.querySelector(".guest-list");

      // Очищаем контейнер перед добавлением новых элементов (если нужно)
      guestListContainer.innerHTML = "";

      data.forEach((guest) => {
        // Предполагается, что data - это массив объектов гостей
        const listItem = document.createElement("div"); // Создаем новый элемент div для каждого гостя

        listItem.textContent = `${guest.name}`; // Устанавливаем текст элемента как имя гостя

        guestListContainer.appendChild(listItem); // Добавляем элемент в список гостей
      });

    })
    .catch((error) => {
      console.error("Ошибка при получении списка гостей:", error);
    });
}

// Вызываем функцию после загрузки страницы или по вашему усмотрению.
document.addEventListener("DOMContentLoaded", () => {
  fetchGuestList();
});
