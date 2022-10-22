import React from 'react'
import MyFrom from '../../components/MyForm'
import InputText from '../../components/InputText'
import InputPassword from '../../components/InputPassword'
import Container from '../../components/Container'
import Card from '../../components/Card'
import Row from '../../components/Row'
function Login (){
  return (
    <Container mx={"mx-5"} my={"my-5"} px={"px-5"} py={"pt-5"}>
      <Card title={"Seja bem vindo"} >
        <Row py={"my-2"}/>
        <MyFrom valueSubmit={"Entrar"} btnType={"btn-primary"} weigthSubmit={"btn-lg btn-block"}>
          <InputText my={"py-2"} descLabel={'Usuário'} name={'user'} placeholder={'Digite o usuário'}/>
          <InputPassword descLabel={'Senha'} name={'senha'} placeholder={'Digite o usuário'}/>
          <Row py={"my-2"}/>
          <div className="alert alert-danger" role="alert">
            <span>Usuário e/ou senha inválido(s)</span>
          </div>          
        </MyFrom>
      </Card>
    </Container>
    
  )
}

export default Login
