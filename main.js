document.addEventListener("DOMContentLoaded", (event) => {

    let button = document.querySelector(".layout-menu-toggle");
    let icon_bars = document.querySelector(".layout-menu-toggle .fa-bars");
    let icon_xmark = document.querySelector(".layout-menu-toggle .fa-xmark");
    let aside = document.querySelector(".layout-aside");

    button.addEventListener("click", (event) => {

        let visible = document.querySelector(".layout-aside--visible"); 

        if(!visible){
            aside.classList.add("layout-aside--visible");
            icon_bars.style.opacity = 0;
            icon_xmark.style.opacity = 1;
        }else{
            aside.classList.remove("layout-aside--visible");
            icon_bars.style.opacity = 1;
            icon_xmark.style.opacity = 0;
        }

    });

    window.addEventListener("resize", () => {
        let size = parseInt(document.body.clientWidth);

        if(size <= 1280){
            aside.classList.remove("layout-aside--visible");
            icon_bars.style.opacity = 1;
            icon_xmark.style.opacity = 0;
        }
    
    });

});