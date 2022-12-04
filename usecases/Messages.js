import ContactLocalStorage from "../infra/ContactLocalStorage.js";

export default class Messages {
  constructor(contactDependency = new ContactLocalStorage()) {
    this._contactDependency = contactDependency;
  }

  getAllHtmlResults() {
    const contacts = this._contactDependency.get();
    return this.parseMessage(contacts);
  }

  parseMessage(contacts) {
    const htmlListOfContats = [];
    contacts.forEach((c) => {
      htmlListOfContats.push(`
          <articles class="messages-container__message default-box-shadow">
              <div>
                  <h2>${c.nome}</h2>
                  <spam>${c.email}</spam>
              </div>
              <p>${c.mensagem}</p>
          </articles>
         `);
    });
    return htmlListOfContats;
  }
}
