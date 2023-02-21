import React, { useState } from 'react';
import './Parametres.css';

function Parametres() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  return (
    <div className={`settings-container ${theme}`}>
      <h2>Paramètres</h2>
      <div className="theme-toggle">
        <span>Thème:</span>
        <label className="switch">
          <input type="checkbox" onChange={toggleTheme} checked={theme === 'dark'} />
          <span className="slider round"></span>
        </label>
      </div>
      <div className="other-settings">
        <span>Autres paramètres ici...</span>
      </div>
    </div>
  );
}

export default Parametres;
