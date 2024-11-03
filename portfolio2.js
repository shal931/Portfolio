//
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}


// Trigger the file input when the placeholder is clicked
function triggerFileInput() {
    document.getElementById('fileInput').click();
}

// Load and display the uploaded image
function loadImage(event) {
    const file = event.target.files[0];
    const profileImg = document.getElementById('profileImg');

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            profileImg.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}