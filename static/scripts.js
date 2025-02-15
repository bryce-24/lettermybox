function showLoading() {
    const username = document.getElementById('username').value;
    const loadingText = document.getElementById('loading-text');
    loadingText.textContent = `Retreiving film information for ${username}...`;
    document.getElementById('loading').style.display = 'block';
}

function hideLoading() {
    document.getElementById('loading').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    hideLoading();

    const form = document.querySelector('form');
    form.addEventListener('submit', function() {
        showLoading();
    });
});