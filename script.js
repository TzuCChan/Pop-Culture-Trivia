let questions = document.querySelectorAll(".q")
let right = document.querySelectorAll(".correct")
let answers = document.querySelectorAll(".option")

let start = document.querySelector("#start")
let questionContainer = document.querySelector("#Questions")
let score = 0
let index = 0

let movieQuestionAPI = [
  {
    title: "Batman",
    question: "Who plays Batman/Bruce Wayne in the Dark Knight Trilogy?",
    choices: ["Michael Keaton", "Christian Bale", "Ben Affleck", "Robert Pattinson"],
    correctAnswer: "Christian Bale",
    img: "https://cdn.mos.cms.futurecdn.net/wrr6GB78bVB7VrqA38m22N-970-80.jpg.webp"
  },
  {
    title: "Star Wars",
    question: "What is the color of Rey's lightsaber at the end of The Rise of Skywalker?",
    choices: ["Blue", "Purple", "Yellow", "Green"],
    correctAnswer: "Yellow",
    img: "https://static3.srcdn.com/wordpress/wp-content/uploads/2020/03/Daisy-Ridley-The-Rise-of-Skywalker-BTS-Rey-Skywalker.jpg?q=50&fit=crop&w=740&h=416&dpr=1.5"
  },
  {
    title: "Avengers",
    question: "In the Avengers: Endgame, what is Tony Stark/Iron Man's last words?",
    choices: ["I am... Iron Man", "I love you 3000", "We have a Hulk", "AVENGERS! ASSEMBLE!"],
    correctAnswer: "I am... Iron Man",
    img: "https://static2.srcdn.com/wordpress/wp-content/uploads/2019/08/7.-Iron-Mans-Sacrifice-Avengers-Endgame-Cropped.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5"
  },
  {
    title: "Pokemon",
    question: "Which Pokemon is on the cover of Pokemon Silver?",
    choices: ["Groudon", "Palkia", "Giratina", "Lugia"],
    correctAnswer: "Lugia",
    img: "https://pokemondelugelegends.weebly.com/uploads/2/1/2/3/21237464/269084.jpg?665"
  },
  {
    title: "Demon Slayer",
    question: "In Demon Slayer, what is Yoriichi Tsugikuni's Breathing Style?",
    choices: ["Flame Breathing", "Sun Breathing", "Water Breathing", "Mist Breathing"],
    correctAnswer: "Sun Breathing",
    img: "https://animesouls.com/wp-content/uploads/2021/11/Yoriichi-2.jpg"
  },
  {
    title: "Resident Evil",
    question: "What is the model that the rocket launcher was based on in Resident Evil 2 Remake?",
    choices: ["RPG-7", "M202 FLASH", "FIM-92 Stinger", "AT4"],
    correctAnswer: "AT4",
    img: "https://static3.srcdn.com/wordpress/wp-content/uploads/2019/01/Claire-and-Leon-in-Resident-Evil-2.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5"
  },
  {
    title: "John Wick",
    question: "Which action movie characters said the line: Whoever comes, whoever it is... I'll kill them. I'll kill them all.",
    choices: ["John Wick", "Jason Bourne", "John McClane", "John Rambo"],
    correctAnswer: "John Wick",
    img: "https://s.studiobinder.com/wp-content/uploads/2020/08/20-Best-Action-Movie-Actors-of-All-Time-Featured.jpg"
  },
  {
    title: "Bob's Burger",
    question: "In Bob's Burger, what type of restaurant did Jimmy Pesto runs?",
    choices: ["American", "French", "Italian", "Mexican"],
    correctAnswer: "Italian",
    img: "https://deadline.com/wp-content/uploads/2021/12/TCDBOBU_FE043-e1639877266857.jpg"
  },
  {
    title: "It's Always Sunny In Philadelphia",
    question: "Who is the oldest member in the gang from the Always Sunny?",
    choices: ["Charlie", "Mac", "Frank", "Dennis"],
    correctAnswer: "Frank",
    img: "https://static0.srcdn.com/wordpress/wp-content/uploads/2020/02/Always-Sunny-Featured-Cropped.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5"
  },
  {
    title: "Gundam",
    question: "What is the name of the system equiped on 00 Gundam?",
    choices: ["ZERO system", "NT-D system", "Core Block system", "Twin-Drives system"],
    correctAnswer: "Twin-Drives system",
    img: "https://static3.cbrimages.com/wordpress/wp-content/uploads/2019/08/mobile-suit-gundam-00.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5"
  },
]

start.addEventListener("click", createQuestionSlide)

function createQuestionSlide() {
  let slide = `
    <div class="q">
      <img src="${movieQuestionAPI[index].img}">
      <h4>Question ${index +1}</h4>
      <h3>${movieQuestionAPI[index].question}</h3>
      <div class="Answer">
        <div class="option" name="${movieQuestionAPI[index].choices[0]}">${movieQuestionAPI[index].choices[0]}</div>
        <div class="option" name="${movieQuestionAPI[index].choices[1]}">${movieQuestionAPI[index].choices[1]}</div>
        <div class="option" name="${movieQuestionAPI[index].choices[2]}">${movieQuestionAPI[index].choices[2]}</div>
        <div class="option" name="${movieQuestionAPI[index].choices[3]}">${movieQuestionAPI[index].choices[3]}</div>
      </div>
    </div>
  `
  questionContainer.innerHTML = ""
  questionContainer.insertAdjacentHTML("beforeend", slide)

  addClick()
}

function addClick() {
  let answers = document.querySelectorAll(".option")
  
  answers.forEach(answer => {
    answer.addEventListener("click", checkAnswer)
  })
}

function checkAnswer(e) {
  let userAnswer = e.target.getAttribute("name").toLowerCase()
  let correctAnswer = movieQuestionAPI[index].correctAnswer.toLowerCase()

  if (userAnswer === correctAnswer) {
    incrementScore()
  }

  index++

  if (index < movieQuestionAPI.length) {
    setTimeout(createQuestionSlide, 100)
  } else {
    displayScoreScreen()
  }
}

function displayScoreScreen() {
  questionContainer.innerHTML = ""

  let winDisplay = `
    <div class="winScreen">
      <h1>Great job! Your score is ${score}</h1>
      <div class="restart">Try Again</div>
    </div>
  `
  questionContainer.insertAdjacentHTML("beforeend", winDisplay)
  let restart = document.querySelector(".restart")
  restart.addEventListener("click", () => window.location.reload())
}

function incrementScore() {
  score++
}