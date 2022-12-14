import React, { useState } from 'react'

const InputText = ({children,mx,my,px,py,name,placeholder,descLabel,required,inputValue,functionOnChange}) => {
  return (
    <div>
      <div className={`form-floating ${mx} ${my} ${px} ${py} `}>
        <input  className="form-control"
                type="text"
                id={`${name}`}
                name={`${name}`}
                placeholder={`${placeholder}`}
                required={`${required}`}
                
        />
        <label htmlFor={`${name}`}>{descLabel}</label>
      </div>
    </div>
  )
}

export default InputText