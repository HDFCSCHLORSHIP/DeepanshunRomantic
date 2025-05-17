const photos = [
  "photo1.jpeg",
  "photo2.jpeg",
  "photo3.jpeg",
  "photo4.jpeg"
];

let index = 0;
const img = document.getElementById("slideshow-image");

setInterval(() => {
  index = (index + 1) % photos.length;
  img.src = photos[index];
}, 3000); // Change every 3 seconds

// Play music on user interaction (mobile support)
document.addEventListener('click', () => {
  const music = document.getElementById("bg-music");
  if (music && music.paused) {
    music.play();
  }
});
  // After 28 seconds, go to final love letter page
setTimeout(() => {
  window.location.href = "page3.html";
}, 25000);
