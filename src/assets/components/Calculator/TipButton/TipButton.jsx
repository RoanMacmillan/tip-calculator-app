import React from 'react';
import './TipButton.css'

const TipButton = ({ percentage, handleTipClick, isSelected }) => {

  const handleClick = (e) => {
    e.preventDefault();
    handleTipClick(percentage);
  }

  return (
    <button className={`TipButton ${isSelected ? 'selected' : ''}`} onClick={handleClick}>
      {percentage}%
    </button>
  )
}

export default TipButton;