import React, {useState} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import InputText from './InputText';


const MyDatePicker = ({name,required,descLabel,mx,my,px,py}) => {
  const [dt, setDt] = useState(new Date());
  return (
    <div>
        <div className={`form-floating ${mx} ${my} ${px} ${py} `}>
            <InputText name={`${name}`} descLabel={`${descLabel}`}
                    required={`${required}`}
            />
            <DatePicker
                        className="form-control"
                        selected={dt} 
                        onChange={(dt) => setDt(dt)}
            />
        </div>
    </div>
  )
}

export default MyDatePicker