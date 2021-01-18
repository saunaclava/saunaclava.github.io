let sauna1 = document.querySelector(`#sauna1`)
let imgAdam = document.querySelector(`#adam`);

console.log(adam);

sauna1.addEventListener(`click`, moveImg);

function moveImg(e) {
  adam.style.top = `${e.clientY -150}px`;
  adam.style.left = `${e.clientX -50}px`;
  console.log(e);
}
