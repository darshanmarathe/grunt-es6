import { dom, Fragment } from "../mact/index.js";

import { initState } from "./index";
// TodoInput Component
const TodoInput = (props) => {
  return (
    <input
      type="text"
      style={{ width: "100%" }}
      onChange={initState.actions.HandleAdd}
      placeholder={props.placeholder}
    />
  );
};

export default TodoInput;
