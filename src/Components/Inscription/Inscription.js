import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Inscription() {
  const [name, setName] = useState('');  
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name},Email: ${email},Username: ${username}, Password: ${password}, Confirm Password: ${confirmPassword}`);
  };


  return (
    <div className="signup">
      <form className="signup-form" onSubmit={handleSubmit} >
        <div className="form-group">
          <label htmlFor="name">Nom</label>
          <input
            type="name"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>  
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Nom d'utilisateur</label>
          <input
            type="username"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Valider</button>
        <p>
          Avez-vous déja un compte?{' '}
           <Link className="link" to="/">Se connecter</Link>.
        </p>
      </form>
    </div>
  );
}

export default Inscription;
