import { useState } from "react";
import useContactHook from "../customHook/contactHook";
import { useContextValue } from "../context/customProvider";


export default function AddContact(props) {
  //get value form context
  const { addContact } = useContextValue();

  // for to show form at onclick on button
  const [isClickAddContact, setIsClickAddContact] = useState(false);

  //using custom hook for form input
  const { name, setName, phone, setPhone } = useContactHook({
    name: "",
    phone: ""
  });

  // submit form data to an API
  const submitHandler = () => {
    addContact({
      name,
      phone
    });
    setIsClickAddContact(false);
  };

  return (
    <>
      {isClickAddContact ? (
        <form className="addContact" onSubmit={submitHandler}>
          <div>
            <input
              onInput={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <input
              onInput={(e) => setPhone(e.target.value)}
              value={phone}
              type="tel"
              placeholder="Enter your number"
            />
          </div>
          <button>Add </button>
          <button id="close-form" onClick={() => setIsClickAddContact(false)}>
            close{" "}
          </button>
        </form>
      ) : (
        <button id="add-contact-btn" onClick={() => setIsClickAddContact(true)}>
          Add Contact{" "}
        </button>
      )}
    </>
  );
}
