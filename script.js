document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('newsletterPopup');
    const closeBtn = document.querySelector('.close');

 
    setTimeout(() => {
        popup.style.display = 'block';
    }, 2000); 

    closeBtn.onclick = function() {
        popup.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const subscribeBtn = document.getElementById('subscribeBtn');
    const popup = document.getElementById('newsletterPopup');
    const closeBtn = document.querySelector('.close');

    subscribeBtn.onclick = function() {
        popup.style.display = 'block';
    }

    closeBtn.onclick = function() {
        popup.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    }
});
