let question = document.querySelector(".question")
let quesWithOption = document.querySelector(".quesWithOption")
let button = document.querySelector("button")
let win = document.querySelector(".win")
let instructions = document.querySelector(".instructions")
let count = 0
let points = 0
quesWithOption.style.display = "none"
button.innerText = `Lets start`
const questionsHandle = () => {
    question.innerText = mcqQuestions[count]["question"]
    for (let index = 0; index < 4; index++) {
        let option = document.querySelector(`.option-${index + 1}`)
        let inputOption = document.querySelector(`#option-${index + 1}`)
        inputOption.checked = false
        inputOption.setAttribute('value', `${mcqQuestions[count]["options"][index]}`)
        option.innerText = mcqQuestions[count]["options"][index]
    }
    count++
    quesWithOption.style.display = "block"
    button.innerText = `Submit`
    button.disabled = true
    win.innerText = `Current points is ${points}`
}
const winnerHandle = () => {
    quesWithOption.style.display = "none"
    win.classList.remove("whoWin");
    win.classList.add("finalPoint");
    button.innerText = `Click me to restart !`
    button.addEventListener('click', () => {
        location.reload();
    })
    win.innerText = `Congratulation! You got ${points} points out of 80`
}
const handleClick = () => {
    instructions.style.display = "none"
    selectedOption = document.querySelector('input[name="option"]:checked')
    options = document.querySelectorAll('input[name="option"]')

    if (selectedOption) {
        if (selectedOption.value == mcqQuestions[count - 1]["answer"]) points += 4;
        else points -= 1;
    }
    options.forEach(option => {
        option.addEventListener('change', () => {
            button.disabled = false
        })
    });
    if (count < mcqQuestions.length) questionsHandle()
    else winnerHandle()
}
