
function move(){
    const animatedElement1 = document.querySelector('.wave-1');
    const animatedElement2 = document.querySelector('.wave-2');
    const animatedElement3 = document.querySelector('.wave-3');
    animatedElement1.style.animationPlayState = 'running';
    animatedElement2.style.animationPlayState = 'running';
    animatedElement3.style.animationPlayState = 'running';
}
let colors =["black"," rgba(44, 50, 224, 0.5)"];
const container = document.getElementById("rectangleContainer");
const wavecolor = ["rgb(237, 132, 233,0.5)", "rgba(176, 12, 243 ,0.5)", "rgba(44, 50, 224, 0.5)", "rgba(47, 243, 12,0.5)", "rgba(253, 249, 3,0.5)", "rgba(244, 85, 11 ,0.5)", "rgba(234, 35, 35 ,0.5)"];

const colorSlider = document.getElementById("colorRange");
let currentColorIndex = colorRange.value;

colorSlider.addEventListener("input", () => {
    currentColorIndex = colorRange.value;
    updateColor();
    updateWavelength();
});

function createParticle(){
    const particle = document.createElement("div");
    particle.className = "wave-1";
    const color = wavecolor[currentColorIndex];
    particle.style.backgroundColor = color;
    document.getElementById("wave").appendChild(particle);
    particle.addEventListener('animationend', () => {
        particle.remove();
    });
}
setInterval(createParticle,200);

function createParticle1(){
    const particle = document.createElement("div");
    particle.className = "wave-2";
    const color = wavecolor[currentColorIndex];
    particle.style.backgroundColor = color;
    document.getElementById("curve1").appendChild(particle);
    particle.addEventListener('animationend', () => {
        particle.remove();
    });   
}
setInterval(createParticle1, 300);

function createParticle2(){
    const particle = document.createElement("div");
    particle.className = "wave-3";
    const color = wavecolor[currentColorIndex];
    particle.style.backgroundColor = color;
    document.getElementById("curve1").appendChild(particle);
    particle.addEventListener('animationend', () => {
        particle.remove();
    });
}
setInterval(createParticle2, 300);

let n = 15;
for (let i = 0; i < n; i++) {
    const rectangle = document.createElement("div");
    rectangle.classList.add("rectangle");
    rectangle.style.backgroundColor = colors[i % 2];
    container.appendChild(rectangle);
}

function updateColor(){
    const rectangles = document.querySelectorAll(".rectangle");
    rectangles.forEach((rectangle, i) => {
        if(i%2==1){
            rectangle.style.backgroundColor = wavecolor[currentColorIndex];
        }
    });
}

function updateWavelength(){
    const rectangles = document.querySelectorAll(".rectangle");
    let n;
    rectangles.forEach((rectangle, i) => {
        if(currentColorIndex==0)
        {
            rectangle.style.height = "30px";
        }
        else if(currentColorIndex==1)
        {
            rectangle.style.height = "35px";
        }
        else if(currentColorIndex==2)
        {
            rectangle.style.height = "40px";
        }
        else if(currentColorIndex==3)
        {
            rectangle.style.height = "45px";
        }
        else if(currentColorIndex==4)
        {
            rectangle.style.height = "50px";
        }
        else if(currentColorIndex==5)
        {
            rectangle.style.height = "60px";
        }
        else
        {
            rectangle.style.height = "70px";
        }

    })
}
const resizableDiv = document.getElementById('wave');
let isResizing = false;
let startX, startY, startWidth, startHeight;

resizableDiv.addEventListener('mousedown', function(e) {
    isResizing = true;
    startX = e.clientX;
    startY = e.clientY;
    startWidth = parseInt(document.defaultView.getComputedStyle(resizableDiv).width, 10);
    startHeight = parseInt(document.defaultView.getComputedStyle(resizableDiv).height, 10);
    document.addEventListener('mousemove', resize);
    document.addEventListener('mouseup', stopResize);
});

function resize(e)
 {
    if (!isResizing) return;

    const newWidth = startWidth + (e.clientX - startX);
    const newHeight = startHeight + (e.clientY - startY);

    resizableDiv.style.width = newWidth + 'px';
    resizableDiv.style.height = newHeight + 'px';
}

function stopResize() {
    isResizing = false;
    document.removeEventListener('mousemove', resize);
    document.removeEventListener('mouseup', stopResize);
}

const canvas = document.getElementById('sineWaveCanvas');
const context = canvas.getContext('2d');
        
const width = canvas.width;
const height = canvas.height;
        
const amplitude = 70; 
let frequency = 0.07; 
let phase = 0;

context.strokeStyle = 'black';

const dataPoints = [];

        function generateDataPoints() {
            dataPoints.length = 0;
            for (let x = 0; x < width; x++) {
                const y = height / 2 + amplitude * Math.sin(frequency * x + phase);
                dataPoints.push({ x, y });
            }
        }

        function drawSineWave() {
            context.clearRect(0, 0, width, height);

            context.beginPath();
            context.moveTo(dataPoints[0].x, dataPoints[0].y);
            for (let i = 1; i < dataPoints.length; i++) {
                context.lineTo(dataPoints[i].x, dataPoints[i].y);
            }
            context.stroke();

            
            phase += 0.1;
            generateDataPoints();

            
            requestAnimationFrame(drawSineWave);
        }

generateDataPoints();
drawSineWave();










