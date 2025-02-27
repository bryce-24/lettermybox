let isClicked = false;
let gameLoopRunning = false;
let score = 0;

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
    const orangeCircle = document.getElementById('orangeCircle');
    const greenCircle = document.getElementById('greenCircle');
    const blueCircle = document.getElementById('blueCircle');

    orangeCircle.addEventListener('click', () => {
        score++;
        console.log('orange circle clicked.');
        closeCircle(orangeCircle);
    });
    
    greenCircle.addEventListener('click', () => {
        score++;
        console.log('green circle clicked.');
        closeCircle(greenCircle);
    });
    
    blueCircle.addEventListener('click', () => {
        score++;
        console.log('blue circle clicked.');
        closeCircle(blueCircle);
    });

    function gameLoop() {
        openCircle(orangeCircle);
        openCircle(greenCircle);
        openCircle(blueCircle);
        setTimeout(() => {
            closeCircle(orangeCircle);
            closeCircle(greenCircle);
            closeCircle(blueCircle);
        }, 30000000);
    }
    gameLoopRunning = true;
    gameLoop();
}



function openCircle(circle) {
    circle.style.display = 'block';
}

function closeCircle(circle) {
    circle.style.display = 'none';
}