
 document.getElementById("sponsorForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Your sponsorship request has been submitted successfully!");
    // window.location.href = "thankyou.html";
  });
// Visitor registration form validation
const form = document.getElementById("visitorRegisterForm");
const statusEl = document.getElementById("formStatus");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let valid = true;

  // Clear previous errors
  document.querySelectorAll(".error").forEach(el => el.textContent = "");

  const fields = ["firstName", "lastName", "mobile", "email"];
  fields.forEach(id => {
    const field = document.getElementById(id);
    if (!field.value.trim()) {
      document.getElementById("err-" + id).textContent = "This field is required";
      valid = false;
    }
  });

  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    document.getElementById("err-email").textContent = "Enter a valid email";
    valid = false;
  }

  if (!/^[0-9]{10}$/.test(mobile)) {
    document.getElementById("err-mobile").textContent = "Enter 10-digit mobile number";
    valid = false;
  }

  if (!valid) {
    statusEl.style.color = "#d33";
    statusEl.textContent = "⚠️ Please correct the highlighted fields before submitting.";
    return;
  }

  // Attractive random success messages
  const messages = [
    "🎉 Registration successful! See you at the Bakery & Food Expo 🍰",
    "✅ You’re in! Get ready for a delicious experience!",
    "🥐 Thanks for registering — can’t wait to meet you at the Expo!",
    "🍩 Sweet! You’ve successfully registered for the Bakery & Food Expo!"
  ];

  const randomMsg = messages[Math.floor(Math.random() * messages.length)];

  // Show animated success message
  statusEl.style.color = "#28a745";
  statusEl.style.opacity = 0;
  statusEl.textContent = randomMsg;
  statusEl.style.transition = "opacity 0.5s ease";
  setTimeout(() => (statusEl.style.opacity = 1), 100);

  // Reset form smoothly after 2 seconds
  setTimeout(() => form.reset(), 2000);
});
  document.getElementById("visitorRegisterForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("🎉 Thank you for registering as an exhibitor! Our team will contact you shortly.");
    // window.location.href = "thankyou.html";
  });
document.getElementById('playVideo').addEventListener('click', () => {
  alert("Play video or open modal here!");
});


const scrollBtn = document.getElementById("scrollTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });


  