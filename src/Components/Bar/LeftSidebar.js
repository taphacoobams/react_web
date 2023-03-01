import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineMessage } from "react-icons/ai";
import { AiOutlineLogout } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BiMap } from "react-icons/bi"

function LeftSidebar() {
  return (
    <nav className="left-sidebar">
      <ul>
        <li><Link className="link" to="/home"><div className="icone"><AiOutlineHome size="1.5em" /></div><h6>Accueil</h6></Link></li>
        <li><Link className="link" to="/messages"><div className="icone"><AiOutlineMessage size="1.5em" /></div><h6>Messages</h6></Link></li>
        <li><Link className="link" to="/profile"><div className="icone"><AiOutlineUser size="1.5em" /></div><h6>Profil</h6></Link></li>
        <li><Link className="link" to="/post"><div className="icone"><AiOutlinePlusCircle size="1.5em" /></div><h6>Publier</h6></Link></li>
        <li><Link className="link" to="/map"><div className="icone"><BiMap size="1.5em" /></div><h6>Carte</h6></Link></li>
        <li><Link className="link" to="/"><div className="icone"><AiOutlineLogout size="1.5em" /></div><h6>Deconnexion</h6></Link></li>
      </ul>
    </nav>
  );
}

export default LeftSidebar;
