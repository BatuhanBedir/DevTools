import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://st5.depositphotos.com/69470920/64061/v/450/depositphotos_640614254-stock-illustration-pikachu-pokemon-anime-vector-illustration.jpg" />
      {contacts.map((contact) => (
        <Card
          name={contact.name}
          img={contact.imgURL}
          tel={contact.phone}
          email={contact.email}
        />
      ))}
    </div>
  );
}

export default App;
