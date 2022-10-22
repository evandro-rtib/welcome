import React from 'react'

const FormRow = ({children,mx,my,ml,mr,mt,mb,px,py}) => {
  return (
    <div className={`form-row  ${px} ${py}  ${mx} ${my} ${ml} ${mr} ${mt} ${mb}`}>
        {children}
    </div>
  )
}

export default FormRow