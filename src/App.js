import React  from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Connexion from './Components/Connexion/Connexion';
import Inscription from './Components/Inscription/Inscription';
import Accueil from './Components/Accueil/Accueil';
import Messages from './Components/Messages/Messages';
import Profil from './Components/Profil/Profil';
import Post from './Components/Post/Post';
import Carte from './Components/Carte/Carte';

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
          <Route path="/profile" element={<Profil />} />
          <Route path="/post" element={<Post />} />
          <Route path="/map" element={<Carte />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
