import React from 'react';
import PropTypes from 'prop-types';
import './Profil.css';

function Profil(props) {
  const { name, bio, imageUrl, location, email } = props;

  return (
    <div className="profile-container">
      <div className="profile-image">
        <img src={imageUrl} alt="Profile" />
      </div>
      <div className="profile-name">{name}</div>
      <div className="profile-bio">{bio}</div>
      <div className="profile-data">
        <div>
          <span>Localisation:</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16px" height="16px"><path d="M12.5 1c-5.28 0-9.6 4.29-9.6 9.6 0 6.49 9.6 12.4 9.6 12.4s9.6-5.91 9.6-12.4c0-5.31-4.31-9.6-9.6-9.6zm0 14.4c-2.22 0-4.04-1.81-4.04-4.04s1.82-4.04 4.04-4.04 4.04 1.81 4.04 4.04-1.82 4.04-4.04 4.04z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
          <span>{location}</span>
        </div>
        <div>
          <span>Email:</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16px" height="16px"><path d="M22 3H2c-1.1 0-1.99.9-1.99 2L0 19c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 4.46l-9.58 5.75c-.38.22-.8.22-1.18 0L2 7.46V5l9.22 5.53L22 5v2.46z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
          <span>{email}</span>
        </div>
      </div>
    </div>
  );
}

Profil.propTypes = {
  name: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default Profil;
