const count = document.querySelector('.count');

function countIncrementor() {
    if (typeof (Storage) !== "undefined") {
        if (sessionStorage.clickCount) {
            sessionStorage.clickCount = Number(sessionStorage.clickCount) + 1;
        } else {
            sessionStorage.clickCount = 1;
        }
        count.innerText = `You have clicked the button ${sessionStorage.clickCount} times.`;
    } else {
        count.innerText = "Your browser doesn't support our API!!"
    }
}