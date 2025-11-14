const playBtn = document.getElementById("playVideo");
const modal = document.getElementById("videoModal");
const closeBtn = document.getElementById("closeVideo");
const video = document.getElementById("promoVideo");

// Open modal & play video
playBtn.addEventListener("click", () => {
  modal.style.display = "flex";
  video.play();
});

// Close modal & pause video
closeBtn.addEventListener("click", () => {
  video.pause();
  video.currentTime = 0;
  modal.style.display = "none";
});

// Optional: click outside video to close
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    video.pause();
    video.currentTime = 0;
    modal.style.display = "none";
  }
});

 // Visitor registration form validation
const form = document.getElementById("visitor-form");
const statusEl = document.getElementById("formStatus");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let valid = true;

  // Clear old error messages
  document.querySelectorAll(".error").forEach(el => el.textContent = "");

  // Required fields
  const requiredFields = ["firstName", "lastName", "mobile", "email"];
  requiredFields.forEach(id => {
    const field = document.querySelector(`[name="${id}"]`);
    const errorEl = document.getElementById("err-" + id);
    if (field && !field.value.trim()) {
      errorEl.textContent = "This field is required";
      valid = false;
    }
  });

  // Validate email
  const email = document.querySelector("[name=email]").value;
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    document.getElementById("err-email").textContent = "Enter a valid email";
    valid = false;
  }

  // Validate mobile number
  const mobile = document.querySelector("[name=mobile]").value;
  if (!/^[0-9]{10}$/.test(mobile)) {
    document.getElementById("err-mobile").textContent = "Enter 10-digit mobile number";
    valid = false;
  }

  // If validation fails
  if (!valid) {
    statusEl.style.color = "#d33";
    statusEl.textContent = "⚠️ Please correct the highlighted fields before submitting.";
    return;
  }

  // SUCCESS messages
  const messages = [
    "🎉 Registration successful! See you at the Bakery & Food Expo 🍰",
    "✅ You’re in! Get ready for a delicious experience!",
    "🥐 Thanks for registering — can’t wait to meet you at the Expo!",
    "🍩 Sweet! You’ve successfully registered for the Bakery & Food Expo!"
  ];

  const randomMsg = messages[Math.floor(Math.random() * messages.length)];

  // SHOW ALERT
  alert("Registration Successful!");

  // Show animated success message
  statusEl.style.color = "#28a745";
  statusEl.style.opacity = 0;
  statusEl.textContent = randomMsg;
  statusEl.style.transition = "opacity 0.5s ease";
  setTimeout(() => (statusEl.style.opacity = 1), 100);

  // Reset form after 2 seconds
  setTimeout(() => form.reset(), 2000);
});





 document.getElementById("sponsorForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Your sponsorship request has been submitted successfully!");
    // window.location.href = "thankyou.html";
  });


  