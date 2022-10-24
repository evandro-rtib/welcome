import React, { useState } from 'react'

const InputEmail = ({children,mx,my,px,py,name,placeholder,descLabel,required,inputValue}) => {
  if (!inputValue)
  {
    inputValue="";
  }
  const [email,setEmail] = useState(inputValue);
  return (
    <div>
      <div className={`form-floating ${mx} ${my} ${px} ${py} `}>
        <input  className="form-control"
                type="email"
                id={`${name}`}
                name={`${name}`}
                value={`${email}`}
                placeholder={`${placeholder}`}
                required={`${required}`}
                onChange={(e) => setEmail(e.target.value)}              
        />
        <label htmlFor={`${name}`}>{descLabel}</label>
      </div>
    </div>
  )
}

export default InputEmail