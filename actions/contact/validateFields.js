import { Validation } from "../../usecases/Validation.js";
import { minLengthValidation } from "../../validators/minLengthValidation.js";

const fields = document.querySelectorAll(".form-field");
const submitBtn = document.querySelector("#submit-form-btn");

const nomeValidator = new Validation([new minLengthValidation(5)]);
const emailValidator = new Validation([new minLengthValidation(10)]);
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

    if (validationResult && !errorsState.includes(fieldName))
      errorsState.push(fieldName);

    const errorSpanIdName = `validation-${fieldName}`;
    const errorSpanMessage = `<span style="color: red" id="${errorSpanIdName}">${validationResult}</span>`;

    if (validationResult && !document.getElementById?.(errorSpanIdName)) {
      e.target.insertAdjacentHTML("afterend", errorSpanMessage);
    } else if (!validationResult) {
      if (errorsState.indexOf(fieldName) != -1)
        errorsState.splice(errorsState.indexOf(fieldName), 1);
      document.getElementById?.(errorSpanIdName)?.remove();
    }

    if (errorsState.length == 0) submitBtn.removeAttribute("disabled");
  });
});
