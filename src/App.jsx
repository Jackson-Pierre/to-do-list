import { Container, Box, Input, Button, Task, Funcoes, Dir, Esq } from "./styles"
import React, { useState } from "react"
import { v4 as uuid } from 'uuid'

import { FcEmptyTrash, FcCheckmark } from "react-icons/fc";
import { BsDisplay } from "react-icons/bs";
import { MdMargin } from "react-icons/md";

//<FcCheckmark />
//<FcEmptyTrash />

function App() {
  const [List, setList] = useState([{id: uuid(), task: "Nada", finish: false }])
  const [task, setTask] = useState("")

  function palavraAdicionnada(event) {
    setTask(event.target.value)    
  }

  function adicioneiPalavra() {
    setList([ ...List, {id: uuid(), task: task, finish: false}])
    
  }

  function terminei(id) {
    const newList = List.map(item => (
      item.id === id ? { ...item, finish: !item.finish} : item
    ))

    setList(newList)
  }

  return(
    <Container>
      <Box>
        <Funcoes>
          <Input onChange={palavraAdicionnada} placeholder="O que eu tenho que fazer..." type="text" />
          <Button onClick={adicioneiPalavra} >Adicionar</Button>
        </Funcoes>
        <ul>
          {
            List.map(item => (
              <Task  key={item.id} isFinished={item.finish}>
                  <Dir>
                    <FcCheckmark onClick={() => terminei(item.id)} /> 
                  </Dir>
                  <li>{item.task}</li>
                <Esq>
                  <FcEmptyTrash />
                </Esq>
              </Task>
            ))
          }
        </ul>
      </Box>
    </Container>
  )
}

export default App