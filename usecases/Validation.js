export class Validation {
  constructor(validators) {
    this.validators = validators;
  }

  validators = [];

  validate(fieldRelation) {
    let validationResponse;
    this.validators.forEach((validator) => {
      try {
        validator.validateField(fieldRelation);
      } catch (err) {
        validationResponse = err.message;
      }
    });
    return validationResponse;
  }
}
