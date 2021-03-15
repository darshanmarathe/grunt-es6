import { dom, Fragment } from "../mact/index.js";

import { TodoInput } from "./Index";
import initState from "./initialstate.js";
const i18n = initState.translations()

// Header Component
const Header = (props) => {

  return (
    <>
      <h1>{i18n('todoLabel')} {props.todos.length}</h1>
      <TodoInput
        placeholder={i18n('placeHolder')}
        {...props}
      />
    </>
  );
};

export default Header;
