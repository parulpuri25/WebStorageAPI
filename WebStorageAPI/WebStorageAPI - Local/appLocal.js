const info = document.querySelector('.info');
function incrementCounter() {
    if (typeof (Storage) !== "undefined") {
        if (localStorage.clickCount) {
            localStorage.clickCount = Number(localStorage.clickCount) + 1;
        } else {
            localStorage.clickCount = 1;
        }
        info.innerText = `You have clicked this button ${localStorage.clickCount} times.`;
        console.log(localStorage.clickCount);
    } else {
        info.innerText = "Your browser doesn't support our API."
    }

}