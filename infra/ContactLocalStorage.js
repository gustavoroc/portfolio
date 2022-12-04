export default class ContactLocalStorage {
  get() {
    const contacts = JSON.parse(localStorage.getItem("messagesJSON"));
    return contacts;
  }
}
