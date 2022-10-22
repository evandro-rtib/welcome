import React from 'react'

const FormCol = ({children, width}) => {
  return (
    <div className={`form-group col col-${width}`}>
      {children}
    </div>
  )
}

export default FormCol