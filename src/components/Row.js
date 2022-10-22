import React from 'react'

const Row = ({children,mx,my,ml,mr,mt,mb,px,py}) => {
  return (
    <div className={`row ${px} ${py} ${mx} ${my} ${ml} ${mr} ${mt} ${mb}`}>
        {children}
    </div>
  )
}

export default Row