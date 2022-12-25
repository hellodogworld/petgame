const form = document.getElementById("contact-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Validate form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const errorMessage = document.getElementById("error-message");

  if (!name || !email) {
    errorMessage.textContent = "Please fill out all fields.";
    return;
  }

  // Validate email
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  if (!emailRegex.test(email)) {
    errorMessage.textContent = "Please enter a valid email address.";
    return;
  }

  // Clear error message
  errorMessage.textContent = "";

  // Form is valid, do something with the form data (e.g. send an email)
});

