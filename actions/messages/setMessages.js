import Messages from "../../usecases/Messages.js";

const messages = new Messages();

document
  .querySelector(".messages-container__content")
  .insertAdjacentHTML("afterbegin", messages.getAllHtmlResults());
