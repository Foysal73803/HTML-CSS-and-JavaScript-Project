let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endvalue = parseInt(valueDisplay.getAttribute
    ("data-val"));
    let duration = Math.floor(interval / endvalue);
    let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent =  startValue;
        if(startValue == endvalue){
            clearInterval(counter);
        }
    }, duration);
});