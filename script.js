// Create randoms multiply
let num1 = Math.ceil(Math.random() * 10);
let num2 = Math.ceil(Math.random() * 10);

let correctAns = num1 * num2;

let question = document.getElementById("question");
question.innerText = `What is ${num1} multiply by ${num2} ?`;

let score = JSON.parse(localStorage.getItem("score"));

if (!score || score < 0) {
  score = 0;
}

let inputEl = document.getElementById("user-answer");

let formEl = document.querySelector("form");
formEl.onsubmit = function (e) {
  let userAns = document.getElementById("user-answer").value;
  let userAnsRe = /\b\d{1,3}(?!.)/g;
  let test = userAnsRe.test(userAns);
  if (!test) {
    return false;
  } else {
    if (correctAns === +userAns) {
      score++;
      updataLocalStorage();
    } else {
      score--;
      updataLocalStorage();
    }
  }
};

function updataLocalStorage() {
  window.localStorage.setItem("score", JSON.stringify(score));
}

let scoreEl = document.getElementById("score");
scoreEl.innerText = `score: ${score}`;
