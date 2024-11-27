function onChangeInput(event) {
  const inputId = `#${event.target.id}`;
  const viewId = inputId.replace("-input", "-view");
  const inputValue = document.querySelector(inputId).value;
  document.querySelector(viewId).textContent = inputValue;
}
