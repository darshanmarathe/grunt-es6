import { initState } from "./todo_componets/index.js";

import FetchTodos from "./todo_componets/api.js";

const actions = {
  HandleDelete(id) {
    var settings = {
      url: "http://localhost:3000/todos/" + id,
      method: "DELETE",
      timeout: 0,
      headers: {
        "Content-Type": "application/json",
      },
    };

    $.ajax(settings).done((response) => {
      let todos = initState.state.todos.filter((x) => x.id != id);
      initState.setState({ todos: [...todos] });
    });
  },

  HandleStatus(todo) {
    var obj = {};
    obj.id = todo.id;
    obj.status = todo.status;
    obj.done = todo.done;
    obj.isOpen = false;
    var settings = {
      url: "http://localhost:3000/todos/" + todo.id,
      method: "PUT",
      timeout: 0,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(obj),
    };

    $.ajax(settings).done((response) => {
      console.log(response);
      let todos = initState.state.todos.map((x) => {
        if (x.id == response.id) {
          return response;
        } else {
          return x;
        }
      });
      initState.setState({ todos: [...todos] });
    });
  },
  HandleChange(todo) {
    console.log(todo)
    var settings = {
      url: "http://localhost:3000/todos/" + todo.id,
      method: "PUT",
      timeout: 0,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(todo),
    };

    $.ajax(settings).done((response) => {
      let todos = initState.state.todos.map((x) => {
        if (x.id == response.id) {
          return response;
        } else {
          return x;
        }
      });
      initState.setState({ todos: [...todos] });
    });
  },
  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  },
  HandleAdd(e) {
    var obj = {};
    obj.title = e.str;
    obj.done = false;
    obj.desc = "";
    obj.date = e.date;
    obj.status = "Not Started";
    obj.color = this.getRandomColor();
    console.log(obj);
    var settings = {
      url: "http://localhost:3000/todos",
      method: "POST",
      timeout: 0,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(obj),
    };

    $.ajax(settings).done((response) => {
      initState.setState({ todos: [response, ...initState.state.todos] });
      toastr.success("saved....");
    });
  },
  HandleOpenClose(todo) {
    todo.isOpen = !todo.isOpen;
    console.log(('#' + "todo_" + todo.id));
    let todos = initState.state.todos.map((x) => {
      if (x.id == todo.id) {
        return todo;
      } else {
        return x;
      }
    });
    initState.setState({ todos: [...todos] });

  },
  More() {
    let { page, pageSize, todos, ReachedMax } = initState.state;
    if (ReachedMax || initState.state.loading) return;
    page = page + 1;
    initState.setState({ loading: true })
    FetchTodos(page, pageSize).then((d) => {
      initState.setState({
        page,
        todos: [...todos, ...d]
        , ReachedMax: d.length < pageSize
        , loading: false
      });
    });
  },
};

export default actions;
