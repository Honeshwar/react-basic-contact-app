import { useContextValue } from "../context/contactsProvider";
import Contact from "./Contact";

export default function DisplayContact() {
  //get context value to iterate over contacts
  const { contacts } = useContextValue();

  return (
    //jsx code
    <div className="contact-list">
      <ul>
        {contacts?.map((contact, index) => (
          <Contact key={index} contact={contact} />
        ))}
        {contacts?.length===0 && <h1 style={{marginTop:"40px"}}>no contact is present , added contact is displayed here...</h1>}
      </ul>
    </div>
  );
}
