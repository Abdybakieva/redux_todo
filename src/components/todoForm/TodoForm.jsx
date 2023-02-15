import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import TodoList from "../todoList/TodoList";

function TodoForm() {
  const todo = useSelector((state) => state.todo);
  console.log("todo", todo);
  console.log();
  return (
    <ContainerForm>
      <ul>
        <li>
          {todo.map((el) => {
            console.log("el", el);
            return <TodoList text={el.text} key={el.id} el={el} />;
          })}
        </li>
      </ul>
    </ContainerForm>
  );
}

export default TodoForm;

const ContainerForm=styled.div`
margin-top: -10px;
  background-color:#f1ecec;
  height: 100vh;
  ul{
    list-style: none;
  }
`
