

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
    const orangeCircle = document.getElementById('orange-circle');
    const greenCircle = document.getElementById('green-circle');
    const blueCircle = document.getElementById('blue-circle');
    let score = 0;
}