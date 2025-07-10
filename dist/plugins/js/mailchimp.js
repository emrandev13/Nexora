
document.getElementById("subs_form").addEventListener("submit", function (e) {
  e.preventDefault(); // Stop form from submitting by default

  const emailInput = document.getElementById("email_input");
  const email = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    alert("Please enter your email.");
    emailInput.focus();
    return;
  }

  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    emailInput.focus();
    return;
  }

  // If valid
  alert("Thanks for subscribing!");
  // You can submit via AJAX or reset the form:
  // this.submit(); // Uncomment to actually submit if needed
  this.reset();
});