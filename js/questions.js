import { questions } from './data.js'
const progressValueEl = document.querySelector('.progress .value') /* progress 하위의 value element */
const numberEl = document.querySelector('.number')
const questionEl = document.querySelector('.question')
const choice1El = document.querySelector('.choice1')
const choice2El = document.querySelector('.choice2')

let currentNumber = 0
let mbti = ''

/**
 * 10개의 질문을 하나씩 출력해주는 함수
 */
function renderQuestion(currentNumber) {
  const question = questions[currentNumber] //data.js의 questions 배열 n번째 요소
  numberEl.innerHTML = question.number // number 엘리먼트에 텍스트 노드 추가
  questionEl.innerHTML = question.question // question 엘리먼트에 텍스트노드 추가
  choice1El.innerHTML = question.choices[0].text // 첫번째 선택 버튼 엘리먼트에 텍스트노드 추가
  choice2El.innerHTML = question.choices[1].text // 두번째 선택 버튼 엘리먼트에 텍스트노드 추가
  progressValueEl.style.width = (currentNumber + 1) * 10 + '%' // 프로그래스바 초기화: 1*10=10 %, 2*10=20%, ... 
}

/**
 * 버튼을 통해 선택한 값으로 mbti성향 데이터를 축적하는 함수
 */
function nextQuestion(choiceNumber) {
  const question = questions[currentNumber]
  mbti = mbti + question.choices[choiceNumber].value // (i/e) + (n/s) + (f/t) + (p/j)
  currentNumber ++;
  renderQuestion(currentNumber)
}

choice1El.addEventListener('click', function() {
  nextQuestion(0)
})
choice2El.addEventListener('click', function() {
  nextQuestion(1)
})
renderQuestion(currentNumber)
