export class minLengthValidation {
  constructor(minLength) {
    this.minLength = minLength;
  }

  validateField(fieldRelation) {
    if (this.minLength > fieldRelation.value.length) {
      throw new Error(
        `O minimo de caracteres para o campo "${fieldRelation.name}" é ${this.minLength}`
      );
    }
  }
}
