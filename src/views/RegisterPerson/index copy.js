import React from 'react'
import MyForm from '../../components/MyForm'
import Container from '../../components/Container'
import Card from '../../components/Card'
import Row from '../../components/Row'
import FormRow from '../../components/FormRow'
import FormCol from '../../components/FormCol'
import InputText from '../../components/InputText'
import InputNumber from '../../components/InputNumber'
import MyDatePicker from '../../components/MyDatePicker'
import InputEmail from '../../components/InputEmail'

const RegisterPerson = ({children,config}) => {
 
  return (
      <Container mx={"mx-5"} my={"my-5"} px={"px-5"} py={"pt-5"}>
        <Card title={"Dados dos moradores"} >
          <Row py={"my-2"}/>
          
          <MyForm valueSubmit={"Salvar"} btnType={"btn-primary"} weigthSubmit={"btn-lg btn-block"}>
          {config.tb_person.name.active && loadInput("text","name",config.tb_person.name.label,config.tb_person.name.required,"my-2")}
            {config.tb_person.birthday.active && <MyDatePicker name="birthday" descLabel="Data aniversário" />}
            {config.tb_person.doc_rg.active && loadInput("text","doc_rg",config.tb_person.doc_rg.label,config.tb_person.doc_rg.required,"my-2")}
            {config.tb_person.doc_cpf.active && loadInput("number","doc_cpf",config.tb_person.doc_cpf.label,config.tb_person.doc_cpf.required,"my-2")}
            {config.tb_person.email.active && loadInput("email","email",config.tb_person.email.label,config.tb_person.email.required,"my-2")}
          </MyForm>
        </Card>
      </Container>
    )
}
function loadInput (type,name,label,required,mx,my){
  if (type === "text"){
    return <>
    <FormRow my="my-1">
        <FormCol width={12}>
        <InputText   name={`${name}`} descLabel={`${label}`}
                    required={`${required}`}
                    my={`${mx}`}
                    mx={`${my}`}
        />
        </FormCol>
    </FormRow>
  </>
  }
  else if (type === "number"){
    return <>
    <FormRow my="my-1">
        <FormCol width={12}>
        <InputNumber name={`${name}`} descLabel={`${label}`}
                    required={`${required}`}
        />
        </FormCol>
    </FormRow>
  </>
  }
  else if (type === "email"){
    return <>
    <FormRow my="my-1">
        <FormCol width={12}>
        <InputEmail name={`${name}`} descLabel={`${label}`}
                    required={`${required}`}
        />
        </FormCol>
    </FormRow>
  </>
  }
  
}

export default RegisterPerson