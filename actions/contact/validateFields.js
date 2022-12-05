import { Validation } from "../../usecases/Validation.js";
import { minLengthValidation } from "../../validators/minLengthValidation.js";

const fields = document.querySelectorAll(".form-field");

const emailValidator = new Validation([new minLengthValidation(4)]);
const mensagemValidator = new Validation([new minLengthValidation(30)]);
const nomeValidator = new Validation([new minLengthValidation(5)]);

fields.forEach((field) => {
  field.addEventListener("input", (e) => {
    const fieldName = e.target.attributes.name.value;
    const fieldValue = e.target.value;
    const validationResult = eval(fieldName + "Validator").validate({
      name: fieldName,
      value: fieldValue,
    });
    console.log(validationResult);
  });
});
