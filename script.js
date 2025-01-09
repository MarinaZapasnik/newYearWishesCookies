const fortunes = [
    "Сегодня твой день!",
    "Будь готов к неожиданностям.",
    "Удача улыбается тебе.",
    "Скоро ты получишь хорошие новости.",
    "Слушай своё сердце.",
    "Новые возможности на горизонте.",
    "Тебя ждут приятные сюрпризы.",
    "Время для перемен.",
    "Твоя программа заработает с первой попытки.",
    "Ты найдешь решение своей сложной задачи.",
    "Сегодня ты откроешь для себя новую технологию.",
    "Твой код будет чистым и оптимизированным.",
    "Твоя карьера в IT будет стремительно развиваться.",
    "Ты найдешь баг, который давно искал.",
    "Тебя ждет успешная презентация проекта.",
    "Сегодня ты освоишь новый фреймворк.",
    "Твои CSS-стили будут безупречными.",
    "Сегодня ты создашь впечатляющий пользовательский интерфейс.",
    "Ты найдешь идеальное решение для адаптивного дизайна.",
    "Твои навыки JavaScript улучшатся с каждым днем.",
    "Ты вдохновишься новым проектом на GitHub.",
    "Сегодня твоя верстка будет идеальной.",
    "Ты научишься новому способу оптимизации производительности.",
    "Сегодня ты поймешь, как работают промисы и `async/await`.",
    "Твои `map` и `filter` будут работать как часы.",
    "Твои `forEach` и `reduce` заставят массивы петь.",
    "Ты добавишь событие `click` и все заработает как по маслу.",
    "Сегодня твои строки преобразятся с помощью `split` и `join`.",
    "Твой колбэк будет работать без единого `callback hell`.",
    "Твои события будут срабатывать в нужное время и в нужном месте.",
    "Ты создашь анимацию с помощью CSS и JavaScript, которая покорит сердца.",
    "Сегодня ты освоишь искусство `debounce` и `throttle`.",
    "Ты напишешь `event listener`, который не забудешь отписать.",
    "Ваш проект пойдет гладко, а баги будут укрощены.",
    "На следующей встрече разработчиков ты расскажешь анекдот про программистов, и все засмеются.",
    "Твои анимации будут плавнее масла.",
    "Твоя следующая правка CSS уложится в пять минут. Обещаем.",
    "Сегодня твой код пройдет проверку ESLint без ошибок!",
    "Ты найдешь идеальный фреймворк для своего проекта.",
    "После долгих размышлений ты выберешь между Vue и React… и будешь доволен.",
    "Сегодня ты почувствуешь себя гуру Git.",
    "Ты откроешь для себя новый трюк с flexbox и будешь радоваться, как ребенок на Новый год.",
    "Твоя верстка будет идеальной на всех устройствах.",
    "Твои пользователи будут в восторге от твоих интерфейсов.",
    "Ты справишься с тем, что раньше казалось невозможным.",
    "Сегодня ты закроешь все свои вкладки в браузере. Ну, почти все.",
    "Ты найдешь баг, который давно искал, в самый неожиданный момент.",
    "Твои CSS-стили будут идеальными, и ни одна строка не будет считаться лишней.",
    "Сегодня ты создашь интерфейс, который станет шедевром.",
    "Будущее твоего проекта — как палитра: яркое и насыщенное.",
    "Ты вдохновишься новым проектом на GitHub.",
    "Ты найдешь идеальное решение для адаптивного дизайна.",
    "Ты овладеешь магией Grid и Flexbox.",
    "Сегодня ты создашь UI, который впечатлит всех.",
    "Ты достигнешь желаемой производительности проекта.",
    "Твоя следующая функция будет блестящей идеей.",
    "Ты убедишь менеджера в важности рефакторинга.",
    "Сегодня твои баги будут бояться тебя.",
    "Ты научишься новому способу дебага кода.",
    "Ты вдохновишься новым дизайном, который оставит всех в восторге.",
    "Твои CSS-стили будут как произведение искусства.",
    "Ты найдешь идеальное решение для навигации.",
    "Впереди ждет успешная демонстрация проекта.",
    "Ты освоишь новую библиотеку за один вечер.",
    "Твой новый код будет легче и эффективнее.",
    "Ты создашь компонент, который станет эталоном.",
    "Сегодня ты откроешь для себя новый инструмент.",
    "Твой следующий Pull Request будет принят без замечаний.",
    "Ты найдешь баг в чужом коде и станешь героем дня.",
    "Сегодня твои семантические HTML-метки будут идеальны.",
    "Ты найдешь идеальный шрифт для своего проекта.",
    "Впереди ждут удивительные открытия в мире фронтенда.",
    "Ты откроешь для себя новый полезный сайт для разработчиков.",
    "Твоя адаптивная верстка вызовет восхищение у всех.",
    "Твой код станет примером для подражания.",
    "Ты справишься с любым техническим испытанием.",
    "Твое чувство юмора спасет тебя в любой сложной ситуации на работе."
];

