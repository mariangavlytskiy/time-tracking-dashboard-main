import "./assets/css/root.css";
import "./assets/css/styles.css";
import jsonData from "./assets/data/data.json";

import profileImage from "./assets/images/image-jeremy.png";
import workIcon from "./assets/images/icon-work.svg";
import playIcon from "./assets/images/icon-play.svg";
import studyIcon from "./assets/images/icon-study.svg";
import exerciseIcon from "./assets/images/icon-exercise.svg";
import selfCareIcon from "./assets/images/icon-self-care.svg";
import socialIcon from "./assets/images/icon-social.svg";

let period = "daily";

function toClassName(title) {
  return title.toLowerCase().split(" ").join("-");
}

function selectPeriod() {
  document.querySelector(`#${period}`).classList.add("selected");
}

function handleOnPeriodClick() {
  document.querySelector(".periods").addEventListener("click", (event) => {
    if (!!event.target.innerText) {
      document.querySelector(`#${period}`).classList.remove("selected");
      period = event.target.innerText.toLowerCase();
      selectPeriod();
      if (jsonData) {
        jsonData.forEach(({ title, timeframes }) => {
          fillInfo(toClassName(title), timeframes);
        });
      }
    }
  });
}

function fillInfo(className, timeframeValues) {
  const { current, previous } = timeframeValues[period];
  const info = document.querySelector(`.${className}`);
  if (info) {
    const timeDiv = info.getElementsByClassName("time");
    timeDiv[0].innerText = `${current}hrs`;
    const previousDiv = info.getElementsByClassName("previous");
    previousDiv[0].innerText = previousTextByPeriod(period, previous);
  }
}

window.onload = () => {
  jsonData.forEach(({ title, timeframes }) => {
    fillInfo(toClassName(title), timeframes);
  });
};

function init() {
  handleOnPeriodClick();
  selectPeriod();
  const profileImgElement = document.querySelector("#profile-image");
  profileImgElement.src = profileImage;
  document.querySelector(".work img").src = workIcon;
  document.querySelector(".play img").src = playIcon;
  document.querySelector(".study img").src = studyIcon;
  document.querySelector(".exercise img").src = exerciseIcon;
  document.querySelector(".social img").src = socialIcon;
  document.querySelector(".self-care img").src = selfCareIcon;
}

init();
