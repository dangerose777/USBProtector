import React from 'react';
import './HomeButton.css';
import { useNavigate } from 'react-router-dom';

const HomeButton = ({ icon: Icon, text, route }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
  };

  return (
    <div className="home-button" onClick={handleClick}>
      <div className="icon">
        {Icon && <Icon />}
      </div>
      <div className="text">{text}</div>
    </div>
  );
};

export default HomeButton;
