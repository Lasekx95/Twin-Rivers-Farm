import { setDimensions } from "./particle.js"
import { animate } from "./particle.js"
import { particles } from "./particle.js"

const splashScreen = document.querySelector('.splash_screen');
const splashLeft = document.querySelector('.left');
const splashRight = document.querySelector('.right');
const progressBar = document.querySelector('.progress_bar');
const percentage = document.querySelector('.percentage');

let loading = true;

window.addEventListener('resize', setDimensions);

//setDimensions();
//animate();

function setup(){
    setTimeout(() =>{
        progressBar.style.height = '40%'
    }, 2000)

    setTimeout(() =>{
        progressBar.style.height = '80%'
    }, 4000)

    setTimeout(() =>{
        progressBar.style.height = '100%'
    }, 5000)
    setTimeout(() =>{
        splashLeft.classList.add('active');
        splashRight.classList.add('active');
        progressBar.classList.add('complete');
        splashScreen.classList.add('complete');
        loading = false;       
    }, 6000)
}

function percentageTracker() {
    if(loading){
        let {height, top} = progressBar.getBoundingClientRect();
        let p = Math.ceil((height / window.innerHeight) * 100);
        percentage.textContent = `${p}%`;
        percentage.style.transform = `translateY(calc(${top - window.innerHeight}px))`
        requestAnimationFrame(percentageTracker);
    }
}

setup();
percentageTracker();
setDimensions();
animate();
