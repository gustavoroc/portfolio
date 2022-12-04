import toggle from "./toggle.js";

const setFeedBackMessage = (message) => {
  toggle(".feedback-container").innerHTML = `<span>${message}</span>`;
  setTimeout(() => {
    toggle(".feedback-container");
  }, 2500);
};

export default setFeedBackMessage;
