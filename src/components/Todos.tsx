/** @format */

import React, { useContext } from "react";

import TodoItems from "./TodoItems";
import { TodosContext } from "../store/todo-context";
import styles from "./Todos.module.css";
const Todos: React.FC = (props) => {
  // Todo 클래스 안에있는 객체를 가져온다?x
  //정의된 FC(functionComponent)안에있는 제네릭을 명시해주는 과정
  const todoCtx = useContext(TodosContext);
  return (
    <ul className={styles.todos}>
      {todoCtx.items.map((item) => (
        <TodoItems
          onClick={todoCtx.deleteHandler.bind(null, item.id)}
          key={item.id}
          text={item.text}
        />
      ))}
    </ul>
  );
};

export default Todos;
