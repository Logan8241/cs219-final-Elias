const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");

  clearErrors();

  // Name Validation
  if (name.value.trim() === "") {
    showError(name, "Name is required");
    isValid = false;
  }

  // Email Validation
  if (email.value.trim() === "") {
    showError(email, "Email is required");
    isValid = false;
  } else if (!validateEmail(email.value)) {
    showError(email, "Enter a valid email");
    isValid = false;
  }

  // Subject Validation
  if (subject.value.trim() === "") {
    showError(subject, "Subject is required");
    isValid = false;
  }

  // Message Validation
  if (message.value.trim() === "") {
    showError(message, "Message cannot be empty");
    isValid = false;
  }

  // Success
  if (isValid) {
    document.getElementById("successMessage").textContent =
      "Message sent successfully!";

    form.reset();
  }
});

function showError(input, message) {
  const formGroup = input.parentElement;
  const error = formGroup.querySelector(".error");

  error.textContent = message;
}

function clearErrors() {
  const errors = document.querySelectorAll(".error");

  errors.forEach(error => {
    error.textContent = "";
  });

  document.getElementById("successMessage").textContent = "";
}

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}