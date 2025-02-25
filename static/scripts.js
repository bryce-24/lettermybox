let svgReloadInterval;
let gameLoopRunning = false;

// Function to show the loading message
function showLoading() {
    const username = document.getElementById('username').value;
    const loadingText = document.getElementById('loading-text');
    loadingText.textContent = `Retrieving film data for ${username}...`;
    document.getElementById('loading').style.display = 'block';

    // Hide elements with the class 'hide-on-submit'
    const elementsToHide = document.querySelectorAll('.hide-on-submit');
    elementsToHide.forEach(element => {
        element.style.display = 'none';
    });
    if(!gameLoopRunning) {
        startLoadingGame();
    }
}

// Function to hide the loading message initially
function hideLoading() {
    document.getElementById('loading').style.display = 'none';
}

// Add event listener to the form to show the loading message on submit
document.addEventListener('DOMContentLoaded', function() {
    hideLoading(); // Hide the loading message initially

    const form = document.querySelector('form');
    form.addEventListener('submit', function() {
        showLoading();
    });
});

function startLoadingGame() {
    const svg = document.getElementById('loading-game');
    let score = 0;
    const radius = 20;

    let orangeCircle, greenCircle, blueCircle;

    function UpdateCircle(circle, color) {
        const x = Math.random() * (svg.clientWidth - radius * 2) + radius;
        const y = Math.random() * (svg.clientHeight - radius * 2) + radius;

        if (circle) {
            circle.updatePosition(x, y);
        } else {    
            circle = new Circle(svg, x, y, radius, color);
        }

        return circle;
    }

    function gameLoop() {
        orangeCircle = UpdateCircle(orangeCircle, '#f78204');
        greenCircle = UpdateCircle(greenCircle, '#04e254');
        blueCircle = UpdateCircle(blueCircle, '#43b9ef');

        setTimeout(gameLoop, 5000); // Update circles every second
    }
    gameLoopRunning = true;
    gameLoop();
}

class Circle {
    constructor(svg, x, y, radius, color) {
        this.svg = svg;
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        this.circle.setAttribute('cx', x);
        this.circle.setAttribute('cy', y);
        this.circle.setAttribute('r', radius);
        this.circle.setAttribute('fill', color);
        this.circle.style.cursor = 'pointer';
        this.circle.addEventListener('click', () => {
            this.remove();
        });
        this.svg.appendChild(this.circle);
    }

    updatePosition(x, y) {
        this.x = x;
        this.y = y;
        this.circle.setAttribute('cx', x);
        this.circle.setAttribute('cy', y);
    }

    remove() {
        this.svg.removeChild(this.circle);
    }
}