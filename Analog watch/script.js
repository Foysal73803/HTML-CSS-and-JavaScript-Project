// get references to DOM elements
const body = document.querySelector("body"),
    hourHand = document.querySelector(".hour"),
    minuteHand = document.querySelector(".minute"),
    secondHand = document.querySelector(".second"),
    modeSwith = document.querySelector(".mode-switch");

    //check if the mode is already set to "dark Mode" in localStorage
    if(localStorage.getItem("mode") === "Dark Mode"){
        // add "dark" class to body and set modeSwith text to "Light Mode"
        body.classList.add("dark");
        modeSwith.textContent = "Light Mode";
    }

    //add a click event listener to modeSwith
    modeSwith.addEventListener("click", () => {
        //toggle the "dark" class on the body element
        body.classList.toggle("dark");
        //check if the "dark" class is currently present on the body element
        const isDarkMode = body.classList.contains("dark");
        // set modeSwith text based on "dark" class presence
        modeSwith.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
        // set localStoroage "mode" item based on "dark" class presence
        localStorage.setItem("mode", isDarkMode ? "Dark Mode": "Light Mode");
    });

    const updateTime = () =>{
        // get current time and calculate degress for clock hands
        let date = new Date(),
            secToDeg = (date.getSeconds() / 60) * 360,
            minToDeg = (date.getMinutes() / 60) * 360,
            hrToDeg = (date.getHours() / 60) * 360;

        // Rotate the clock hands to the appropriate degree beased on the current time
        secondHand.style.transform = `rotate(${secToDeg}deg)`;
        minuteHand.style.transform = `rotate(${minToDeg}deg)`;
        hourHand.style.transform = `rotate(${hrToDeg}deg)`;
    };

// call updateTime to set clock hands every second
setInterval(updateTime, 1000);

// call updateTime function on page land 
updateTime();