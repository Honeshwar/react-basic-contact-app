import { useState } from "react";
import { useContextValue } from "../context/contactsProvider";
import useFormInputHook from "../customHook/formInputHook";
import UpdateContactForm from "./UpdateContactForm";

export default function Contact({ contact }) {
  //get value form context
  const { deleteContact } = useContextValue();

  // creating state for editing and non-editing logic
  const [editing, setEditing] = useState(false);

    //handle delete
    const handleDelete = () => {
      console.log('delete contact',contact);
      deleteContact(contact.id);
    };

  return (
    <div className="contact" data={contact.id}>
      {editing ? (
       <UpdateContactForm contact={contact} setEditing={setEditing}/>
      ) : (
        <div className="contact-unEdit">
          <div className="contact-unEdit-text">
            <h3>
              <img
                src="https://cdn-icons-png.flaticon.com/128/4675/4675250.png"
                alt="edit button"
              />
              {contact.name}
            </h3>
            <p>
              <img
                src="https://cdn-icons-png.flaticon.com/128/724/724664.png"
                alt="edit button"
              />
              {contact.phone}
            </p>
          </div>
          <button onClick={() => setEditing(true)}>
            {" "}
            <img
              src="https://cdn-icons-png.flaticon.com/128/2921/2921222.png"
              alt="edit button"
            />
          </button>
          <button onClick={handleDelete}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/3221/3221897.png"
              alt="delete button"
            />
          </button>
        </div>
      )}
    </div>
  );
}
