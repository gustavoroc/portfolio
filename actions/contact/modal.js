import toggleModal from "../utils/toggleModal.js";

const modalClassName = ".clear-msg-check-modal";

const deleteBtn = document.querySelector("#delete");
const keepBtn = document.querySelector("#keep");
const modalContainer = document.querySelector(modalClassName);
const clearMessageBtn = document.querySelector("#clear-message-btn");

clearMessageBtn.addEventListener("click", () => {
  toggleModal(modalClassName);
});

keepBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleModal(modalClassName);
});

deleteBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  localStorage.removeItem("messagesJSON");
  toggleModal(modalClassName);
});

modalContainer.addEventListener("click", () => {
  toggleModal(modalClassName);
});
