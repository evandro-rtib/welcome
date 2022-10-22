import React from 'react'

const Card = ({children,bgColor,bgColorHeader,title,h}) => {
  return (
    <div className={`card-group`}>
        <div className={`card ${bgColor}`}>
            <div className={`card-header ${bgColorHeader} text-center`}>
              {h === 2 ? <h2>{title}</h2> :
                h === 3 ? <h3>{title}</h3> :
                h === 4 ? <h4>{title}</h4>:
                <h1>{title}</h1>}
            </div>
            <div className={`panel-body ${bgColor} px-2 py-2`}>
              {children}
            </div>
        </div>
    </div>
  )
}

export default Card