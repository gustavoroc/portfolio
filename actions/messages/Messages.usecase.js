class ContactLocalStorage {
  // Classe implementaria a interface de contact client. --> Precisa ter o metodo get retornando um array de contatos (model)
  // Classe de infra (se suja com a dependencia)
  get() {
    const contacts = JSON.parse(localStorage.getItem("messagesJSON"));
    return contacts;
  }
}

class Messages {
  // O ideal seria uma interface p/ a dependencia de contact client, fazendo DI.
  constructor(contactDependency = new ContactLocalStorage()) {
    this._contactDependency = contactDependency;
  }

  getAllHtmlResults() {
    const contacts = this._contactDependency?.get();
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

const messages = new Messages();

document
  .querySelector(".messages-container__content")
  .insertAdjacentHTML("afterbegin", messages.getAllHtmlResults());
