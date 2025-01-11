const fortunes = [
    "Сегодня твой код будет работать с первой попытки!",
    "Кто-то лайкнет твой репозиторий на GitHub!",
    "Браузеры забудут про баги и начнут работать слаженно.",
    "CSS перестанет быть загадкой – ты его полностью освоишь!",
    "Git никогда больше не спросит про конфликты слияния.",
    "Каждая функция будет легкой и понятной.",
    "Клиенты будут восхищены твоими дизайнами!",
    "API будут отзываться мгновенно и без ошибок.",
    "Все твои pull request будут приняты без замечаний.",
    "В JavaScript неожиданно появится метод `readMyMind()`.",
    "Ваш новый проект станет хитом в интернете!",
    "Дивы больше не будут ломать верстку.",
    "Каждая анимация в CSS будет выглядеть потрясающе.",
    "Ваша работа принесет вам много лайков и подписчиков в соцсетях.",
    "День без ошибок консоли – твоя новая норма!",
    "Тесты всегда будут проходить с первого раза.",
    "Код-ревью будет быстрым и приятным процессом.",
    "Новые фреймворки будут казаться легкими как перышко.",
    "Ваша разработка принесет радость и удовлетворение!",
    "Пользователи будут в восторге от вашего UX/UI.",
    "Все деплойменты будут успешными.",
    "Ваш CSS Grid всегда будет соответствовать макету.",
    "С JavaScript будет так же просто, как и с пиццей по пятницам.",
    "Все ваши разработки будут быстрыми и отзывчивыми.",
    "Бэкенд разработчики будут вас боготворить.",
    "Ни один браузер больше не выдаст ошибки.",
    "Ваши проекты станут примером для других.",
    "Каждый тикет в Jira будет выполняться быстрее, чем ожидалось.",
    "Ваш код всегда будет чистым и поддерживаемым.",
    "Функциональные спецификации будут кристально ясны.",
    "Ваша команда будет работать как слаженный механизм.",
    "Ваши новые идеи будут всегда внедряться.",
    "Код станет самым любимым делом на свете.",
    "Обновление библиотеки больше не будет кошмаром.",
    "Ваша работа будет приносить только радость.",
    "Пользователи никогда не будут жаловаться на баги.",
    "Ваши сайты будут загружаться моментально.",
    "Каждый день будет приносить новое вдохновение для кода.",
    "Конфигурационные файлы всегда будут на месте.",
    "Ваша креативность будет только расти.",
    "Код будет предугадывать ваши желания.",
    "Ваши разработки станут эталоном качества.",
    "Все задачи будут казаться легкими и выполнимыми.",
    "С каждым днем ваш опыт будет становиться все богаче.",
    "Ошибки будут редким исключением в вашей работе.",
    "Ваши проекты будут выглядеть так, как вы и задумали.",
    "Техническая документация станет вашей лучшей подругой.",
    "Ваши коды будут понятны всем.",
    "Ваши сайты будут вызывать восторг у пользователей.",
    "Каждый релиз будет встречен аплодисментами."
];


