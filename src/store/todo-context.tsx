/** @format */

import React, { useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  deleteHandler: (id: string) => void;
};
export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  deleteHandler: (id: string) => {},
});
type TodosContextProviderProps = {
  children: React.ReactNode;
};

const TodosContextProvider: React.FC<TodosContextProviderProps> = (props) => {
  // const todos = [
  //   new Todo(
  //     "이값이 Todo Class로 들어가서 타입이 Todo인 스트링값을 만들었다구~"
  //   ),
  //   new Todo("타입스크립트 스트링값"),
  // ]; //타입이 Tooo인 값 2개 생성
  // //배열을 투두스 컴포넌트로 props해줌
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevTodo) => {
      return prevTodo.concat(newTodo); // 값을 concat으로 복사해서 직접적으로 바꿔줌 왜이렇게하지??
    });
  };
  const deleteHandler = (todoId: string) => {
    console.log(todoId);
    setTodos((prevTodo) => {
      return prevTodo.filter((todo) => {
        return todo.id !== todoId;
      });
    });
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    deleteHandler: deleteHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};
export default TodosContextProvider;
