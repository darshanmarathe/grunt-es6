import { dom, Fragment } from "../mact/index.js";
import { initState } from "./index";

import { Header, TodoList } from "./index";
// Container Component
function Container(props) {
  initState.state = { ...initState.state, ...props };
  return (
    <>
      <Header {...props} />
      <hr />
      <TodoList {...props} />
    </>
  );
}

export default Container;
