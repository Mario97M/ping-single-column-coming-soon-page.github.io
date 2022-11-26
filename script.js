const input = document.querySelector(".email");
const error = document.querySelector(".error-message");
const submit = document.querySelector(".submit");

submit.addEventListener("click", function () {
  const er =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (!er.test(input.value.toLowerCase())) {
    error.style.display = "block";
    input.style.borderColor = "red";
  } else {
    input.style.borderColor = "green";
    error.style.display = "none";
  }

  input.value = "";
});
