import { useState } from "react";
import { useContextValue } from "../context/customProvider";
import useContactHook from "../customHook/contactHook";

export default function Contact({ contact }) {
  //get value form context
  const { deleteContact, updateContact } = useContextValue();

  // creating state for editing and non-editing logic
  const [editing, setEditing] = useState(false);

  //using custom hook for form input
  const {
    name: updatedName,
    setName: setUpdatedName,
    phone: updatedPhone,
    setPhone: setUpdatedPhone
  } = useContactHook({ name: contact.name, phone: contact.phone });

  //handle delete
  const handleDelete = () => {
    deleteContact(contact.id);
  };
  //handle update
  const handleUpdate = () => {
    updateContact(contact.id, {
      id: contact.id,
      name: updatedName,
      phone: updatedPhone
    });
    setEditing(false);
  };

  return (
    <div className="contact">
      {editing ? (
        <div className="contact-edit">
          <input
            value={updatedName}
            onChange={(e) => setUpdatedName(e.target.value)}
            placeholder="Enter your name"
          />
          <input
            value={updatedPhone}
            onChange={(e) => setUpdatedPhone(e.target.value)}
            placeholder="Enter your phone number"
          />
          <button id="cancel-btn" onClick={() => setEditing(false)}>
            {" "}
            X
          </button>
          <button onClick={handleUpdate}>Save</button>
        </div>
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
