import "./index.scss";
import app from "./data"

type MyEvent = Event & {
  target: HTMLInputElement
}

function selectSound(event: MyEvent) {
  event.preventDefault();
  const currentButton = document.querySelector(`#button-${app.selectedId}`);
  const currentSvg = currentButton.querySelector<HTMLImageElement>(".svg");
  const currentItem = app.item.find(item => item.id === app.selectedId);
  const currentBackground = document.querySelector(`#bg-${currentItem.id}`);
  const button = event.target.closest<HTMLButtonElement>(".button");
  const svg = button.querySelector<HTMLImageElement>(".svg");
  const id: number = +button.dataset.id;
  const item = app.item.find(item => item.id === id);
  const background = document.querySelector(`#bg-${item.id}`);

  if (app.selectedId !== id) {
    currentSvg.src = `./assets/icons/${currentItem.icon}`;
    background.classList.add("current");
    currentBackground.classList.remove("current");
    app.selectedId = id;
    app.audio.src = `./assets/sounds/${item.sound}`;
  }
  if (app.audio.paused === true) {
    app.audio.src = `./assets/sounds/${item.sound}`;
    app.audio.play();
    svg.src = "./assets/icons/pause.svg";
  } else {
    app.audio.pause();
    svg.src = `./assets/icons/${item.icon}`;
  }
}

function volumeSound(event: MyEvent) {
  const volume = +event.target.value;
  app.audio.volume = volume / 100;
}

function displayApp() {
  const root = document.querySelector("#app");
  root.innerHTML = `
  <div class="wrapper">
    <h1 class="title">Weather sound</h1>
    <div class="items-list">
    ${app.item
      .map(
        item =>
          `
        <button class="button" id="button-${item.id}" data-id="${item.id}">
          <img src="./assets/${item.bg}" class="background">
          <img src="./assets/icons/${item.icon}" class="svg">
        </button>
        `
      )
      .join("")}
    </div>
    <input type="range" class="input">
    ${app.item.map(item => `<img src="./assets/${item.bg}" class="background" id="bg-${item.id}">`).join("")}
  </div>
  `;
}

function start() {
  displayApp();
  const buttonList = document.querySelectorAll(".button");
  const input = document.querySelector(".input");
  buttonList?.forEach(button => button.addEventListener("click", selectSound));
  input.addEventListener("input", volumeSound);
}

start();
