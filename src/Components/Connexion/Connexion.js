import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Connexion.css';

function Connexion(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsernameError('');
    setPasswordError('');

    if (username === '') {
      setUsernameError('Le nom d\'utilisateur est requis');
    }

    if (password === '') {
      setPasswordError('Le mot de passe est requis');
    }

    if (username && password) {
      console.log('Nom d\'utilisateur:', username);
      console.log('Mot de passe:', password);
      navigate('/home');
    }
  };

  return (
    <div className="login-container">
      <aside className="login-aside">
        <div className="image">
          <img className="logo" src="logo1.png" alt="LOGO"/>
        </div>
        <h2>Avec A'Rosa-je, faites garder vos plantes avec sécurité par des passionnés.</h2>
      </aside>
      <div className="login-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="username">Nom d'utilisateur</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {usernameError && <p className="error">{usernameError}</p>}
          </div>
          <div className="form-control">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && <p className="error">{passwordError}</p>}
          </div>
          <button className="login" type="submit">Se connecter</button>
        </form>
        <p>Vous n'avez pas de compte? <Link className="link" to="/register">Inscrivez-vous ici</Link>.</p>
      </div>
    </div>
  );
}


export default Connexion;
