/** @format */

import React, { useRef, useContext } from "react";
import { TodosContext } from "../store/todo-context";
import styles from "./NewTodo.module.css";
const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  //onAddTodo가 함수이냐? 함수라면 어떤값(text:string)을 받느냐? 그렇다면 반환값이 있느냐? x(void)
  const todoTextInputRef = useRef<HTMLInputElement>(null); //useRef이 어느것을 가리키는지 타입을 지정하고 기본값을 작성해야한다.
  const submitHendler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value; //값이 정해져 있지 않을 수 있기 때문에 ?가 붙음 레퍼런스의 요소값이 null이 아닌게 확실하다면 !를 붙인다.
    if (enteredText.trim().length === 0) {
      return;
    }
    todosCtx.addTodo(enteredText);
  }; //타입은 form의submit이벤트 이기 때문에 formEvent로 해준다. mouseEvent면 mouseEvent라고 써주면
  return (
    <form className={styles.form} onSubmit={submitHendler}>
      <label className={styles.label} htmlFor="text"></label>
      <input
        className={styles.input}
        type="text"
        id="text"
        ref={todoTextInputRef}
      />
      <button className={styles.button}>Add Todo</button>
    </form>
  );
};

export default NewTodo;
