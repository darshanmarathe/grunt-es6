import { dom, Fragment } from "../mact/index.js";

import { Todo } from "./index";
import initState from "./initialstate.js";
const i18n  = initState.translations();
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
      <button onClick={initState.actions.More}>{i18n("moreBtn")}</button>
    </>
  );
};

export default TodoList;
