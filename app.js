// @@@@@@@@@@@@@@@@@@@@@@@@@  preloader  @@@@@@@@@@@@@@@@@@@@@@@@@

// ----------------------------P1----------------------------

/* get "p" tag in this file */
let motion = document.getElementById("motion");

/* make this "p" tag string to array by using "split" also get all letter seperately. Useing map array ittreation for itterate those all letter sepereatly. and when map function go throw those letter one function will be excuate all time and remove "comma" by using "join" also make "string"*/
motion.innerHTML = motion.innerHTML.split("").map((val,ind)=> 
    `<span style="transform: rotate(${ind*9.8}deg)"> ${val} </span>`
).join("");

// ----------------------------P1----------------------------






// ----------------------------P2----------------------------

let preloader = document.getElementById("preloader");
window.addEventListener("load",()=>{
    setTimeout(() => {
        preloader.style.display = "none";
    }, 2000);
});

// ----------------------------P2----------------------------



// @@@@@@@@@@@@@@@@@@@@@@@@@  preloader  @@@@@@@@@@@@@@@@@@@@@@@@@

