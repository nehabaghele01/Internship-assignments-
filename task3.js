function filterVideos(category) {
  let videos = document.querySelectorAll(".video-card");
  videos.forEach(video => {
    if (category === "all" || video.classList.contains(category)) {
      video.style.display = "block";
    } else {
      video.style.display = "none";
    }
  });
}


const videoCards = document.querySelectorAll(".video-card");
const lightbox = document.getElementById("lightbox");
const lightboxVideo = document.getElementById("lightboxVideo");

videoCards.forEach(card => {
  card.addEventListener("click", () => {
    let videoUrl = card.getAttribute("data-video");
    lightboxVideo.src = videoUrl + "?autoplay=1";
    lightbox.style.display = "flex";
  });
});

function closeLightbox() {
  lightbox.style.display = "none";
  lightboxVideo.src = ""; // stop playback
}

// CONTACT FORM 
const contactForm = document.querySelector(".contact form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for contacting us! We'll get back to you soon.");
    contactForm.reset();
  });
}
