import { createContext, useContext, useEffect, useState } from "react";
//context api
//3 steps create context--> provide context--> consume context value
// create context
const contactContext = createContext();

// custom hook , re-usable logic
function useContextValue() {
  const contextValue = useContext(contactContext);
  return contextValue;
}
export { contactContext, useContextValue };
//just F.C.
export default function ContactsProvider({ children }) {
  //create contact state
  const [contacts, setContacts] = useState([]);

  // do side effects
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((resContactsInJson) => setContacts(resContactsInJson));
  }, []);

  // delete a logic
  const deleteContact = (contactId) => {
    const configureObj = {
      method: "DELETE"
    };

    fetch(
      `https://jsonplaceholder.typicode.com/users/${contactId}`,
      configureObj
    )
      .then((response) => response.json())
      .then((res) => {
        const newContacts = contacts.filter((contact) => contact.id !== contactId);
        console.log('selte',newContacts);
        setContacts(newContacts);
      });
  };

  // update a contact
  const updateContact = (contactId, updatedContact) => {
    const configureObj = {
      method: "PATCH", //put entire update
      body: JSON.stringify(updatedContact),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    };

    fetch(
      `https://jsonplaceholder.typicode.com/users/${contactId}`,
      configureObj
    )
      .then((response) => response.json())
      .then((res) => {
        const newContacts = contacts.map((element) => {
          if (element.id === contactId) {
            element.name = updatedContact.name;
            element.phone = updatedContact.phone;
          }
          return element;
        });

        console.log('U selte',newContacts);
        setContacts(newContacts);
      });
  };

  // add contact
  const addContact = (newContact) => {

    const Ids = contacts.map((contact)=>contact.id);
    let nextId=0;
    Ids.forEach((id)=>{
      if(id>nextId){
        nextId=id;
      }
    });
    const newContacts = {
      id: nextId + 1,
      ...newContact
    };
    
    console.log('next id', newContact);

    const configureObj = {
      method: "POST",
      body: JSON.stringify(newContacts),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    };
    fetch("https://jsonplaceholder.typicode.com/users", configureObj)
      .then((response) => response.json())
      .then((res) => {
        const result=[newContacts, ...contacts];
        console.log('A selte',result);
        setContacts([newContacts, ...contacts]);
      });
  };


  return (
    <contactContext.Provider
      value={{ contacts, deleteContact, updateContact, addContact }}
    >
      {children}
    </contactContext.Provider>
  );
}
