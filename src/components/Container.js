import React from 'react'

const Container = ({children,flex,bgColor,px,py}) => {
  return (
    <div className={`container ${bgColor} bg-gradient ${flex} ${px} ${py}`}>
      {children}
    </div>
  )
}
export default Container;