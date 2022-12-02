class ContactClient {
  constructor(storeOfContact = localStorage) {
    this._storeOfContact = storeOfContact;
  }

  get() {
    const contacts = JSON.parse(this._storeOfContact?.getItem("messagesJSON"));
    return contacts;
  }
}

class Contact {
  constructor(contactClient = new ContactClient()) {
    this._contactClient = contactClient;
  }

  getAllHtmlResults() {
    const contacts = this._contactClient.get();
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

contact_test = new Contact();
document
  .querySelector(".messages-container__content")
  .insertAdjacentHTML("afterbegin", contact_test.getAllHtmlResults());
