export class emailValidation {
  validateField(fieldRelation) {
    if (
      !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        fieldRelation.value
      )
    ) {
      throw new Error(`Porfavor, digite um e-mail correto!`);
    }
  }
}
