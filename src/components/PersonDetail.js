import React from 'react'

const PersonDetail = ({people}) => {
  return (
    <table className='table table-striped'>
        <thead>
            <tr>
                <th>Nome</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
            {
                people.map((p,i)=> (
                    <tr key={i}>
                        <td key={i}>{p.name}</td>
                        </tr>
                ))
            }
        </tbody>
    </table>
  )
}

export default PersonDetail