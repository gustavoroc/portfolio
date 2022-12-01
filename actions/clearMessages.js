const clearMessageBtn = document.querySelector("#clear-message-btn");

clearMessageBtn.addEventListener("click", () => {
  localStorage.removeItem("messagesJSON");
});
