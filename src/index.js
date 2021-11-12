// Imports root styles css file.
import "./index.css";
import jsonData from "./assets/data/data.json";
import ProfileContainer from "./components/profile/profile";
import TimeCardsContainer from "./components/timeCard/timeCard";
import { populateTimesData } from "./components/utils";
import { PERIODS_CLASS_NAME } from "./components/constants";

const root = document.getElementById("root");
let period = "daily";

function updateData(period) {
  const timesData = populateTimesData(jsonData, period);
  root.innerHTML = `
    ${ProfileContainer()}
    ${TimeCardsContainer(timesData)}
  `;
}

function selectPeriod(period) {
  document.querySelector(`#${period}`).classList.add("selected");
}

function unselectPeriod(period) {
  document.querySelector(`#${period}`).classList.remove("selected");
}

window.onload = () => {
  const timesData = populateTimesData(jsonData, period);
  root.innerHTML = `
    ${ProfileContainer()}
    ${TimeCardsContainer(timesData)}
  `;
  selectPeriod(period);
};

document
  .querySelector(`.${PERIODS_CLASS_NAME}`)
  .addEventListener("click", (event) => {
    if (!!event.target.innerText) {
      unselectPeriod(period);
      period = event.target.innerText.toLowerCase();
      selectPeriod(period);
      updateData(period);
    }
  });
