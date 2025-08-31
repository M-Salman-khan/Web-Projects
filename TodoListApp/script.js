(function (app) {
    'use strict';

    // console.log(currentTime)
    // let hours = now.getHours()
    // let minutes = now.getMinutes()
    // let seconds = now.getSeconds()
    const submitbtn = document.querySelector(".add")
    const userInput = document.querySelector("#userInput")
    const goalTime = document.querySelector("#goalTime")
    let id = 0

    app.startUp = function () {
        submitbtn.addEventListener("click", addTask);
    }

    function addTask() {
        let taskName = userInput.value
        if (taskName === "") {
            alert("Task cannot be empty!");
            return;
        }
        let task = document.createElement("div");
        task.setAttribute("class", "task")
        task.innerHTML = `
        <div class="side-1">
            <input class="check" type="checkbox" name="checkbox${id}" id="checkbox${id}">
        </div>
        <div class="side-2">
            <label class="head-para" for="checkbox${id}">${taskName}</label>
            <label id="time" for="checkbox${id}">Time : ${goalTime.value || getFormattedTime(new Date())}</label>
        </div>
        <div class="side-3">
                <button class="dlt" onclick="app.taskDlt(this)">Delete</button>
        </div>`
        // document.getElementById("time").innerText=`${hours}:${minutes}`
        let content = document.querySelector(".content")
        content.append(task)
        userInput.value = ""; // Clear input
        goalTime.value = "";  // Clear time input
        id++
    }

    function getFormattedTime(date){
        return `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
    } 

    app.taskDlt = function (button) {
        button.closest(".task").remove()
    }
})(window.app = window.app || {});