
// show loading message
function showLoading() {
    const username = document.getElementById('username').value;
    const loadingTextA = document.getElementById('loading-text-a');
    const loadingTextB = document.getElementById('loading-text-b');
    loadingTextA.textContent = `retrieving film data for ${username}...`;
    loadingTextB.textContent = `(this may take a few minutes)`;
    document.getElementById('loading').style.display = 'block';

    const elementsToHide = document.querySelectorAll('.hide-on-submit');
    elementsToHide.forEach(element => {
        element.style.display = 'none';
    });
    if(!gameLoopRunning) {
        startLoadingGame();
    }
}

// hide loading message initially
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
