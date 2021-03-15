import { dom, Fragment } from "../mact/index.js";

import { Todo } from "./index";
import initState from "./initialstate.js";

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
      <button onClick={initState.actions.More}>More ...</button>
    </>
  );
};

export default TodoList;
