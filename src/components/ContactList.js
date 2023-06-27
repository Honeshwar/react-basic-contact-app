import { useContextValue } from "../context/contactProvider";
import Contact from "./Contact";

export default function DisplayContact(props) {
  //get context value to iterate over contacts
  const { contacts } = useContextValue();

  return (
    //jsx code
    <div className="contact-list">
      <ul>
        {contacts?.map((contact, index) => (
          <Contact key={index} contact={contact} />
        ))}
      </ul>
    </div>
  );
}
