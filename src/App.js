import React  from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Connexion from './Connexion';
import Inscription from './Inscription';
import Accueil from './Accueil';
import Messages from './Messages';
import Profil from './Profil';
import Contact from './Contact';
import Post from './Post';
import Parametres from './Parametres';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Connexion />} />
          <Route path="/register" element={<Inscription />} />
          <Route path="/home" element={<Accueil />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/post" element={<Post />} />
          <Route path="/parametres" element={<Parametres />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
