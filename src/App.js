import React  from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Connexion from './Components/Connexion/Connexion';
import Inscription from './Components/Inscription/Inscription';
import Accueil from './Components/Accueil/Accueil';
import Messages from './Components/Messages/Messages';
import Profil from './Components/Profil/Profil';
import Post from './Components/Post/Post';

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
<<<<<<< HEAD
=======
          <Route path="/parametres" element={<Parametres />} />
>>>>>>> f33d6ab4d94e3deb841d2ebf696304584a05a758
        </Routes>
      </div>
    </Router>
  );
}

export default App;
