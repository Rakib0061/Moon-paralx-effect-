// @@@@@@@@@@@@@@@@@@@@@@@@@  preloader  @@@@@@@@@@@@@@@@@@@@@@@@@

// ----------------------------preloader animation----------------------------

/* get "p" tag in this file */
let motion = document.getElementById("motion");

/* make this "p" tag string to array by using "split" also get all letter seperately. Useing map array ittreation for itterate those all letter sepereatly. and when map function go throw those letter one function will be excuate all time and remove "comma" by using "join" also make "string"*/
motion.innerHTML = motion.innerHTML.split("").map((val,ind)=> 
    `<span style="transform: rotate(${ind*9.8}deg)"> ${val} </span>`
).join("");

// ----------------------------preloader animation----------------------------






// ----------------------------load event----------------------------

let preloader = document.getElementById("preloader");
window.addEventListener("load",()=>{
    setTimeout(() => {
        preloader.style.display = "none";
        document.body.style.overflowY = "scroll";
    }, 1000);
});

// ----------------------------load event----------------------------






// ----------------------------on refresh scroll top----------------------------

if(history.scrollRestoration){
    history.scrollRestoration = "manual";
}
else{    
    window.scrollTo(0,0);
}

// ----------------------------on refresh scroll top----------------------------

// @@@@@@@@@@@@@@@@@@@@@@@@@  preloader  @@@@@@@@@@@@@@@@@@@@@@@@@





// @@@@@@@@@@@@@@@@@@@@@@@@@  Sticky navbar  @@@@@@@@@@@@@@@@@@@@@@@@@

let navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{
    let Y = window.scrollY;
    navbar.classList.toggle("sticky",Y > 0);
});

// @@@@@@@@@@@@@@@@@@@@@@@@@  Sticky navbar  @@@@@@@@@@@@@@@@@@@@@@@@@





// @@@@@@@@@@@@@@@@@@@@@@@@@  dark mode  @@@@@@@@@@@@@@@@@@@@@@@@@

let dark_input = document.getElementById("dark_mode");

dark_input.addEventListener("click",()=>{
    document.body.classList.toggle("dark_theme");
});

// @@@@@@@@@@@@@@@@@@@@@@@@@  dark mode  @@@@@@@@@@@@@@@@@@@@@@@@@





// @@@@@@@@@@@@@@@@@@@@@@@@@  parallax effect  @@@@@@@@@@@@@@@@@@@@@@@@@

let star = document.getElementById("star");
let moon = document.getElementById("moon");
let mountain = document.getElementById("mountain");

window.addEventListener("scroll",()=>{
    let Y = window.scrollY;

    let star_p = Y * 0.2;
    let moon_p = Y * 0.4;
    let mountain_p = Y * 0.09;

    star.style.transform = `translateX(${star_p}px)`;
    moon.style.transform = `translateY(${moon_p}px)`;
    mountain.style.transform = `translateY(${mountain_p}px)`;
});

// @@@@@@@@@@@@@@@@@@@@@@@@@  parallax effect  @@@@@@@@@@@@@@@@@@@@@@@@@




let clock = document.getElementById("clock");

setInterval(() => {
    let time = new Date().toLocaleTimeString();
    clock.innerHTML = time;
}, 1000);