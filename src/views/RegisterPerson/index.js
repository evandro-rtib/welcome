import React, { useState, useEffect } from 'react'
import Container from '../../components/Container'
import Card from '../../components/Card'
import PersonDetail from '../../components/PersonDetail'


const url = "http://localhost:8080"
const verifyPerson = (people,person)=>{
    console.log(people);
  for (let p in people) { 
    console.log("ESSE E P: ", p, p.name, person, person.name);
    if(p.name === person.name)
      return true    
  }
  return false
}
const RegisterPerson = ({children,config}) => {
  /* VARIAVEIS */
  const [people,setPeople] = useState(()=>[])

  const [name,setName] = useState('');
  const [doc_rg,setDoc_rg] = useState('');
  const [doc_cpf,setDoc_cpf] = useState('');
  const [birthday,setBirthday] = useState('');
  const [email,setEmail] = useState('');

  /* RECEBE DADOS */
  useEffect(() =>{
    async function fetchData(){
      let urlPeopleGet = url + "/people"
       const res = await fetch(urlPeopleGet)

      const data = await res.json()

      setPeople(data)
    }
    fetchData()

  },[])
  
  /* SALVA NO BANCO */
  function handleSubmit (e){
    e.preventDefault()

    const person = {
      name,
      doc_rg,
      doc_cpf,
      email,
    }

    
    console.log(person);
    if (!verifyPerson(people,person))
    {
      let personAddUrl=url + "/person" ;
      async function fetchData(){
        await fetch(personAddUrl,{
          method: "POST",
          headers: {"Content-Type":"application/json"},
          body: JSON.stringify(person)
          })
      }
      fetchData()
      setName('');
      setDoc_cpf('');
      setDoc_rg('')
      setEmail('')
    }
    else
      console.log('deu false')
  }

  return (
      <Container mx={"mx-5"} my={"my-5"} px={"px-5"} py={"pt-5"}>
        <Card title={"Dados dos moradores"} >
          <div className='row my-1'/>
          <div className='container'>
            <div className='row'>
              <PersonDetail people={people}/>
            </div>
            <div className='row'>
              <form onSubmit={handleSubmit}>
                <div className='form-row my-1'/>
                <div className="d-grid gap-2">
                  {
                    /*NAME*/
                    config.tb_person.name.active &&
                      <div className='form-row'>
                        <div className="form-group col col-12">            
                            <div className="form-floating mt-1">
                              <input  className="form-control"
                                      type="text"
                                      id="name"
                                      name="name"
                                      value={`${name}`}
                                      placeholder={`${config.tb_person.name.label}`}
                                      required={`${config.tb_person.name.required}`}
                                      onChange={(e) => {setName(e.target.value)}}
                              />
                              <label htmlFor="name">{config.tb_person.name.label}</label>
                            </div>
                        </div>
                      </div>
                  }
                  {
                    /*DOC_RG*/
                    config.tb_person.doc_rg.active &&
                    <div className='form-row'>
                      <div className="form-group col col-12">            
                        <div className="form-floating mt-1">
                          <input  className="form-control"
                                  type="text"
                                  id="doc_rg"
                                  name="dor_rg"
                                  value={`${doc_rg}`}
                                  placeholder={`${config.tb_person.doc_rg.label}`}
                                  required={`${config.tb_person.doc_rg.required}`}
                                  onChange={(e) => {setDoc_rg(e.target.value)}}
                          />
                          <label htmlFor="doc_rg">{config.tb_person.doc_rg.label}</label>
                        </div>
                      </div>
                    </div>
                  }
                  {
                    /*DOC_CPF*/
                    config.tb_person.doc_cpf.active &&
                      <div className='form-row'>
                        <div className="form-group col col-12">            
                          <div className="form-floating mt-1">
                            <input  className="form-control"
                                    type="number"
                                    id="doc_cpf"
                                    name="doc_cpf"
                                    value={`${doc_cpf}`}
                                    placeholder={`${config.tb_person.doc_cpf.label}`}
                                    required={`${config.tb_person.doc_cpf.required}`}
                                    onChange={(e) => {setDoc_cpf(e.target.value)}}
                            />
                            <label htmlFor="doc_cpf">{config.tb_person.doc_cpf.label}</label>
                          </div>
                        </div>
                      </div>
                  }
                  {
                    /*BIRTHDAY*/
                    config.tb_person.birthday.active &&
                      <div className='form-row'>
                        <div className="form-group col col-12">            
                          <div className="form-floating">
                            <input  className="form-control"
                                    type="text"
                                    id="birthday"
                                    name="birthday"
                                    value={`${birthday}`}
                                    placeholder={`${config.tb_person.birthday.label}`}
                                    required={`${config.tb_person.birthday.required}`}
                                    onChange={(e) => {setBirthday(e.target.value)}}
                            />
                            <label htmlFor="birthday">{config.tb_person.birthday.label}</label>
                          </div>
                        </div>
                      </div>
                  }
                  {
                    /*EMAIL */
                    config.tb_person.email.active &&
                      <div className='form-row'>
                        <div className="form-group col col-12">            
                          <div className="form-floating">
                            <input  className="form-control"
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={`${email}`}
                                    placeholder={`${config.tb_person.email.label}`}
                                    required={`${config.tb_person.email.required}`}
                                    onChange={(e) => {setEmail(e.target.value)}}
                            />
                            <label htmlFor="email">{config.tb_person.email.label}</label>
                          </div>
                        </div>
                      </div>
                  } 
                  <input  type="submit"
                          className={"btn btn-lg btn-block btn-primary bg-gradient my-4"}
                          value="Salvar"
                          
                  />
                </div>
              </form>
            </div>
          </div>
        </Card>
      </Container>
    )
}

export default RegisterPerson