import profileImage from "../../assets/images/image-jeremy.png";
import { PERIODS_CLASS_NAME } from "../constants";

function Periods() {
  return `
        <div class="${PERIODS_CLASS_NAME}">
            <div id="daily">Daily</div>
            <div id="weekly">Weekly</div>
            <div id="monthly">Monthly</div>
        </div>
    `;
}
export default function ProfileContainer() {
  return `
    <article class="profile-container">
        <div class="profile">
            <img src="${profileImage}" id="profile-image" alt="profile">
            <div>
                <div class="title">Reported for</div>
                <div class="name">Jeremy Robson</div>  
            </div>
        </div>  
        ${Periods()}
    </article>
    `;
}
