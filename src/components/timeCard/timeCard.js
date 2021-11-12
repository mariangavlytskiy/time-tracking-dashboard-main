import ellipsisIcon from "../../assets/images/icon-ellipsis.svg";

export function TimeCard({
  title,
  iconSrc,
  iconAlt,
  className,
  current,
  previous,
}) {
  return `
    <div class="card ${className}">
        <img src="${iconSrc}" alt="${iconAlt}">
        <div class="info">
          <header>
            <h4>${title}</h4>
            <img src="${ellipsisIcon}" alt="ellipsis">
          </header>
          <div class="time-info">
            <div class="time">${current}</div>
            <div class="previous">${previous}</div>
          </div>
        </div>
    </div>
    `;
}

export default function TimeCardsContainer(timesInfo) {
  if (!timesInfo) {
    return "";
  }
  return timesInfo.map((item) => TimeCard(item)).join("\n");
}
