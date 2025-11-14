const form = document.getElementById("visitor-form");
const statusEl = document.getElementById("formStatus");

form.addEventListener("submit", function (e) {
  // e.preventDefault(); // stop for validation only
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

  // Validate mobile
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

  // SUCCESS MESSAGE
  alert("Registration Successful!");

  const messages = [
    "🎉 Registration successful! See you at the Bakery & Food Expo 🍰",
    "✅ You’re in! Get ready for a delicious experience!",
    "🥐 Thanks for registering — can’t wait to meet you at the Expo!",
    "🍩 Sweet! You’ve successfully registered for the Bakery & Food Expo!"
  ];
  const randomMsg = messages[Math.floor(Math.random() * messages.length)];

  statusEl.style.color = "#28a745";
  statusEl.textContent = randomMsg;

  // submit form to FormSubmit AFTER validation
  setTimeout(() => {
    form.submit();  // REAL SUBMISSION happens here
    form.reset();   // Clear fields after sending
  }, 300);
});