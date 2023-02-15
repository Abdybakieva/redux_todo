import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { todoActionTypes } from "../../store/todosReducer/TodosReducer";
import Button from "../IU/Button";

function TodoList({ text, el }) {
  const [edit, setEdit] = useState(false);
  const [saveValue, setSaveValue] = useState("");
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch({ type: todoActionTypes.DELETE, payload: el.id });
  };

  const editHandler = () => {
    setEdit(true);
    setSaveValue(text);
  };

  const saveInputChange = (event) => {
    setSaveValue(event.target.value);
  };

  const completedBtnHandler = () => {
    dispatch({ type: todoActionTypes.COMPLETED, 
      payload: el.id });
  };
  const saveBtnHandler = () => {
    dispatch({
      type: todoActionTypes.EDIT,
      id: el.id,
      value: saveValue,
    });
    setEdit(false);
  };
  return (
    <ContainerList>
      {edit ? (
        <>
          <Edit>
            <Input type="text" onChange={saveInputChange} value={saveValue} />
            <Button onClick={saveBtnHandler}>save</Button>
          </Edit>
        </>
      ) : (
        <>
          <StyledComponents>
            {<p className={`${el.completed ? "hh" : "gg"}`}>{text}</p>}
            <Button onClick={editHandler}>edit</Button>
            <Button onClick={completedBtnHandler}>complited</Button>
            <Button onClick={deleteHandler}>delete</Button>
          </StyledComponents>
        </>
      )}
    </ContainerList>
  );
}

export default TodoList;


const Input = styled.input`
  width: 19vw;
  height: 5vh;
  border: none;
  border-radius: 7px;
  background-color: #daecec;
  border: 1px solid #e1e6e6;
`;

const ContainerList=styled.div`
  background-color: #dadadd;
  width: 600px;
  margin: auto;
  border-radius: 10px;
  margin-top: 40px;
  padding: 13px 20px;
`

const StyledComponents = styled.div`

 -webkit-box-shadow: 13px -6px 16px 6px rgba(34, 60, 80, 0.28);
-moz-box-shadow: 13px -6px 16px 6px rgba(34, 60, 80, 0.28);
box-shadow: 13px -6px 16px 6px rgba(34, 60, 80, 0.28);;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  gap: 1.5rem;
  .hh {
    text-decoration: line-through;
  }
 
`;

const Edit=styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
`