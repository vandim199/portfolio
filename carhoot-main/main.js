let beginButton = null
let followingButton = null
let questionBoxEl = null
let questionText = null
let answerButtons = null
let scoreText = null
let randomizedQuestions, currentQuestionIndex 
let correctAnswersCount = 0
window.onload=function(){
//import './style.css'
 beginButton = document.getElementById('start-btn')
 followingButton = document.getElementById('next-btn')
 questionBoxEl = document.getElementById('question-container')
 questionText = document.getElementById('question')
 answerButtons = document.getElementById('answer-buttons')
scoreText = document.getElementById('scoreText')


beginButton.addEventListener('click', startGame)
followingButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})
}

function startGame() {
  correctAnswersCount = 0
  scoreText.classList.add('hide')
  beginButton.classList.add('hide')
  randomizedQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionBoxEl.classList.remove('hide')
  setNextQuestion()
  console.log("Neshto")
}

function setNextQuestion() {
  resetState()
  showQuestion(randomizedQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionText.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtons.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  followingButton.classList.add('hide')
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  console.log(correct)
  if(correct){
    correctAnswersCount = correctAnswersCount+ 1
  }
  setStatusClass(document.body, correct)
  Array.from(answerButtons.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (randomizedQuestions.length > currentQuestionIndex + 1) {
    followingButton.classList.remove('hide')
  } else {
    scoreText.innerText = "Score: "+ correctAnswersCount
    scoreText.classList.remove('hide')
    beginButton.innerText = 'Restart'
    beginButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')

  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Which animal features in the logo for Lamborghini?',
    answers: [
      { text: 'A Bull', correct: true },
      { text: 'A Horse', correct: false },
      { text: 'A Bird', correct: false },
      { text: 'A Pony', correct: false }
    ]
  },
  {
    question: 'What is the world’s all-time best selling car?',
    answers: [
      { text: 'BMW X5', correct: false },
      { text: 'Toyota Corolla', correct: true },
      { text: 'Ford Mondeo', correct: false },
      { text: 'Toyota Avensis', correct: false }
    ]
  },
  {
    question: 'Which sports car features in the Back To The Future trilogy?',
    answers: [
      { text: 'Koenigsegg', correct: false },
      { text: 'DeLorean', correct: true },
      { text: 'Lamborghini', correct: false },
      { text: 'Aston Martin', correct: false }
    ]
  },
  {
    question: 'Which sports car features in the Back To The Future trilogy?',
    answers: [
      { text: 'Tesla Model S', correct: false },
      { text: 'Tesla Model 3', correct: true },
      { text: 'Tesla Model X', correct: false },
      { text: 'Tesla Model Y', correct: false }
    ]
  },
  {
    question: 'Which iconic car manufacturer also made airplane engines?',
    answers: [
      { text: 'Toyota', correct: false },
      { text: 'Mercedes-Benz', correct: false },
      { text: 'BMW', correct: false },
      { text: 'Rolls Royce', correct: true }
    ]
  }
]

