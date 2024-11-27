function onChangeName(event) {
  const nameValue = document.querySelector("#name-input").value;
  document.querySelector("#name-view").textContent = nameValue;
}

function onChangeEmail(event) {
  const emailValue = document.querySelector("#email-input").value;
  document.querySelector("#email-view").textContent = emailValue;
}

function onChangePhone(event) {
  const phoneValue = document.querySelector("#phone-input").value;
  document.querySelector("#phone-view").textContent = phoneValue;
}
