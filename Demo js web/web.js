{
let icon = document.getElementById("icon"); 

    icon.onclick = function(){
        document.body.classList.toggle("dark-theme");
        if(document.body.classList.contains("dark-theme")){
            icon.src = "images/sun.png";
        }else{
            icon.src = "images/moon.png";
        }
    }
}

{
    const header = document.querySelector("header");
const menuBtn = document.querySelector("#menu-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", () => {
    header.classList.toggle("show-mobile-menu");
});

closeMenuBtn.addEventListener("click", () => {    
    menuBtn.click();
});
}

{
    const swiper = new Swiper('.slider-wrapper', {
        loop: true,
        grabCursor: true,
        spaceBetween: 30,
        
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true,
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        // Responsive breakpoints
        breakPoints: {
            0: {
                slidesPerView: 1
            },
            620: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 3
            }
        }
});
}

{
    const wrapper = document.querySelector(".wrapper"),
    toast = wrapper.querySelector(".toast"),
    wifiIcon = wrapper.querySelector(".icon"),
    title = wrapper.querySelector("span"),
    subTitle = wrapper.querySelector("p"),
    closeIcon = document.querySelector(".close-icon");

    window.onload = () => {
        function ajax(){
            let xhr = new XMLHttpRequest();
            xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
            xhr.onload = () =>{
                if(xhr.status == 200 & xhr.status < 300){
                    online();
                }else{
                    offline();
                }
            }
            xhr.onerror = ()=>{
                offline();
            }
                xhr.send();
            }

            function online() {
                toast.classList.remove("offline");
                title.innerText = "Internet is connected";
                subTitle.innerText = "You're online now";
                wifiIcon.innerHTML = '<i class="uil uil-wifi"></i>';  
            }

            function offline() {
                wrapper.classList.remove("hide");
                toast.classList.add("offline");
                title.innerText = "Internet is disconnected";
                subTitle.innerText = "You're offline now";
                wifiIcon.innerHTML = `<i class="uil uis-wifi-slash"></i>`;
            }

            closeIcon.onclick= () =>{
                wrapper.classList.add("hide");
            }

            setInterval(() => {
                ajax();
            }, 70);

        setTimeout(() => {
            wrapper.classList.add("hide");
        }, 5000);
    }
}
