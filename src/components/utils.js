import workIcon from "../assets/images/icon-work.svg";
import playIcon from "../assets/images/icon-play.svg";
import studyIcon from "../assets/images/icon-study.svg";
import exerciseIcon from "../assets/images/icon-exercise.svg";
import selfCareIcon from "../assets/images/icon-self-care.svg";
import socialIcon from "../assets/images/icon-social.svg";

export function cardIconByClassName(title) {
  switch (title) {
    case "work":
      return workIcon;
    case "play":
      return playIcon;
    case "study":
      return studyIcon;
    case "exercise":
      return exerciseIcon;
    case "social":
      return socialIcon;
    case "self-care":
      return selfCareIcon;
  }
}
export function previousTextByPeriod(period, value) {
  let firstPart;
  switch (period) {
    case "monthly":
      firstPart = "Last Month";
      break;
    case "weekly":
      firstPart = "Last Week";
      break;
    case "daily":
    default:
      firstPart = "Yesterday";
      break;
  }
  return `${firstPart} - ${value}hrs`;
}

export function titleToClassName(title) {
  return title.toLowerCase().split(" ").join("-");
}

export function populateTimesData(data, period) {
  return data.map(({ title, timeframes }) => {
    const cardClassName = titleToClassName(title);
    const { current, previous } = timeframes[period];
    return {
      title,
      className: cardClassName,
      iconSrc: cardIconByClassName(cardClassName),
      iconAlt: cardClassName,
      current: `${current}hrs`,
      previous: previousTextByPeriod(period, previous),
    };
  });
}
