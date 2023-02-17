import React from 'react';
import logo from '../../images/logo.svg';
import person from '../../images/icon-person.svg';
import dollar from '../../images/icon-dollar.svg';

const Icon = ({ name, className }) => {
  let icon;
  switch (name) {
    case 'logo':
      icon = logo;
      break;
    case 'person':
      icon = person;
      break;
    case 'dollar':
      icon = dollar;
      break;
    default:
      icon = logo;
  }
  return <img className={className} src={icon} alt={name} />;
};

export default Icon;