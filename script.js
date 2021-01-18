let sauna1 = document.querySelector(`#sauna1`);
let imgAdam = document.querySelector(`#adam`);
imgAdam.textContent = `Adam`;

let imgMarty = document.querySelector(`#marty`);
imgMarty.textContent = `Marty`;

let imgErik = document.querySelector(`#erik`);
imgErik.textContent = `Shorty`;

let imgFredrik = document.querySelector(`#fredrik`);
imgFredrik.textContent = `Hänninen`;

let imgHassel = document.querySelector(`#hassel`);
imgHassel.textContent = `Hassel`;

let imgIman = document.querySelector(`#iman`);
imgIman.textContent = `Iman`;

let imgLauri = document.querySelector(`#lauri`);
imgLauri.textContent = `Lauri`;

let imgMagnus = document.querySelector(`#magnus`);
imgMagnus.textContent = `Magnus`;

let imgMartinS = document.querySelector(`#martins`);
imgMartinS.textContent = `T-Bone`;

let imgRasmus = document.querySelector(`#rasmus`);
imgRasmus.textContent = `Rasmus`;

let uffe = document.querySelector(`#uffe`);

let textDiv = document.querySelector(`#textDiv`);
let allClavistas = document.querySelectorAll(`.allClavistas`);
let allBeer = document.querySelectorAll(`.beer`);
let zIndex = 0;
let uffeClick = 0;

sauna1.addEventListener(`click`, moveImg);

uffe.addEventListener(`click`, () => {
  uffeClick += 1;

  if (uffeClick === 1) {
    alert(`Ska verkligen Uffe basta??`);
    textDiv.textContent = `Ska verkligen Uffe basta?!?`;
  }
});

uffe.addEventListener(`touchmove`, () => {
  alert(`Nu blir Uffe glad och springer ut från bastun!`);
  uffeClick = 0;
  uffe.style.top = ``;
  uffe.style.left = ``;
  textDiv.textContent = `Nu blir Uffe glad och springer ut från bastun!`;
});

uffe.addEventListener(`dblclick`, () => {
  alert(`Nu blir Uffe glad och springer ut från bastun!`);
  uffeClick = 0;
  uffe.style.top = ``;
  uffe.style.left = ``;
  textDiv.textContent = `Nu blir Uffe glad och springer ut från bastun!`;
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
      textDiv.textContent = `Skååål!`;
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
      console.dir(clavista);

      clavista.style.top = `${e.offsetY - 50}px`;
      clavista.style.left = `${e.offsetX - 50}px`;
      zIndex += 1;
      clavista.style.zIndex = zIndex;

      if (clavista.id === `rasmus`) {
        textDiv.textContent = `Hello Rasmus, trevligt sällskap!`;
      } else if (clavista.id === `martins`) {
        textDiv.textContent = `Du värmer en alltid T-Bone!`;
      } else if (clavista.id === `magnus`) {
        textDiv.textContent = `Härligt att ha dig i Saunan Magnus!`;
      } else if (clavista.id === `lauri`) {
        textDiv.textContent = `Lauri!! Underbart med lite sisu!`;
      } else if (clavista.id === `iman`) {
        textDiv.textContent = `Gött och varmt i Saunan Iman!`;
      } else if (clavista.id === `hassel`) {
        textDiv.textContent = `Välkommen in i den underbara bastuvärmen Hassel!`;
      } else if (clavista.id === `fredrik`) {
        textDiv.textContent = `Gött att ha Hänninen på plats! Det värmer!`;
      } else if (clavista.id === `erik`) {
        textDiv.textContent = `Erik tar plats, äntligen! Myspys!`;
      } else if (clavista.id === `marty`) {
        textDiv.textContent = `Marty in da Sauna`;
      } else if (clavista.id === `adam`) {
        textDiv.textContent = `Sist men inte minst, Adam tar plats, välkommen!`;
      }
    });
  }

  for (let clavista of allClavistas) {
    clavista.addEventListener(`touchmove`, function () {
      clavista.style.top = ``;
      clavista.style.left = ``;
      textDiv.textContent = `Hejdå ${clavista.textContent}!`;
    });
  }

  for (let clavista of allClavistas) {
    clavista.addEventListener(`dblclick`, function () {
      clavista.style.top = ``;
      clavista.style.left = ``;
      textDiv.textContent = `Hejdå ${clavista.textContent}!`;
    });
  }
}
