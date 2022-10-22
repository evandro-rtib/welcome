import React from 'react'
import FormRow from './FormRow'

const MyForm = ({children, mx,my,ml,mr,mt,mb,px,py,valueSubmit,btnType,weigthSubmit}) => {
  return (
        <form className={`${px} ${py} ${mx} ${my} ${ml} ${mr} ${mt} ${mb}`}>
          {children}
          <FormRow my="my-3"/>
          <div className="d-grid gap-2">
            <input type="submit"
                        className={`btn
                                    ${weigthSubmit}
                                    ${btnType} bg-gradient
                                    
                                  `}
                                    value={`${valueSubmit}`}
                        />
          </div>
          
        </form>
  )
}

export default MyForm
