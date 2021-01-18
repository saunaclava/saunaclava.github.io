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

let uffe = document.querySelector(`#uffe`);

let allClavistas = document.querySelectorAll(`.allClavistas`);
let allBeer = document.querySelectorAll(`.beer`);
let zIndex = 0;
let uffeClick = 0;

sauna1.addEventListener(`click`, moveImg);

uffe.addEventListener(`click`, () => {
  uffeClick += 1;

  if (uffeClick === 1) {
    alert(`Ska verkligen Uffe basta??`);
  }
});

uffe.addEventListener(`touchmove`, () => {
  alert(`Nu blir Uffe glad och springer ut från bastun!`);
  uffeClick = 0;
  uffe.style.top = ``;
  uffe.style.left = ``;
});

uffe.addEventListener(`dblclick`, () => {
  alert(`Nu blir Uffe glad och springer ut från bastun!`);
  uffeClick = 0;
  uffe.style.top = ``;
  uffe.style.left = ``;
});

function moveImg(e) {
  e.preventDefault();

  uffe.addEventListener(`click`, () => {
    uffe.style.top = `${e.offsetY - 50}px`;
    uffe.style.left = `${e.offsetX - 50}px`;
    zIndex += 1;
    uffe.style.zIndex = zIndex;
  });

  for (let beer of allBeer) {
    beer.addEventListener(`click`, function () {
      beer.style.top = `${e.offsetY + 15}px`;
      beer.style.left = `${e.offsetX - 285}px`;
      zIndex += 1;
      beer.style.zIndex = zIndex;
    });
  }

  for (let beer of allBeer) {
    beer.addEventListener(`touchmove`, function () {
      beer.style.top = ``;
      beer.style.left = ``;
    });
  }

  for (let beer of allBeer) {
    beer.addEventListener(`dblclick`, function () {
      beer.style.top = ``;
      beer.style.left = ``;
    });
  }

  for (let clavista of allClavistas) {
    clavista.addEventListener(`click`, function () {
      clavista.style.top = `${e.offsetY - 50}px`;
      clavista.style.left = `${e.offsetX - 50}px`;
      zIndex += 1;
      clavista.style.zIndex = zIndex;
    });
  }

  for (let clavista of allClavistas) {
    clavista.addEventListener(`touchmove`, function () {
      clavista.style.top = ``;
      clavista.style.left = ``;
    });
  }

  for (let clavista of allClavistas) {
    clavista.addEventListener(`dblclick`, function () {
      clavista.style.top = ``;
      clavista.style.left = ``;
    });
  }
}
