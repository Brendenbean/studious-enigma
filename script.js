let images = document.querySelectorAll('.fade-img');
let content = document.querySelector('.content');
let blues = document.querySelector('.blues');
let venue = document.querySelector('.room');
let paraContent = document.querySelector('.yeet');
let classroom = document.querySelector('.classroom');
let currentIndex = 0;





function nextImage() {
    // Remove the active class from the current image
    images[currentIndex].classList.remove('active');

    // Calculate the index for the next image
    currentIndex = (currentIndex + 1) % images.length;

    // Add the active class to the next image
    images[currentIndex].classList.add('active');
}

// Automatically change the image every 3 seconds
setInterval(nextImage, 3000);

venue.addEventListener('click', function(){
    blues.style.display = "block";
    content.style.display = "none";
paraContent.innerHTML = "this would be the layout of the venue";
});

classroom.addEventListener('click', function(){
    blues.style.display = "none";
    content.style.display = "block";
paraContent.innerHTML = "this is the place the venue will be at Regal theater";
});

