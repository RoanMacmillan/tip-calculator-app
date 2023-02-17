
import React, { useState } from 'react'
import './InputField.css'
function InputField({type = 'text', placeholder, value, onChange, className, label, maxLength}) {

  return (
    <div>
    <label>{label}</label>
      <input 
        type={type} 
        placeholder={placeholder} 
        value={value ? value : ''} 
        onChange={onChange} 
        className={className}
        maxLength={maxLength}
      />
      </div>
  )

  }

 
  
export default InputField
