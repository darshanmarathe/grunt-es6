import { dom, Fragment } from "../mact/index.js";

import { Todo } from "./index";

// TodoList Component
const TodoList = (props) => {
  console.log(props);
  return (
    <>
      <ul>
        {props.todos.map((x) => {
          return <Todo {...x} {...props} />;
        })}
      </ul>
    </>
  );
};

export default TodoList;
