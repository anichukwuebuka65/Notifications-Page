const button = document.querySelector("header button")
const notificationCount = document.querySelector("h1 span")
const active = document.querySelectorAll(".active")
const activeSpan = document.querySelectorAll(".active span")

button.addEventListener("click", markAsRead)

function markAsRead() {
    notificationCount.innerHTML = "0"
    for (let i = 0; i < active.length; i++ ) {
        active[i].classList.remove("active")
        activeSpan[i].style.display = "none";
    }
}
