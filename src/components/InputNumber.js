import React from 'react'

const InputNumber = ({children,mx,my,px,py,name,placeholder,descLabel,required}) => {
  return (
    <div>
      <div className={`form-floating ${mx} ${my} ${px} ${py} `}>
        <input  className="form-control"
                type="number"
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

export default InputNumber