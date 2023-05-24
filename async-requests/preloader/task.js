const loader = document.getElementById('loader');
const items = document.getElementById('items');
const url = 'https://students.netoservices.ru/nestjs-backend/slow-get-courses';

// Создаем запрос на сервер
const xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.send();

// Вешаем обработчик
xhr.onreadystatechange = function() {
    // Если доставка данных завершена, пробуем распарсить ответ от сервера
    if (xhr.readyState === 4) {

        // Прячем анимацию загрузки
        loader.classList.remove('loader_active');

        const json = JSON.parse(xhr.response);
        const valutes = json.response["Valute"];

        // Проходимся по каждому объекту
        for (let i in valutes) {

            // Для каждого объекта создаем свой html-элемент
            createItem(valutes[i].CharCode, valutes[i].Value);
        };
    }; 
};

// Функция для создания html-элемента
let createItem = function(code, value) {
    const item = document.createElement('div');
    item.classList.add('item');

    const itemCode = document.createElement('div');
    itemCode.classList.add('item__code');

    const itemValue = document.createElement('div');
    itemValue.classList.add('item__value');

    itemCode.textContent = code;
    itemValue.textContent = value;

    item.appendChild(itemCode);
    item.appendChild(itemValue);
    items.appendChild(item);
};