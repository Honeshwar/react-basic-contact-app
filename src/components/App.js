import ContactProvider from "../context/contactProvider";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

import "../styles/styles.css";
import "../styles/addContactForm.css";
import "../styles/displayContact.css";

export default function App() {
  return (
    <div className="App">
      <h1>Contact</h1>
      <ContactProvider>
        <AddContact />
        <ContactList />
      </ContactProvider>
    </div>
  );
}
