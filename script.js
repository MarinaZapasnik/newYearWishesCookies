


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
    "Ты научишься новому способу оптимизации производительности."
];

document.getElementById('shuffleFortune').addEventListener('click', () => {
    const cookie = document.getElementById('cookie');
    cookies.forEach(cookie => {
        cookie.style.animation = 'shake 0.5s';
        setTimeout(() => {
            cookie.style.animation = '';
        }, 500);
    });
});

document.querySelectorAll('.cookie').forEach((cookie, index) => {
    cookie.addEventListener('click', () => {
        const randomFortuneIndex = Math.floor(Math.random() * fortunes.length);
        document.getElementById('fortuneText').textContent = fortunes[randomFortuneIndex];
    });
});
