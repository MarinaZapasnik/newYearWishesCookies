document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("content");
    const mainPageBtn = document.getElementById("home");
    const cookiePageBtn = document.getElementById("coockies");
    const examPageBtn = document.getElementById("exam");

    const fortunes = [
        "Сегодня твой день!",
        // Добавьте больше предсказаний по желанию
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

    let isPopupVisible = false; // Объявление переменной для отслеживания отображения сообщений

    cookiePageBtn.addEventListener('click', () => {
        isPopupVisible = false; // Сброс флага при загрузке страницы

        content.innerHTML = ''; 
        content.className = 'content cookie'; 

        const cookieText = document.createElement('h2');
        cookieText.textContent = 'Кликни по любому печенью, чтобы получить свое мотивирующее предсказание';
        cookieText.classList.add('cookie-text');
        content.append(cookieText);

        let hasReceivedPrediction = false;
        const lastPredictionTime = localStorage.getItem('lastPredictionTime');
        const now = new Date().getTime();
        const oneHour = 1000; // Временной интервал в миллисекундах

        if (lastPredictionTime && now - lastPredictionTime < oneHour) {
            hasReceivedPrediction = true;
            cookieText.textContent = 'Предсказание получено! Возвращайся за новым через час!';
        }

        content.addEventListener('click', (event) => {
            if (!isPopupVisible && (event.target.className === 'content cookie' || event.target.closest('.cookie'))) {
                isPopupVisible = true;
                if (hasReceivedPrediction) {
                    const errorPopup = document.createElement('div');
                    errorPopup.classList.add('error-popup');
                    errorPopup.style.position = 'absolute';
                    errorPopup.style.left = `${event.clientX}px`;
                    errorPopup.style.top = `${event.clientY}px`;
                    errorPopup.textContent = 'Упс, ты уже получил свое предсказание!';
                    document.body.appendChild(errorPopup);

                    setTimeout(() => {
                        errorPopup.remove();
                        isPopupVisible = false;
                    }, 3000);
                } else {
                    const prediction = fortunes[Math.floor(Math.random() * fortunes.length)];
                    const popup = document.createElement('div');
                    popup.classList.add('prediction-popup');
                    popup.style.position = 'absolute';
                    popup.style.left = `${event.clientX}px`;
                    popup.style.top = `${event.clientY}px`;
                    popup.textContent = prediction;
                    document.body.appendChild(popup);

                    setTimeout(() => {
                        popup.remove();
                        isPopupVisible = false;
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
