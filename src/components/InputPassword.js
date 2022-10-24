import React from 'react'

const InputPassword = ({children,name,placeholder,descLabel,required}) => {
  return (
    <div>
      <div className="form-floating">
        <input  className="form-control"
                type="password"
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

export default InputPassword