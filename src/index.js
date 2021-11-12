// Imports root styles css file.
import "./index.css";
import jsonData from "./assets/data/data.json";
import ProfileContainer from "./components/profile/profile";
import TimeCardsContainer from "./components/timeCard/timeCard";
import { populateTimesData } from "./components/utils";
import { PERIODS_CLASS_NAME } from "./components/constants";

const root = document.getElementById("root");
let period = "daily";
const timesData = populateTimesData(jsonData, period);

function updateData(period) {
  const timesData = populateTimesData(jsonData, period);
  timesData.forEach(({ className, current, previous }) => {
    const cardElem = root.getElementsByClassName(className)[0];
    const currentElem = cardElem.getElementsByClassName("time")[0];
    const previousElem = cardElem.getElementsByClassName("previous")[0];
    currentElem.innerHTML = current;
    previousElem.innerHTML = previous;
  });
}

function selectPeriod(period) {
  document.querySelector(`#${period}`).classList.add("selected");
}

function unselectPeriod(period) {
  document.querySelector(`#${period}`).classList.remove("selected");
}

window.onload = () => {
  root.innerHTML = `
    ${ProfileContainer()}
    ${TimeCardsContainer(timesData)}
  `;

  selectPeriod(period);
  root
    .querySelector(`.${PERIODS_CLASS_NAME}`)
    .addEventListener("click", (event) => {
      if (!!event.target.innerText) {
        unselectPeriod(period);
        period = event.target.innerText.toLowerCase();
        updateData(period);
        selectPeriod(period);
      }
    });
};
