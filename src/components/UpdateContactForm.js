import React from 'react'
import useFormInputHook from '../customHook/formInputHook';
import { useContextValue } from '../context/contactsProvider';

function UpdateContactForm({contact,setEditing}) {

    //get value form context
    const { updateContact } = useContextValue();

    //using custom hook for form input
    const {
        name: updatedName,
        setName: setUpdatedName,
        phone: updatedPhone,
        setPhone: setUpdatedPhone
    } = useFormInputHook({ name: contact.name, phone: contact.phone });


  // const [updatedName, setUpdatedName] = useState(contact.name);
  // const [updatedPhone, setUpdatedPhone] = useState(contact.phone);

  // console.log(updatedName,updatedPhone);


  //handle update
  const handleUpdate = () => {
    updateContact(contact.id, {
      // id: contact.id,
      name: updatedName,
      phone: updatedPhone
    });
    setEditing(false);
  };

  return (
    <div className="contact-edit">
          <input
            type="text"
            value={updatedName}
            onInput={(e) => setUpdatedName(e.target.value)}
            placeholder="Enter your name"
          />
          <input
            type="text"
            value={updatedPhone}
            onInput={(e) => setUpdatedPhone(e.target.value)}
            placeholder="Enter your phone number"
          />
          <button id="cancel-btn" onClick={() => setEditing(false)}>
            {" "}
            X
          </button>
          <button onClick={handleUpdate}>Save</button>
        </div>
  )
}

export default UpdateContactForm