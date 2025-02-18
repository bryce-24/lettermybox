let svgReloadInterval;

// Function to show the loading message
function showLoading() {
    const username = document.getElementById('username').value;
    const loadingText = document.getElementById('loading-text');
    loadingText.textContent = `Retrieving film information for ${username}...`;
    document.getElementById('loading').style.display = 'block';

    // Hide elements with the class 'hide-on-submit'
    const elementsToHide = document.querySelectorAll('.hide-on-submit');
    elementsToHide.forEach(element => {
        element.style.display = 'none';
    });

    // Start reloading the SVG every 7 seconds
    svgReloadInterval = setInterval(reloadSVG, 7000);
    reloadSVG(); // Initial call to start the animation immediately
}

// Function to hide the loading message initially
function hideLoading() {
    document.getElementById('loading').style.display = 'none';

    // Clear the interval to stop reloading the SVG
    clearInterval(svgReloadInterval);
}

function reloadSVG() {
    const svgObject = document.querySelector('#loading object');
    const svgData = svgObject.getAttribute('data');
    svgObject.setAttribute('data', ''); // Remove the data attribute to force reload
    setTimeout(() => {
        svgObject.setAttribute('data', svgData); // Re-assign the data attribute
    }, 50); // Slight delay to ensure the SVG reloads
}

// Add event listener to the form to show the loading message on submit
document.addEventListener('DOMContentLoaded', function() {
    hideLoading(); // Hide the loading message initially

    const form = document.querySelector('form');
    form.addEventListener('submit', function() {
        showLoading();
    });
});