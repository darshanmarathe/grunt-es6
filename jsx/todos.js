import { dom, Fragment } from "./mact/index.js";

import { Container } from "./todo_componets/index";

import initState from "./todo_componets/initialstate";

import FetchTodos from "./todo_componets/api";

export const BootTodo = (props, container = "root") => {
  initState.initTranslations();
  if (initState.state.todos.length === 0) {
    FetchTodos().then((d) => {
      initState.state.todos = initState.transformToVM(d);
      initState.setScrollEvent();
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
