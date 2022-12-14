import { Validation } from "../../usecases/Validation.js";
import { minLengthValidation } from "../../validators/minLengthValidation.js";
import { emailValidation } from "../../validators/emailValidation.js";

const fields = document.querySelectorAll(".form-field");
const submitBtn = document.querySelector("#submit-form-btn");

const nomeValidator = new Validation([new minLengthValidation(5)]);
const emailValidator = new Validation([
  new minLengthValidation(15),
  new emailValidation(),
]);
const mensagemValidator = new Validation([new minLengthValidation(30)]);

let errorsState = [];

fields.forEach((field) => {
  errorsState.push(field.attributes.name.value);
});

fields.forEach((field) => {
  field.addEventListener("input", (e) => {
    const fieldName = e.target.attributes.name.value;
    const fieldValue = e.target.value;
    const validationResult = eval(fieldName + "Validator").validate({
      name: fieldName,
      value: fieldValue,
    });

    // Checa se existe erro de validacao e o campo nao esta no estado de erro.
    if (validationResult && !errorsState.includes(fieldName))
      errorsState.push(fieldName);

    const errorSpanIdName = `validation-${fieldName}`;
    const errorSpanMessage = `<span style="color: red" id="${errorSpanIdName}">${validationResult}</span>`;

    if (validationResult && !document.getElementById?.(errorSpanIdName)) {
      // Se tiver erro e nao tiver mensagem na UI p/ isso, adiciona e desabilita o botao
      e.target.insertAdjacentHTML("afterend", errorSpanMessage);
      submitBtn.setAttribute("disabled", true);
    } else if (!validationResult) {
      // Se nao tiver erro de validacao, e o erro ainda existir no estado de erro, tira ele de la e tambem remove o html
      if (errorsState.indexOf(fieldName) != -1)
        errorsState.splice(errorsState.indexOf(fieldName), 1);
      document.getElementById?.(errorSpanIdName)?.remove();
    }
    // se nao tiver erro, habilita o botao
    if (errorsState.length == 0) submitBtn.removeAttribute("disabled");
  });
});
