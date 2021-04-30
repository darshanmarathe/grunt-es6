import actions from "../todoActions.js";

const initState = {
  __translation: {},
  state: {
    todos: [],
    placeholderText: "Enter a todo and hit enter",
    page: 1,
    pageSize: 4,
    ReachedMax: false,
    loading: false
  },
  statuses: ["Not Started", "Work in Progress", "Stuck", "Testing", "Done"],
  setState: function (obj, func = null) {
    this.state = { ...this.state, ...obj };
    console.log("setState after", this.state);
    BootTodo(this.state, "app");
    if (func) func();
  },
  setScrollEvent() {
    document.addEventListener("scroll", actions.More);
  },
  transformToVM: function (data) {
    data.forEach((todo) => {
      todo.isOpen = false;
    });
    return data;
  },
  initTranslations: function (key) {
    if (Object.keys(this.__translation).length === 0) {
      let translations = document.querySelectorAll('.trans')
      console.log(translations);
      translations.forEach(element => {
        let key, value = "";
        key = element.getAttribute('key');
        value = element.getAttribute('value');
        this.__translation[key] = value;
      });;
    }
  },
  translations: function () {
    var translations = this.__translation;
    return function (key, optValue = '') {
      return translations[key] === undefined ? (optValue === '' ? key : optValue) : translations[key]
    }
  },
  actions,
};

export default initState;
