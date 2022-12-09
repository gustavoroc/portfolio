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
    let htmlListOfContats = "";
    if (!contacts) {
      return `
         <div style="font-size: 16px; height: 400px; display: flex; align-items: center; justify-content: center">
           <p>está meio vazio por aqui..</p>
         </div>
      `;
    }
    contacts.forEach((c) => {
      htmlListOfContats += `
          <articles class="messages-container__message default-box-shadow">
              <div class="messages-container__title">
                  <h2>${c.nome}</h2>
                  <spam>${c.email}</spam>
              </div>
              <p>${c.mensagem}</p>
          </articles>
         `;
    });
    return htmlListOfContats;
  }
}
