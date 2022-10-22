import React from 'react'

const ContainerFluid = ({children,bgColor}) => {
  return (
    <div className={`container-fluid ${bgColor}`}>
      {children}
    </div>
  )
}
export default ContainerFluid