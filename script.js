// RESUME WINDOW

let resumeBtn = document.getElementById("word-icon-btn")
let resumeDiv = document.getElementById("resume-window")
let resumeCloseBtn = document.getElementById("resume-window-close-btn")

resumeBtn.addEventListener("click", () => {
    if(resumeDiv.style.display === "none") {
        
        resumeDiv.style.display = "block";
    }
})

resumeCloseBtn.addEventListener("click", () => {
    if(resumeDiv.style.display === "block") {
        resumeDiv.style.display = "none";
    }
})

// PROJECTS WINDOW

let projectsBtn = document.getElementById("powerpoint-icon-btn")
let projectDiv = document.getElementById("powerpoint-window")
let projectCloseBtn = document.getElementById("powerpoint-window-close-btn")

projectsBtn.addEventListener("click", () => {
    if(projectDiv.style.display === "none") {
        projectDiv.style.display = "block";
    }
})

projectCloseBtn.addEventListener("click", () => {
    if(projectDiv.style.display === "block") {
        projectDiv.style.display = "none";
    }
})


let startBtn = document.getElementsByClassName("start-logo")[0]
let startWindow = document.getElementsByClassName("start-window")[0]

startBtn.addEventListener("click", () => {
    if(startWindow.style.bottom === "20px") {
        startWindow.style.bottom = "-1100px"
    } else {
        startWindow.style.bottom = "20px"
    }
})

