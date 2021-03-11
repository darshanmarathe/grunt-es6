import { initState } from "./todo_componets/index";
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

  HandleDone(todo) {
    var obj = {};
    obj.id = todo.id;
    obj.done = !todo.done;
    console.log(obj);
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
  HandleChange(todo){
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
  HandleAdd(e) {
    var obj = {};
    obj.title = e.target.value;
    obj.done = false;
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
      initState.setState({ todos: [...initState.state.todos, response] });
      alert("saved....");
    });
  },
  HandleOpenClose(todo){
    todo.isOpen = !todo.isOpen;
    let todos = initState.state.todos.map((x) => {
      if (x.id == todo.id) {
        return todo;
      } else {
        return x;
      }
    });
    initState.setState({ todos: [...todos] });    
  }
};

export default actions;
