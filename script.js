document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");
  const mainPageBtn = document.getElementById("home");
  const cookiePageBtn = document.getElementById("coockies");
  const examPageBtn = document.getElementById("exam");

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
    "Твое чувство юмора спасет тебя в любой сложной ситуации на работе.",
  ];


    const questions12 = [
        {
            code: "const arr = [1, 2, 3];\nconsole.log(arr.map(x => x * 2));",
            answer: "[2, 4, 6]"
        },
        {
            code: "const str = 'hello';\nconsole.log(str.split('').reverse().join(''));",
            answer: "olleh"
        }
    ];

    const questions13 = [
        {
            code: "const obj = {a: 1, b: 2};\nconsole.log(Object.keys(obj));",
            answer: "['a', 'b']"
        },
        {
            code: "const num = 123;\nconsole.log(num.toString().split('').reverse().join(''));",
            answer: "321"
        }
    ];

    let currentQuestionIndex = 0;
    let currentQuestions = [];

    function displayQuestion(question) {
        const questionContainer = document.querySelector('.question-container');
        questionContainer.innerHTML = '';
        
        const codeBlock = document.createElement('pre');
        codeBlock.textContent = question.code;
        questionContainer.appendChild(codeBlock);

        const copyButton = document.createElement('button');
        copyButton.classList.add('copy-button');
        copyButton.textContent = 'Скопировать';
        copyButton.addEventListener('click', () => {
            navigator.clipboard.writeText(question.code).then(() => {
                alert('Код скопирован!');
            });
        });
        questionContainer.appendChild(copyButton);

        const answerButton = document.createElement('button');
        answerButton.classList.add('answer-button');
        answerButton.textContent = 'Показать ответ';
        const answer = document.createElement('div');
        answer.classList.add('answer');
        answer.textContent = question.answer;
        answerButton.addEventListener('click', () => {
            answer.style.display = 'block';
        });
        questionContainer.appendChild(answerButton);
        questionContainer.appendChild(answer);

        const navButtons = document.createElement('div');
        navButtons.classList.add('nav-buttons');

        const prevButton = document.createElement('button');
        prevButton.textContent = 'Предыдущий';
        prevButton.addEventListener('click', () => {
            if (currentQuestionIndex > 0) {
                currentQuestionIndex--;
                displayQuestion(currentQuestions[currentQuestionIndex]);
            }
        });
        navButtons.appendChild(prevButton);

        const nextButton = document.createElement('button');
        nextButton.textContent = 'Следующий';
        nextButton.addEventListener('click', () => {
            if (currentQuestionIndex < currentQuestions.length - 1) {
                currentQuestionIndex++;
                displayQuestion(currentQuestions[currentQuestionIndex]);
            }
        });
        navButtons.appendChild(nextButton);

        questionContainer.appendChild(navButtons);
    }

    function loadMainPage() {
        content.innerHTML = ''; 
        content.className = 'content main';

        const h2 = document.createElement('h2');
        h2.textContent = 'Аффирмация на 2025 год!';
        h2.classList.add('main-heading'); 
        const p = document.createElement('p');
        p.textContent = 'Я с уверенностью осваиваю каждую новую технологию и метод, от DOM манипуляций до асинхронного программирования. Моя страсть к JavaScript и его методам помогает мне находить креативные и эффективные решения. Я совершенствую свои навыки работы с событиями и взаимодействия с элементами на странице. Я успешен в достижении своих целей, и мой путь к мастерству во фронтенд разработке приносит мне радость и удовлетворение.';
        p.classList.add('main-paragraph'); 

        const audio = document.createElement('audio');
        audio.controls = true;
        const source = document.createElement('source');
        source.src = 'assets/Wasteland More Passion, More Energy.mp3'; // Укажи путь к своему аудиофайлу
        source.type = 'audio/mpeg';
        audio.appendChild(source);

        const audioCaption = document.createElement('p');
        audioCaption.textContent = 'Послушай и зарядись энергией!';
        audioCaption.style.color = '#ffffff';

        content.append(h2, p, audio, audioCaption);
    }

    mainPageBtn.addEventListener('click', loadMainPage);

    cookiePageBtn.addEventListener('click', () => {
        content.innerHTML = ''; 
        content.className = 'content cookie'; 

        const cookieText = document.createElement('h2');
        cookieText.textContent = 'Кликни по любому печенью, чтобы получить свое мотивирующее предсказание';
        cookieText.classList.add('cookie-text');
        content.append(cookieText);

        let hasReceivedPrediction = false;
        const lastPredictionTime = localStorage.getItem('lastPredictionTime');
        const now = new Date().getTime();
        const oneSecond = 1000;

        if (lastPredictionTime && now - lastPredictionTime < oneSecond) {
            hasReceivedPrediction = true;
            cookieText.textContent = 'Предсказание получено! Возвращайся за новым через час!';
        } else {
            hasReceivedPrediction = false;
        }

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
                    content.appendChild(popup);

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

    examPageBtn.addEventListener('click', () => {
        content.innerHTML = '';
        content.className = 'content exam';

        const subheader = document.createElement('div');
        subheader.classList.add('subheader');

        const examButtonsContainer = document.createElement('div');
        examButtonsContainer.classList.add('exam-buttons');

        const button12 = document.createElement('button');
        button12.classList.add('nav-button', 'exam-nav-button');
        button12.textContent = 'Вопросы к экзамену 12-я неделя';
        button12.addEventListener('click', () => {
            currentQuestions = questions12;
            currentQuestionIndex = 0;
            displayQuestion(currentQuestions[currentQuestionIndex]);
        });

        const button13 = document.createElement('button');
        button13.classList.add('nav-button', 'exam-nav-button');
        button13.textContent = 'Вопросы к экзамену 13-я неделя';
        button13.addEventListener('click', () => {
            currentQuestions = questions13;
            currentQuestionIndex = 0;
            displayQuestion(currentQuestions[currentQuestionIndex]);
        });

        examButtonsContainer.appendChild(button12);
        examButtonsContainer.appendChild(button13);

        subheader.appendChild(examButtonsContainer);
        content.appendChild(subheader);

        const questionContainer = document.createElement('div');
        questionContainer.classList.add('question-container');
        content.appendChild(questionContainer);
    });

    // Загрузка главной страницы при открытии
    loadMainPage();
});
