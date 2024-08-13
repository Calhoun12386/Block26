import { useState, useEffect } from "react";
const steven = {name:"steven",}

export default function SelectedContact({selectedContactId,setSelectedContactId,}) {
  const [contact, setContact] = useState(steven);

  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const result = await response.json();
        setContact(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContact();

  }, []);

  console.log(contact);
  return(<div>
    
      <p><strong>Name:</strong>{contact.name}</p>
      <p><strong>Username:</strong> {contact.username}</p>
      <p><strong>Email:</strong>{contact.email}</p>
      <p><strong>Phone:</strong>{contact.phone}</p>
      
     
        <>
          <h3>Address</h3>
          <p><strong>Street:</strong> {contact.address?.street}</p>
          <p><strong>Suite:</strong> {contact.address?.suite}</p>
          <p><strong>City:</strong> {contact.address?.city}</p>
          <p><strong>Zipcode:</strong> {contact.address?.zipcode}</p> 
        </>
      
    
   

    <button onClick={()=>setSelectedContactId(null)}>Back</button>
  </div>)

}

