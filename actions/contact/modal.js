import toggle from "../utils/toggle.js";
import setFeedBackMessage from "../utils/setFeedBackMessage.js";

const modalClassName = ".clear-msg-check-modal";

const deleteBtn = document.querySelector("#delete");
const keepBtn = document.querySelector("#keep");
const modalContainer = document.querySelector(modalClassName);
const clearMessageBtn = document.querySelector("#clear-message-btn");

clearMessageBtn.addEventListener("click", () => {
  toggle(modalClassName);
});

keepBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  toggle(modalClassName);
});

deleteBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  localStorage.removeItem("messagesJSON");
  toggle(modalClassName);
  setFeedBackMessage("Mensagens removidas!");
});

modalContainer.addEventListener("click", () => {
  toggle(modalClassName);
});
