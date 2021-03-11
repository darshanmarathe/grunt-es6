import { dom, Fragment } from "../mact/index.js";

import { TodoInput } from "./Index";
// Header Component
const Header = (props) => {
  return (
    <>
      <h1>Todos {props.todos.length}</h1>
      <TodoInput
        placeholder={props.placeholderText}
        // HandleAdd={props.HandleAdd}
        {...props}
      />
    </>
  );
};

export default Header;
