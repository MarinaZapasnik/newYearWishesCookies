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

document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    const mainPageBtn = document.getElementById('home');
    const cookiePageBtn = document.getElementById('coockies');

    mainPageBtn.addEventListener('click', () => {
        // Очищаем контент
        content.innerHTML = ''; 
        content.className = 'content main'; // Меняем класс

        // Добавляем заголовок и аффирмацию
        const h2 = document.createElement('h2');
        h2.textContent = 'Аффирмация на 2025 год!';
        h2.classList.add('main-heading'); // Применяем новый класс
        const p = document.createElement('p');
        p.textContent = 'Я с уверенностью осваиваю каждую новую технологию и метод, от DOM манипуляций до асинхронного программирования. Моя страсть к JavaScript и его методам помогает мне находить креативные и эффективные решения. Я совершенствую свои навыки работы с событиями и взаимодействия с элементами на странице. Я успешен в достижении своих целей, и мой путь к мастерству во фронтенд разработке приносит мне радость и удовлетворение.';
        p.classList.add('main-paragraph'); // Применяем новый класс

        content.append(h2, p);
    });

    cookiePageBtn.addEventListener('click', () => {
        // Очищаем контент
        content.innerHTML = ''; 
        content.className = 'content cookie'; // Меняем класс

        // Добавляем текст для предсказаний
        const cookieText = document.createElement('h2');
        cookieText.textContent = 'Кликни по любому печенью, чтобы получить свое мотивирующее предсказание';
        cookieText.classList.add('cookie-text');
        content.append(cookieText);

        let hasReceivedPrediction = false;
        const lastPredictionTime = localStorage.getItem('lastPredictionTime');
        const now = new Date().getTime();
        const oneSecond = 1000; // 1 секунда в миллисекундах

        if (lastPredictionTime && now - lastPredictionTime < oneSecond) {
            hasReceivedPrediction = true;
            cookieText.textContent = 'Предсказание получено! Возвращайся за новым через час!';
        }

        // Обработчик события клика на элемент контента
        content.addEventListener('click', (event) => {
            if (event.target.className === 'content cookie' || event.target.closest('.cookie')) {
                if (hasReceivedPrediction) {
                    const errorPopup = document.createElement('div');
                    errorPopup.classList.add('error-popup');
                    errorPopup.style.left = `${event.clientX}px`;
                    errorPopup.style.top = `${event.clientY}px`;
                    errorPopup.textContent = 'Упс, ты уже получил свое предсказание!';
                    document.body.appendChild(errorPopup);

                    setTimeout(() => {
                        errorPopup.remove();
                    }, 3000);
                } else {
                    const prediction = fortunes[Math.floor(Math.random() * fortunes.length)];
                    const popup = document.createElement('div');
                    popup.classList.add('prediction-popup');
                    popup.style.left = `${event.clientX}px`;
                    popup.style.top = `${event.clientY}px`;
                    popup.textContent = prediction;
                    document.body.appendChild(popup);

                    setTimeout(() => {
                        popup.remove();
                    }, 3000);

                    hasReceivedPrediction = true;
                    localStorage.setItem('lastPredictionTime', now);
                    cookieText.textContent = 'Предсказание получено! Возвращайся за новым через час!';
                }
            }
        });
    });
});
