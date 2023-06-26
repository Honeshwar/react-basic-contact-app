import { createContext, useContext, useEffect, useState } from "react";
//context api
//3 steps create context--> provide context--> consume context value
// create context
const contactContext = createContext();

// custom hook , re-usable logic
function useContextValue() {
  const data = useContext(contactContext);
  return data;
}
export { contactContext, useContextValue };
//just F.C.
export default function CustomProvider({ children }) {
  const [data, setData] = useState([]);
  console.log("contact setData inilz place");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((resDataInJson) => setData(resDataInJson));
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
        const newData = data.filter((contact) => contact.id !== contactId);
        console.log(newData);
        setData(newData);
        // setIsDeleted(true);
      });
  };

  // update a contact
  const updateContact = (contactId, updatedContactObj) => {
    const configureObj = {
      method: "PATCH", //put entire update
      body: JSON.stringify(updatedContactObj),
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
        const newData = data.map((element) => {
          if (element.id === contactId) {
            element.name = updatedContactObj.name;
            element.phone = updatedContactObj.phone;
          }
          return element;
        });
        setData(newData);
      });
  };

  // add contact
  const addContact = (newContact) => {
    const newData = {
      id: data.length + 1,
      ...newContact
    };
    const configureObj = {
      method: "POST",
      body: JSON.stringify(newData),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    };
    fetch("https://jsonplaceholder.typicode.com/users", configureObj)
      .then((response) => response.json())
      .then((res) => {
        console.log("res", res); // not save data
        setData([newData, ...data]);
      });
  };
  return (
    <contactContext.Provider
      value={{ data, deleteContact, updateContact, addContact }}
    >
      {children}
    </contactContext.Provider>
  );
}
