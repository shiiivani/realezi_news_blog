// Get references to the form and video sections
const subscribeForm = document.getElementById("subscribeForm");
const videoSection = document.getElementById("video-section");
const secondVideoSection = document.getElementById("second-video-section");

// Handle form submission
subscribeForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Hide the first video section
  videoSection.classList.add("d-none");

  // Show the second video section
  secondVideoSection.classList.remove("d-none");
});

// Get references to the form and video sections
const mobileSubscribeForm = document.getElementById("mobileSubscribeForm");
const mobileVideoSection = document.getElementById("mobile-video-section");
const mobileSecondVideoSection = document.getElementById(
  "mobile-second-video-section"
);

// Handle form submission
mobileSubscribeForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Hide the first video section
  mobileVideoSection.classList.add("d-none");

  // Show the second video section
  mobileSecondVideoSection.classList.remove("d-none");
});
