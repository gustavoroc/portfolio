import toggle from "./toggle.js";

const setFeedBackMessage = (message) => {
  toggle(".feedback-container").innerHTML = `
    <span>${message}</span>
    <ion-icon name="checkmark-circle"></ion-icon>
  `;
  setTimeout(() => {
    toggle(".feedback-container");
  }, 2500);
};

export default setFeedBackMessage;
