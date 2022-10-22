import React from 'react'
import MyForm from '../../components/MyForm'
import Container from '../../components/Container'
import Card from '../../components/Card'
import Row from '../../components/Row'
import FormRow from '../../components/FormRow'
import FormCol from '../../components/FormCol'
import InputText from '../../components/InputText'
import InputNumber from '../../components/InputNumber'

const registerUnit = ({children}) => {
  const config =  {
    "tb_unit": {
      "unit": {"active" : true, "required": "yes", "label":"Unidade"},
      "block": {"active" : true, "required": "yes", "label":"Bloco"},
      "square": {"active" : false, "required": "yes", "label":"Quadra"},
      "lot" : {"active" : false, "required": "yes", "label":"Lote"},
      "intercom": {"active" : true, "required": "yes", "label":"Interfone"},
      "active":true,
    }
  }
  return (
    <Container mx={"mx-5"} my={"my-5"} px={"px-5"} py={"pt-5"}>
      <Card title={"Dados da unidade"} >
        <Row py={"my-2"}/>
        <MyForm valueSubmit={"Salvar"} btnType={"btn-primary"} weigthSubmit={"btn-lg btn-block"}>
          {config.tb_unit.unit.active && loadInput("number","unit",config.tb_unit.unit.label,config.tb_unit.unit.required)}
          {config.tb_unit.block.active && loadInput("text","block",config.tb_unit.block.label,config.tb_unit.block.required)}
          {config.tb_unit.square.active &&  loadInput("text","square",config.tb_unit.square.label,config.tb_unit.square.required)}
          {config.tb_unit.lot.active && loadInput("text","lot",config.tb_unit.lot.label,config.tb_unit.lot.required)}
          {config.tb_unit.intercom.active && loadInput("number","intercom",config.tb_unit.intercom.label,config.tb_unit.intercom.required)}
        </MyForm>
      </Card>
    </Container>
  )
}
function loadInput (type,name,label,required){
  if (type === "text"){
    return <>
    <FormRow my="my-1">
        <FormCol width={12}>
        <InputText  value="" name={`${name}`} descLabel={`${label}`}
                    required={`${required}`}
        />
        </FormCol>
    </FormRow>
  </>
  }
  else if (type === "number"){
    return <>
    <FormRow my="my-1">
        <FormCol width={12}>
        <InputNumber  value="" name={`${name}`} descLabel={`${label}`}
                    required={`${required}`}
        />
        </FormCol>
    </FormRow>
  </>
  }
  
}
export default registerUnit