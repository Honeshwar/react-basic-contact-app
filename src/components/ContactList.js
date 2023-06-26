import { useContextValue } from "../context/customProvider";
import Contact from "./Contact";

export default function DisplayContact(props) {
  //get context value to iterate over contacts
  const { data } = useContextValue();

  return (
    //jsx code
    <div className="contact-list">
      <ul>
        {data?.map((contact, index) => (
          <Contact key={index} contact={contact} />
        ))}
      </ul>
    </div>
  );
}
