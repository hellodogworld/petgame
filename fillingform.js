

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstName = form.elements["first-name"].value;
  const lastName = form.elements["last-name"].value;
  const email = form.elements["email"].value;

  let errorMessage = "";

  if (firstName.trim() === "") {
    errorMessage += "Please enter a first name.\n";
  }

  if (lastName.trim() === "") {
    errorMessage += "Please enter a last name.\n";
  }

  if (email.trim() === "") {
    errorMessage += "Please enter an email.\n";
  } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    errorMessage += "Please enter a valid email.\n";
  }

  if (errorMessage) {
    alert(errorMessage);
  } else {
    form.submit();
  }
});
<form id="email-form">
</form>



