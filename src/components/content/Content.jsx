import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { todoActionTypes } from "../../store/todosReducer/TodosReducer";
import TodoForm from "../todoForm/TodoForm";
import Button from "../IU/Button";
import { actionsAuthTypes } from "../../store/authReducer/authReducer";
import { useNavigate } from "react-router-dom";
function Content() {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();
  const navigate=useNavigate()

  const LogoutBtn=(event)=>{
    event.preventDefault()
    dispatch({type:actionsAuthTypes.LOG_OUT})
    navigate("/login")
  }

  const changeHandler = (e) => {
    setInputText(e.target.value);
    
  };

  const buttonHandler = () => {
    dispatch({ type: todoActionTypes.ADD, payload: inputText });
 setInputText("");
  };

   const deleteAll = () => {
     dispatch({ type: todoActionTypes.DELETE_ALL });
   };
 
  return (
    <>
      <Div>
        <Button onClick={LogoutBtn}>Logout</Button>
      </Div>
      <Container>
        <Input type="text" value={inputText} onChange={changeHandler} />
        <Button onClick={buttonHandler}>ADD</Button>
        <Button onClick={deleteAll}>DELETE ALL</Button>
      </Container>
      <TodoForm />
    </>
  );
}

export default Content;


const Container = styled.div`
  margin: auto;
  width: 40%;
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 6rem;
  border: 1px solid #c0c9c9;
  background-color: #c0c9c9;
  border-radius: 20px;
`;
const Input = styled.input`
  width: 22vw;
  height: 5vh;
  border: none;
  border-radius: 7px;
  border: 1px solid #4c6161;
`;

const Div=styled.div`
  background-color: #949b9b;
  height: 60px;
  display:flex ;
  align-items: center;
  justify-content: center;
`