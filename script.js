let sauna1 = document.querySelector(`#sauna1`);
let imgAdam = document.querySelector(`#adam`);
let imgMarty = document.querySelector(`#marty`);
let imgErik = document.querySelector(`#erik`);
let imgFredrik = document.querySelector(`#fredrik`);
let imgHassel = document.querySelector(`#hassel`);
let imgIman = document.querySelector(`#iman`);
let imgLauri = document.querySelector(`#lauri`);
let imgMagnus = document.querySelector(`#magnus`);
let imgMartinS = document.querySelector(`#martins`);
let imgRasmus = document.querySelector(`#rasmus`);

let allClavistas = document.querySelectorAll(`.allClavistas`);

console.log(adam);

// ["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
//   dropArea.addEventListener(eventName, preventDefaults, false);
// });

// function preventDefaults(e) {
//   e.preventDefault();
//   e.stopPropagation();
// }

sauna1.addEventListener(`click`, moveImg);
let Y = 0;
let X = 0;

function moveImg(e) {
  e.preventDefault();

  Y = e.clientY;
  X = e.clientX;
  
  console.log(Y, X);

  for (let clavista of allClavistas) {

    clavista.addEventListener(`click`, function () {
      clavista.style.top = `${e.clientY +30}px`;
      clavista.style.left = `${e.clientX - 50}px`;

    });
  }
}

// moveImg();
