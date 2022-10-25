import React from 'react'
import MyForm from '../../components/MyForm'
import Container from '../../components/Container'
import Card from '../../components/Card'
import Row from '../../components/Row'
import FormRow from '../../components/FormRow'
import FormCol from '../../components/FormCol'
import InputText from '../../components/InputText'
import InputNumber from '../../components/InputNumber'

const RegisterUnit = ({children,config}) => {
  return (
    <>
      { config.tb_unit.active &&
      <Container mx={"mx-5"} my={"my-5"} px={"px-5"} py={"pt-5"}>
        <Card title={"Dados da unidade"} >
          <Row py={"my-2"}/>
          <MyForm valueSubmit={"Salvar"} btnType={"btn-primary"} weigthSubmit={"btn-lg btn-block"}>
            {config.tb_unit.unit.active && loadInput("number","unit",config.tb_unit.unit.label,config.tb_unit.unit.required,"my-2")}
            {config.tb_unit.block.active && loadInput("text","block",config.tb_unit.block.label,config.tb_unit.block.required,"my-2")}
            {config.tb_unit.square.active &&  loadInput("text","square",config.tb_unit.square.label,config.tb_unit.square.required,"my-2")}
            {config.tb_unit.lot.active && loadInput("text","lot",config.tb_unit.lot.label,config.tb_unit.lot.required,"my-2")}
            {config.tb_unit.intercom.active && loadInput("number","intercom",config.tb_unit.intercom.label,config.tb_unit.intercom.required,"my-2")}
          </MyForm>
        </Card>
      </Container>
      }
    </>
  )
}
function loadInput (type,name,label,required,mx,my){
  if (type === "text"){
    return <>
    <FormRow my="my-1">
        <FormCol width={12}>
        <InputText  name={`${name}`} descLabel={`${label}`}
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
  
}
export default RegisterUnit