const questions12 = [
    {
        code: `// Вопрос: 
// Что необходимо написать вместо ХХХ, 
//чтобы предотвратить перезагрузку страницу, возникающую при отправке формы?
document.body.innerHTML = \`
  <form>
    <label>
      City:
      <input type="text" name="city" />
    </label>
      <button>Submit</button>
  </form>
\`
const form = document.querySelector('form')
form.addEventListener('submit', function (event) {
   XXX
  const city = event.target.city.value
  console.log(city)
})`,
        answer: "event.preventDefault()"
    },
    {
        code: `// Вопрос:
// Что необходимо написать вместо ХХХ, 
//чтобы при клике на любую кнопку в консоль выводился текст этой кнопки?
document.body.innerHTML = \`
  <div class="container">
    <button>HTML</button>
    <button>CSS</button>
    <button>JS</button>
    <button>React</button>
  </div>
\`
const container = document.querySelector('.container')
const buttons = document.querySelectorAll('button')
const button = document.querySelector('button')
 XXX.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    console.log(event.target.textContent)
  }
})`,
        answer: "container"
    },
    {
        code: `// Вопрос:
// Что необходимо написать вместо XXX,
 //чтобы при нажатии на кнопку происходило переключение класса .dark на контейнере? 
//Класс .dark должен удаляться, если от присутствует, 
//иначе класс .dark должен добавляться.
document.body.innerHTML = \`
  <div class="container dark">
    <button>toggle color schema</button>
  </div>
\`
const container = document.querySelector('.container')
const button = document.querySelector('button')
button.addEventListener('click', () => {
   XXX
})`,
        answer: "container.classList.toggle('dark')"
    },
    {
        code: `// Вопрос:
// Что нужно написать вместо XXX, 
//чтобы при клике на кнопку создавался новый HTML-элемент <span> 
//(который будет содержать случайного питомца)?
document.body.innerHTML = \`
  <button id="addPetButton">Добавь питомца!</button>
  <div id="petContainer"></div>
\`;
const pets = ["🐶", "🐱", "🐹", "🐰", "🦜", "🐢", 
              "🐟", "🐸", "🦇", "🕷", "🦔", "🐺"]
const petContainer = document.getElementById("petContainer")
document.getElementById("addPetButton").addEventListener('click', () => {
   const pet = XXX
  pet.textContent = pets[Math.floor(Math.random() * pets.length)]
  pet.style.fontSize = '2rem'
  pet.style.margin = '5px'
  petContainer.append(pet)
})`,
        answer: "document.createElement('span')"
    },
    {
        code: `// Вопрос:
// Что надо написать вместо XXX, чтобы отменить таймер, 
//который устанавливается при нажатии на кнопку "Показать сообщение через 3 секунды"?
document.body.innerHTML = \`
  <button id="start-button">Показать сообщение через 3 секунды</button>
  <button id="cancel-button">Отменить показ сообщения</button>
  <div id="message-output"></div>
\`
const startButton = document.getElementById('start-button')
const cancelButton = document.getElementById('cancel-button')
const messageOutput = document.getElementById('message-output')
let timerId
startButton.addEventListener('click', () => {
  messageOutput.textContent =
    'Сообщение появится через 3 секунды...'
  timerId = setTimeout(() => {
    messageOutput.textContent = 'Вот и сообщение!'
  }, 3000)
})
cancelButton.addEventListener('click', () => {
   XXX
  messageOutput.textContent =
    'Показ сообщения отменён.'
})`,
        answer: "clearTimeout(timerId)"
    },
    {
        code: `// Вопрос:
// Перед вами форма для добавления задач в список.
// Что нужно написать вместо XXX, чтобы новая задача добавлялась в НАЧАЛО списка?
document.body.innerHTML = \`
  <form>
    <input type="text" id="task-input" placeholder="Введите задачу">
    <button type="submit">Добавить задачу!</button>
  </form>
  <ul id="task-container"></ul>
\`
const form = document.querySelector('form')
const taskContainer = document.getElementById('task-container')
const input = document.getElementById('task-input')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const taskText = input.value.trim()
  if (taskText) {
    const task = document.createElement('li')
    task.textContent = taskText
     XXX
    input.value = ''
    input.focus()
  } else {
    alert('Пожалуйста, введите текст задачи!')
  }
})`,
        answer: "taskContainer.prepend(task)"
    }
];

