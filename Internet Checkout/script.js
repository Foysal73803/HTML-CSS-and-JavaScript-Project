//////Selecting all required elementes
const wrapper = document.querySelector(".wrapper"),
toast = document.querySelector(".toast"),
wifiIcon = document.querySelector(".icon"),
title = document.querySelector("span"),
subTitle = document.querySelector("p"),
closeIcon = document.querySelector(".close-icon");

window.onload = () => {  //one window loaded
    function ajax() {
        let xhr = new XMLHttpRequest(); // creating new xml object
        xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true); //sending get request to his URL
        xhr.onload = ()=>{ //one ajax loaded
            //
            if(xhr.status == 200 && xhr.status < 300){
               online();
            } else{
                offline();
            } 
        }
        xhr.onerror = () =>{
            offline();
        }
        xhr.send();
    }

    function online() {
        toast.classList.remove("offline");
        title.innerText = "You're online now";
        subTitle.innerText = "Hurray!! Internet is connected";
        wifiIcon.innerHTML = '<i class="uil uil-wifi"></i>';
    }

    function offline() {
        wrapper.classList.remove("hide");
        toast.classList.add("offline");
        title.innerText = "You're offline now";
        subTitle.innerText = "opps! Internet is disconnected";
        wifiIcon.innerHTML = '<i class="uil uil-wifi-slash"></i>'
    }

    closeIcon.onclick = () =>{
        wrapper.classList.add("hide");
    }

    setInterval(() =>{
        ajax();
    }, 70);

    setTimeout(() => {
        wrapper.classList.add("hide");
    }, 5000)
}
