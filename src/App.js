import React from 'react'

import RegisterUnit from './views/RegisterUnit'
import RegisterPerson from './views/RegisterPerson'

function App() {
    const config =  {
        "tb_person":{
          "active" :true,
          "name": {"active" : true, "required": "yes", "label":"Nome"},
          "doc_rg": {"active" : true, "required": "yes", "label":"RG"},
          "doc_cpf": {"active" : true, "required": "yes", "label":"CPF"},
          "birthday": {"active" : false, "required": "yes", "label":"Data Nascimento"},
          "email": {"active" : true, "required": "yes", "label":"E-mail"},

        },
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
      <>
          <RegisterUnit config={config} />
          <RegisterPerson config={config}/>
      </>
      )
  }
  
  export default App;
  
