import { useState } from "react";

import "./App.css";
import ContactList from "./components/ContactList";
import SelectedContact from "./components/SelectedContact";

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {selectedContactId ? (
        <div>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Selected Contact View</p>
          <SelectedContact
            selectedContactId={selectedContactId}
            setSelectedContactId={setSelectedContactId}
          />
        </div>
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
      
    </>
  );
}

export default App;
