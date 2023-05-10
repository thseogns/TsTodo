/** @format */

import React from "react";
import styles from "./TodoItem.module.css";
const TodoItems: React.FC<{
  onClick: () => void;
  text: string;
}> = (props) => {
  return (
    <li onClick={props.onClick} className={styles.item}>
      {props.text}
    </li>
  );
};
export default TodoItems;
