import React from 'react'

const InputText = ({children,mx,my,px,py,value,name,placeholder,descLabel,required}) => {
  return (
    <div>
      <div className={`form-floating ${mx} ${my} ${px} ${py} `}>
        <input  className="form-control"
                type="text"
                id={`${name}`}
                name={`${name}`}
                text={`${value}`}
                placeholder={`${placeholder}`}
                required={`${required}`}
        />
        <label htmlFor={`${name}`}>{descLabel}</label>
      </div>
    </div>
  )
}

export default InputText