const content = document.getElementById('content');

// Обновляем фон и добавляем инструкцию
content.innerHTML = '';
const cookieText = document.createElement('h2');
cookieText.textContent = 'Кликни по любому месту на странице, чтобы получить свое мотивирующее предсказание';
content.append(cookieText);

document.body.style.backgroundImage = "url('assets/watercolor-painting-pattern-fortune-cookies-seamless-repeating-print-chinese-holiday-cookies-chinese-new-year-fortune-telling-cookies-isolated-white-drawn-by-hand_276714-860.avif')";
document.body.style.backgroundRepeat = "repeat";
document.body.style.backgroundSize = "auto";

let hasReceivedPrediction = false;

// Проверяем, есть ли уже полученное предсказание
const lastPredictionTime = localStorage.getItem('lastPredictionTime');
const now = new Date().getTime();
const oneHour = 1//000 * 60 * 60; // 1 час в миллисекундах

if (lastPredictionTime && now - lastPredictionTime < oneHour) {
    hasReceivedPrediction = true;
    cookieText.textContent = 'Твое предсказание на этот час уже получено. Возвращайся позже за новым!';
}

// Функция для отображения предсказания в месте клика на фоновое изображение
document.body.addEventListener('click', (event) => {
    if (hasReceivedPrediction) {
        // Показать сообщение, что предсказание уже получено
        const errorPopup = document.createElement('div');
        errorPopup.style.position = 'absolute';
        errorPopup.style.left = `${event.clientX}px`;
        errorPopup.style.top = `${event.clientY}px`;
        errorPopup.style.backgroundColor = 'white';
        errorPopup.style.border = '1px solid red';
        errorPopup.style.padding = '10px';
        errorPopup.style.borderRadius = '5px';
        errorPopup.textContent = 'Упс, ты уже получил свое предсказание!';
        document.body.appendChild(errorPopup);

        setTimeout(() => {
            errorPopup.remove();
        }, 3000);
    } else {
        const prediction = fortunes[Math.floor(Math.random() * fortunes.length)];
        const popup = document.createElement('div');
        popup.style.position = 'absolute';
        popup.style.left = `${event.clientX}px`;
        popup.style.top = `${event.clientY}px`;
        popup.style.backgroundColor = 'white';
        popup.style.border = '1px solid black';
        popup.style.padding = '10px';
        popup.style.borderRadius = '5px';
        popup.textContent = prediction;
        document.body.appendChild(popup);

        setTimeout(() => {
            popup.remove();
        }, 3000);

        hasReceivedPrediction = true;
        localStorage.setItem('lastPredictionTime', now);
        cookieText.textContent = 'Твое предсказание уже получено. Возвращайся за новым через час!';
    }
});

let currentParagraph = 0;
const paragraphs = document.querySelectorAll('.content p');
document.getElementById('toggle-paragraphs').addEventListener('click', () => {
    paragraphs.forEach((p, index) => {
        p.style.display = (index === currentParagraph) ? 'block' : 'none';
    });
    currentParagraph = (currentParagraph + 1) % paragraphs.length;
});

paragraphs.forEach((p, index) => {
    p.style.display = (index === 0) ? 'block' : 'none';
});