const questions13 = [
  {
      code: `// Вопрос:
      // Что необходимо написать вместо XXX, 
      //чтобы остортировать массив фильмов по рейтингу в порядку убыванания?
      const movies = [
        { title: "Назад в будущее", rating: 8.5 },
        { title: "Начало", rating: 8.8 },
        { title: "Матрица", rating: 8.8 },
        { title: "Паразиты", rating: 8.6 },
        { title: "Тёмный рыцарь", rating: 9.0 }
      ]
      const sortedMovies = movies.sort((a, b) => {
        if (XXX) {
          return 1
        } else if (a.rating === b.rating) {
          return 0
        } else {
          return -1
        }
      })
      console.log("Фильмы, отсортированные по рейтингу:", sortedMovies)`,
      answer: "a.rating < b.rating"
  },
  {
      code: `// Вопрос:
      // Перепиши функцию double в виде стрелочной функции в одной строке.
      // В ответе укажи полученную функцию
      function double(x) {
        return x * 2
      }`,
      answer: "const double = x => x * 2"
  },
  {
      code: `// Вопрос:
      // Напиши одну строку кода вместо XXX, 
      // чтобы в переменной squaredNumber хранился массив квадратов чисел из массива numbers?
      const numbers = [1, 2, 3, 4, 5]
      // Преобразуем массив чисел в массив их квадратов
      const squaredNumbers = numbers.map(number => {
        XXX
      })
      console.log("Квадраты чисел:", squaredNumbers) // Должны получить [1, 4, 9, 16, 25]`,
      answer: "number * number"
  },
  {
      code: `// Вопрос:
      // Напиши строку кода вместо XXX, чтобы получить массив всех книг жанра "фэнтези"?
      const library = [
        { title: "Убийство в Восточном экспрессе", author: "Агата Кристи", genre: "детектив" },
        { title: "Ведьмак", author: "Анджей Сапковский", genre: "фэнтези" },
        { title: "Научное мышление", author: "Карл Поппер", genre: "наука" },
        { title: "Властелин колец", author: "Дж. Р. Р. Толкиен", genre: "фэнтези" },
        { title: "1984", author: "Джордж Оруэлл", genre: "дистопия" }
      ];
      const fantasyBooks = library.filter((book) => {
        XXX
      })
      console.log("Фэнтезийные книги в библиотеке:", fantasyBooks)`,
      answer: "book.genre === 'фэнтези'"
  },
  {
      code: `// Вопрос:
      // Что надо написать вместо XXX, 
      // чтобы создать новый массив на основе массива scientists?
      const scientists = [
        { firstName: "Альберт", lastName: "Эйнштейн", years: "1879-1955", mainWork: "Теория относительности" },
        { firstName: "Исаак", lastName: "Ньютон", years: "1643-1727", mainWork: "Классическая механика" },
        { firstName: "Мария", lastName: "Кюри", years: "1867-1934", mainWork: "Исследование радиоактивности" },
        { firstName: "Галилео", lastName: "Галилей", years: "1564-1642", mainWork: "Совершенствование телескопа" }
      ]
      // Преобразуем список ученых в массив с объединенными именами
      const scientistProfiles = scientists.XXX(scientist => {
        return {
          name: \`\${scientist.firstName} \${scientist.lastName}\`,
          years: scientist.years,
          mainWork: scientist.mainWork
        }
      })
      console.log("Профили ученых:", scientistProfiles)`,
      answer: "map"
  },
  {
      code: `// Вопрос:
      // orderFood - функция имитирующая процесс приготовления еды, 
      // который занимает некоторое время (1 секунду🙂).
      // Что нужно написать вместо XXX, 
      // чтобы через 1 секунду после выполнения данного кода, в консоли отобразилось: 
      // “Доставляю ризотто прямо к вашему столу!”
      function orderFood(dish, callback) {
        console.log(\`Начинаю готовить \${dish}...\`)
        setTimeout(() => {
          console.log(\`\${dish} готово!\`)
          XXX
        }, 1000); // Готовим еду 1 секунду
      }
      function deliverFood(dish) {
        console.log(\`Доставляю \${dish} прямо к вашему столу!\`)
      }
      orderFood("ризотто", deliverFood)`,
      answer: "callback(dish)"
  },
  {
      code: `// Вопрос:
      // Что нужно написать вместо XXX, 
      // чтобы в консоль выводилось сообщение вида: 
      // "Приглашение №1: Привет, Мистер Вискас! Приходи на вечеринку, будет весело!" для каждого питомца в массиве?
      const pets = [
        { name: "Мистер Вискас", type: "кот" },
        { name: "Страйдер", type: "собака" },
        { name: "Бамбл", type: "жабка" },
        { name: "Черепаха Ниндзя", type: "черепаха" }
      ]
      console.log("Отправляем приглашения на вечеринку для питомцев!")
      pets.forEach((XXX) => {
        const invitationNumber = index + 1; // Нумерация начинается с 1
        const message = \`Приглашение №\${invitationNumber}: Привет, \${pet.name}! Приходи на вечеринку, будет весело!\`
        console.log(message)
      });
      console.log("Все приглашения отправлены, ждем гостей!")`,
      answer: "(pet, index)"
  },
  {
      code: `// Вопрос:
      // Что нужно написать вместо XXX, 
      // чтобы отсортировать массив пользователей по возрасту в порядке возрастания? 
      // Ответ дать в максимально лаконичной форме 
      // (одной строкой и не использовать ключевое слово return)
      const users = [
        { name: "Алиса", age: 25 },
        { name: "Боб", age: 30 },
        { name: "Клара", age: 20 },
        { name: "Григорий", age: 35 }
      ];
      // Сортируем массив людей по возрасту в порядке возрастания
      const sortedUsers = users.sort((a, b) => XXX)
      console.log("Люди, отсортированные по возрасту:", sortedUsers)`,
      answer: "a.age - b.age"
  }
];

