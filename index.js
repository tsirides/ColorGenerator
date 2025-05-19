const baseURL = "https://www.thecolorapi.com/scheme?";

const colorForm = document.getElementById("color-form");
const colorPicker = document.getElementById("color");
const modePicker = document.getElementById("color-mode");

const hexCodes = document.getElementById("hex-codes");

let pickedColor = "";
let pickedMode = "";

let colorArray = [];

function renderColors() {
  return colorArray.colors.map((item) => {
    return `
        <div class="color-item">
            <div class="color-render" style="background-color:${item.hex.value}"></div>
            <div class="hex-value">${item.hex.value}</div>
        </div>
        `;
  });
}

colorForm.addEventListener("submit", (e) => {
  e.preventDefault();
  pickedColor = colorPicker.value.slice(1);
  pickedMode = modePicker.value;
  getScheme();
});

function getScheme() {
  fetch(`${baseURL}hex=${pickedColor}&mode=${pickedMode}&count=5`)
    .then((res) => res.json())
    .then((data) => {
      colorArray = data;
      hexCodes.innerHTML = renderColors().join("");
    });
}
