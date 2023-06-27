import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactsProvider from "../context/contactsProvider";

import "../styles/styles.css";
import "../styles/addContactForm.css";
import "../styles/displayContact.css";

export default function App() {
  return (
    <div className="App">
      <h1>Contact</h1>
      <ContactsProvider>
        <AddContact />
        <ContactList />
      </ContactsProvider>
    </div>
  );
}
