const form = document.querySelector(".contact-form");
const fields = form.querySelectorAll(".form-field");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  setLocalStorageMessages(fields);
});

const setLocalStorageMessages = (fields) => {
  // 1) Declara os valores do formulario:
  const formInputValues = {
    nome: "",
    email: "",
    mensagem: "",
  };

  // 2) Adiciona os valores de cada input, referente ao seu nome, ao objeto formInputValues
  fields.forEach((field) => {
    formInputValues[field.attributes.name.value] = field.value;
  });

  // 3) Retorna o array que tem no messagesJSON ou um array vazio:
  const arrayOfMessagesInLocalStorage =
    JSON.parse(localStorage.getItem("messagesJSON")) || [];

  // 4) Adiciona o valor do formulario ao array:
  arrayOfMessagesInLocalStorage.push(formInputValues);

  // 5) Adiciona as mudancas ao local storage.
  localStorage.setItem(
    "messagesJSON",
    JSON.stringify(arrayOfMessagesInLocalStorage)
  );

  // 6) Limpar as mensagens de contato:
  fields.forEach((field) => {
    field.value = "";
  });
};
