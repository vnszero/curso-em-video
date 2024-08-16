let btn1 = document.getElementById("btn1"),
  btn2 = document.getElementById("btn2");
let hex1 = document.querySelector("#hex1"),
  hex2 = document.querySelector("#hex2");
let gradient = document.querySelector(".gradient");
let newColour1 = "#01ECD2",
  newColour2 = "#018CE9";

var generar = function () {
  newColour = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
  console.log(newColour.length);
  if (newColour.length < 7) {
    generar();
  }
};

btn1.addEventListener("click", (e) => {
  generar();
  hex1.innerHTML = newColour.toUpperCase();
  newColour1 = newColour.toUpperCase();
  btn1.style.background = newColour;
  gradient.style.setProperty(
    "background",
    `linear-gradient(135deg, ${newColour1},  ${newColour2}`
  );
});

btn2.addEventListener("click", (e) => {
  generar();
  hex2.innerHTML = newColour.toUpperCase();
  newColour2 = newColour.toUpperCase();
  btn2.style.background = newColour;
  gradient.style.setProperty(
    "background",
    `linear-gradient( 135deg, ${newColour1},  ${newColour2}`
  );
});

let copiar = document.querySelector(".copiar");

copiar.addEventListener("click", (e) => {
  var contenido = `background: linear-gradient(135deg, ${newColour1}, ${newColour2});`;
  navigator.clipboard.writeText(contenido);
});
