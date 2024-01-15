export interface Item {
  id: number;
  icon: string;
  sound: string;
  bg: string;
  color: string;
}

export interface App {
  item: Item[];
  selectedId: number;
  audio: HTMLAudioElement;
}

const app: App = {
  item: [
    { id: 1, icon: "sun.svg", sound: "summer.mp3", bg: "summer-bg.jpg", color: "orangered" },
    { id: 2, icon: "cloud-rain.svg", sound: "rain.mp3", bg: "rainy-bg.jpg", color: "plum" },
    { id: 3, icon: "cloud-snow.svg", sound: "winter.mp3", bg: "winter-bg.jpg", color: "darkolivegreen" }
  ],
  selectedId: 1,
  audio: new Audio()
};

export default app;