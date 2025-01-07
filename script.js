


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

const coockieBtn = document.getElementById('coockies')
const content = document.getElementById('content')


coockieBtn.addEventListener('click', () => {
    content.innerHTML='';
    const magikCookie = document.createElement('button');
    magikCookie.textContent = 'Выбери свое печенье'
    content.append(magikCookie)
    document.body.style.backgroundImage ="url('assets/watercolor-painting-pattern-fortune-cookies-seamless-repeating-print-chinese-holiday-cookies-chinese-new-year-fortune-telling-cookies-isolated-white-drawn-by-hand_276714-860.avif')" 
    document.body.style.backgroundRepeat = "repeat";
    document.body.style.backgroundSize = "auto";



    magikCookie.addEventListener('click', () => {
        const prediction = fortunes[Math.floor(Math.random() * fortunes.length)]
        magikCookie.src = 'assets/png-clipart-fortune-cookie-chinese-cuisine-biscuits-black-and-white-cookie-biscuit-angle-food.png'
        const oracul = document.createElement('p')
        oracul.textContent = prediction
        content.append(oracul)
    })
});

let currentParagraph = 0;
const paragraphs = document.querySelectorAll('.content p');
document.getElementById('toggle-paragraphs').addEventListener('click', () => {
    paragraphs.forEach((p, index) => {
        p.style.display = (index === currentParagraph) ? 'block' : 'none';
    });
    currentParagraph = (currentParagraph + 1) % paragraphs.length;
});

// Начальное отображение первого абзаца
paragraphs.forEach((p, index) => {
    p.style.display = (index === 0) ? 'block' : 'none';
});
