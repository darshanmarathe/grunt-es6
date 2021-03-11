import { dom, Fragment } from "./mact/index.js";

import { Container } from "./todo_componets/index";

import initState from "./todo_componets/initialstate";
function FetchTodos() {
  const url = "http://localhost:3000/todos";
  return new Promise((resolve, reject) => {
    $.get(url).then((d) => {
      resolve(d);
    });
  });
}

export const BootTodo = (props, container = "root") => {
  if (initState.state.todos.length === 0) {
    FetchTodos().then((d) => {
      initState.state.todos = d;
      document.getElementById(container).innerHTML = "";
      document
        .getElementById(container)
        .appendChild(<Container {...initState.state} />);
    });
  } else {
    props = initState.state;
    document.getElementById(container).innerHTML = "";
    document.getElementById(container).appendChild(<Container {...props} />);
  }
};
