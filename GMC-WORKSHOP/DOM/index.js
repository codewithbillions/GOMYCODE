const name1 = document.getElementById("name1");
const email = document.getElementById("email1");
const password = document.getElementById("password1");
const passwordRegEx = new RegExp(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/);
const phoneNumber = document.getElementById("phoneNumber1");
const phoneRegEx = new RegExp(/^[0-9]{11}$/);

name1.addEventListener("change", function () {
  if (name1.value.length < 5) {
    alert("the name must be at least 5 characters");
    name1.setAttribute("class", "form-control is-invalid");
  }
});

email.addEventListener("change", function () {
  if (!email.value.includes("@")) {
    alert("this field should be a valid email");
    email.focus();
  }
});

password.addEventListener("change", function () {
  if (!passwordRegEx.test(password.value)) {
    alert("password should contain at least one special character");
    password.setAttribute("class", "form-control is-invalid");
    password.focus();
  }
  if (password.value.length < 8) {
    alert("password should be more than 8 character");
    password.setAttribute("class", "form-control is-invalid");
    password.focus();
  }
});

phoneNumber.addEventListener('change', function () {
    if (phoneNumber.value.length != 11) {
        alert('the phone number should contain 11 digits');
        phoneNumber.setAttribute('class', 'form-control is-invalid');
        phoneNumber.focus();
    }
    if (!phoneRegEx.test(phoneNumber.value)) {
        alert('the phone number should contain only number');
        phoneNumber.setAttribute('class', 'form-control is-invalid');
        phoneNumber.focus();
    }
});