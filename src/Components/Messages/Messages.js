import React, { useState } from "react";
import Navbar from '../Bar/Navbar';

function Messages() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = `hourmatalla.yacoub@gmail.com?subject=Message de ${name}&body=${message}`;
  };

  return (
    <div>
      <Navbar />
      <div className="message-container">
      <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nom:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        ></textarea>
      </div>
      <button type="submit">Envoyer</button>
    </form>      
      </div>   
    </div>   
  );
}

export default Messages;
