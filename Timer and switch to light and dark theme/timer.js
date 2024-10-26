{
    const icon = document.getElementById("icon");

    icon.onclick = function() {
        document.body.classList.toggle("dark-theme");
        if(document.body.classList.contains("dark-theme")){
            icon.src = "images/sun.png";
            icon.title = "Switch to light mode";
        }else{
            icon.src = "images/moon.png";
            icon.title = "Switch to dark mode";
        }
    }

    icon.onmouseover = function() {
        if (document.body.classList.contains("dark-theme")) {
            icon.title = "Switch to light mode";
        }else {
            icon.title = "Switch to dark mode";
        }
}
}
    const display = document.querySelector(".display-time");
    let timer = null;
    let startTime = 0;
    let elapasedTime = 0;
    let isRunning = false;

    function start(){

        if(!isRunning) {
            startTime = Date.now() - elapasedTime;
            timer = setInterval(update, 10);
            isRunning = true;
        }

    }

    function stop() {
        if(isRunning){
            clearInterval(timer);
            startTime = Date.now() - elapasedTime;
            isRunning = false;
        }
    }

    function reset() {
        clearInterval(timer);
        startTime = 0;
        elapasedTime = 0;
        isRunning = false;
        display.textContent = "00:00:00:00";
    }

    function update() {
        const currentTime = Date.now();
        elapasedTime = currentTime - startTime;

        let hours = Math.floor(elapasedTime / (1000 * 60 * 60));
        let minutes = Math.floor(elapasedTime / (1000 * 60) % 60 );
        let seconds = Math.floor(elapasedTime / 1000 % 60);
        let milliSeconds = Math.floor(elapasedTime % 1000 / 10);

        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        milliSeconds = String(milliSeconds).padStart(2, "0");

        display.textContent = `${hours}:${minutes}:${seconds}:${milliSeconds}`;
    }