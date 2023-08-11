const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let particles = [];
let randomMaxSpeed = 2;


class Particle {
    constructor() {
        this.reset();
        this.speedY = Math.random() > 0.5 ? (Math.random() * randomMaxSpeed) * -1 : Math.random() * randomMaxSpeed;
        this.speedX = Math.random() > 0.5 ? (Math.random() * randomMaxSpeed) * -1 : Math.random() * randomMaxSpeed;
    }

    reset() {
        this.coordinates = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
        };
    }

    move() {
        if (this.coordinates.x >= canvas.width || this.coordinates.x <= 0) {
            this.speedX = -this.speedX;
        }
        if (this.coordinates.y >= canvas.height || this.coordinates.y <= 0) {
            this.speedY = -this.speedY;
        }
    
        for (let i = 0; i < particles.length; i++) {
            let { x, y } = this.coordinates;
            if (Math.abs(x - particles[i].coordinates.x) <= 200 && Math.abs(y - particles[i].coordinates.y) <= 200) {
                ctx.strokeStyle = '#03c0ff25';
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(particles[i].coordinates.x, particles[i].coordinates.y);

                
                ctx.stroke();
            }
        }
        this.coordinates.x += this.speedX;
        this.coordinates.y += this.speedY;
    }
    
}

function setDimensions() {
    particles = [];
    canvas.width = window.innerWidth * window.devicePixelRatio;
    canvas.height = window.innerHeight * window.devicePixelRatio;

    // CSS to make the canvas cover the entire viewport
    canvas.style.width = '100%';
    canvas.style.height = '100%';

    let w = window.innerWidth;
    let h = window.innerHeight;

    // Adjust particle count based on screen dimensions
    let particleTotal = w > h ? (w > 1000 ? 150 : 150) : (h > 1000 ? 250 : 250);
    
    if(canvas.width > 500 && canvas.height > 1000){
        ctx.lineWidth = 3; 
    } else {
        ctx.lineWidth = 1;
    }

    for (let i = 0; i < particleTotal; i++) {
        let particle = new Particle();
        particles.push(particle);
    }
}


// Call setDimensions when the window is resized
window.addEventListener('resize', setDimensions);

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particles.length; i++) {
        let { x, y } = particles[i].coordinates;
        particles[i].move();
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, 2 * Math.PI);
        ctx.stroke();
    }
    requestAnimationFrame(animate);
}

export {
    setDimensions,
    animate,
    particles
}
