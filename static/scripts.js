let svgReloadInterval;

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

    startLoadingGame();
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
    const svg = document.getElementById('loading-game')
    let score = 0;

    function createCircle() {
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        const radius = 10;
        const x = Math.random() * (svg.clientWidth - radius * 2) + radius;
        const y = Math.random() * (svg.clientHeight - radius * 2) + radius;
        circle.setAttribute('cx', x);
        circle.setAttribute('cy', y);
        circle.setAttribute('r', radius);
        circle.setAttribute('fill', 'black');
        circle.style.cursor = 'pointer';
        circle.addEventListener('click', function() {
            score++;
            svg.removeChild(circle);
        });
        svg.appendChild(circle);

        setTimeout(() => {
            if (svg.contains(circle)) {
                svg.removeChild(circle);
            }
        }, 2000);
    }

    function gameLoop() {
        createCircle();
        setTimeout(gameLoop, 1000);
    }
    gameLoop();
}