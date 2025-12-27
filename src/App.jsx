import { Title } from "./styles"
import React, { useState } from "react"
import { v4 as uuid } from 'uuid'

function App() {
  const [List, setList] = useState([{id: uuid(), task: "Nada"}])
  const [task, setTask] = useState("")
//"Cuidar da Laislly", "Estudar React", "Estudar JS"

  function palavraAdicionnada(event) {
    setTask(event.target.value)    
  }

  function adicioneiPalavra() {
    setList([{id: uuid(), task: task}])
    
  }


  return(
    <>
      <input onChange={palavraAdicionnada} placeholder="O que eu tenho que fazer..." type="text" />
      <button onClick={adicioneiPalavra} >Adicionar</button>

      <ul>
        {
          List.map(item => (
            <li key={item.id}>{item.task}</li>
          ))
        }
      </ul>
    </>
  )
}

export default App