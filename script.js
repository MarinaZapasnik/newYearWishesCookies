document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("content");
    const mainPageBtn = document.getElementById("home");
    const cookiePageBtn = document.getElementById("coockies");
    const examPageBtn = document.getElementById("exam");

    mainPageBtn.addEventListener('click', loadMainPage);
    cookiePageBtn.addEventListener('click', loadCookiesPage);
    examPageBtn.addEventListener('click', loadExamPage);

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

    function loadCookiesPage() {
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
            cookieText.textContent = 'Предсказание получено! Кликни по кнопке "Печенье с предсказаниями", чтобы получить ещё!';
        }

        content.addEventListener('click', (event) => {
            if (!hasReceivedPrediction && (event.target.className === 'content cookie' || event.target.closest('.cookie'))) {
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
                }, 3000);

                hasReceivedPrediction = true;
                localStorage.setItem('lastPredictionTime', now);
                cookieText.textContent = 'Предсказание получено! Кликни по кнопке "Печенье с предсказаниями", чтобы получить ещё!';
            }
        });
    }

    function loadExamPage() {
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
    }

    function displayQuestion(question) {
        const questionContainer = document.querySelector('.question-container');
        questionContainer.innerHTML = '';
        
        const codeBlock = document.createElement('pre');
        codeBlock.textContent = question.code;
        codeBlock.style.width = '100%';
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
        prevButton.classList.add('prev-button');
        prevButton.addEventListener('click', () => {
            if (currentQuestionIndex > 0) {
                currentQuestionIndex--;
                displayQuestion(currentQuestions[currentQuestionIndex]);
            }
        });
        navButtons.appendChild(prevButton);

        const nextButton = document.createElement('button');
        nextButton.textContent = 'Следующий';
        nextButton.classList.add('next-button');
        nextButton.addEventListener('click', () => {
            if (currentQuestionIndex < currentQuestions.length - 1) {
                currentQuestionIndex++;
                displayQuestion(currentQuestions[currentQuestionIndex]);
            }
        });
        navButtons.appendChild(nextButton);

        questionContainer.appendChild(navButtons);
    }

    // Загрузка главной страницы при открытии
    loadMainPage();
});
