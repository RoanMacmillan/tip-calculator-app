import React from 'react';
import './ResetBtn.css';

function ResetBtn({ onClick, disabled }) {
  const btnClass = disabled ? 'ResetBtn Disabled' : 'ResetBtn';
  return (
    <button className={btnClass} onClick={onClick} disabled={disabled}>
      RESET
    </button>
  );
}

export default ResetBtn;