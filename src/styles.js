import styled from "styled-components"

export const Container = styled.div`
    background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Box = styled.div`
    background-color: #FFFFFF;
    padding: 30px 20px;
    border-radius: 5px;
    width: min(90%, 520px);

    ul{
        margin-top: 50px;
    }
`

export const Funcoes = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
`

export const Input = styled.input`
    border: 2px solid rgba(209, 211, 212, 0.4);
    height: 40px;
    margin-right: 10px;
    border-radius: 5px;
    padding: 0 10px;
`

export const Button = styled.button`
    background-color: #8052EC;
    font-weight: 900;
    line-height: 2px;
    border: none;
    color: #FFFFFF;
    font-size: 17px;
    padding: 0 20px;
    border-radius: 5px;
    height: 40px;
    cursor: pointer;
`

export const Task = styled.div`
    background: ${ props => props.isFinished ? '#E8FF8B' : '#E4E4E4'};
    box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    min-height: 60px;
    height: auto;
    display: flex;
    align-items: center;
    margin-top: 20px;
    padding: 10px 20px;
    justify-content: space-between;
`

export const Dir = styled.div`
    margin-right: 20px;
    cursor: pointer;
`

export const Esq = styled.div`
    margin-left: 20px;
    cursor: pointer;
`

