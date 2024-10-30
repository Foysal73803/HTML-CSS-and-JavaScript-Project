
    const navLinks = document.querySelectorAll(".nav-menu .nav-link");
    const openMenuButton = document.querySelector("#menu-open-button");
    const closeMenuButton = document.querySelector("#menu-close-button");

    openMenuButton.addEventListener("click", () => {
        document.body.classList.toggle("show-mobile-menu");
    });

    closeMenuButton.addEventListener("click", () => openMenuButton.click());

////////
navLinks.forEach(link => {
    link.addEventListener("click", () => openMenuButton.click());
});
//////////

    const wrapper = document.querySelector(".wrapper"),
    wifiIcon = document.querySelector(".content .icon"),
    subtitle = document.querySelector("p");

    window.onload = () => { 
        function ajax() {
            let xhr = new XMLHttpRequest(); 
            xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
            xhr.onload = ()=>{ 

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
        
        function online(){
            wifiIcon.innerHTML = `<i class="bi bi-wifi"></i>`;
            wifiIcon.style.color = "rgb(47, 238, 47)";
            subtitle.innerText = `You are online now`;
            subtitle.style.color = "rgb(47, 238, 47)";
        }

        function offline(){
            wifiIcon.innerHTML = `<i class="bi bi-wifi-off"></i>`;
            wifiIcon.style.color = "red";
            subtitle.innerText = `You are offline now`;
            subtitle.style.color = "red";
        }
 
        setInterval(() =>{
            ajax();
        }, 70);
    
        setTimeout(() => {
            wrapper.classList.add("hide");
        }, 4000)
}
