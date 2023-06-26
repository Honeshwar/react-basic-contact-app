import CustomProvider from "../context/customProvider";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

import "../styles/styles.css";
import "../styles/addContactForm.css";
import "../styles/displayContact.css";

export default function App() {
  return (
    <div className="App">
      <h1>Contact</h1>
      <CustomProvider>
        <AddContact />
        <ContactList />
      </CustomProvider>
    </div>
  );
}
