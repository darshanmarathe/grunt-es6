import actions from "../todoActions";


const initState = {
  state: {
    todos: [],
    placeholderText: "Enter a todo and hit enter",
  },
  setState: function (obj, func = null) {
    this.state = { ...this.state, ...obj };
    console.log("setState after", this.state);
    BootTodo(this.state, "app");
  },
  transformToVM: function (data) {
    data.forEach(todo => {
      todo.isOpen = false
    });
    return data;
  },
  actions,
};

export default initState;
