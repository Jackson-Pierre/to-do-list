import { Container, Box, Input, Button, Task, Funcoes } from "./styles"
import React, { useState } from "react"
import { v4 as uuid } from 'uuid'

import { FcEmptyTrash, FcCheckmark } from "react-icons/fc";
import { BsDisplay } from "react-icons/bs";
import { MdMargin } from "react-icons/md";

//<FcCheckmark />
//<FcEmptyTrash />

function App() {
  const [List, setList] = useState([{id: uuid(), task: "Nada"}])
  const [task, setTask] = useState("")

  function palavraAdicionnada(event) {
    setTask(event.target.value)    
  }

  function adicioneiPalavra() {
    setList([ ...List, {id: uuid(), task: task}])
    
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
              <Task>
                  <FcCheckmark style={{marginRight: "10px"}} />
                  <li key={item.id}>{item.task}</li>
                <FcEmptyTrash style={{marginLeft: "10px"}} />
              </Task>
            ))
          }
        </ul>
      </Box>
    </Container>
  )
}

export default App