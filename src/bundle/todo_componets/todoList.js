function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { dom, Fragment } from "../mact/index.js";
import { Todo } from "./index";
import initState from "./initialstate.js"; // TodoList Component

const TodoList = props => {
  console.log(props);
  return dom('Fragment', null, dom("ul", null, props.todos.map(x => {
    return dom(Todo, _extends({}, x, props));
  })), dom("button", {
    onClick: initState.actions.More
  }, "More ..."));
};

export default TodoList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2pzeC90b2RvX2NvbXBvbmV0cy90b2RvTGlzdC5qcyJdLCJuYW1lcyI6WyJkb20iLCJGcmFnbWVudCIsIlRvZG8iLCJpbml0U3RhdGUiLCJUb2RvTGlzdCIsInByb3BzIiwiY29uc29sZSIsImxvZyIsInRvZG9zIiwibWFwIiwieCIsImFjdGlvbnMiLCJNb3JlIl0sIm1hcHBpbmdzIjoiOztBQUFBLFNBQVNBLEdBQVQsRUFBY0MsUUFBZCxRQUE4QixrQkFBOUI7QUFFQSxTQUFTQyxJQUFULFFBQXFCLFNBQXJCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixtQkFBdEIsQyxDQUVBOztBQUNBLE1BQU1DLFFBQVEsR0FBSUMsS0FBRCxJQUFXO0FBQzFCQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNBLFNBQ0Usc0JBQ0UsZ0JBQ0dBLEtBQUssQ0FBQ0csS0FBTixDQUFZQyxHQUFaLENBQWlCQyxDQUFELElBQU87QUFDdEIsV0FBTyxJQUFDLElBQUQsZUFBVUEsQ0FBVixFQUFpQkwsS0FBakIsRUFBUDtBQUNELEdBRkEsQ0FESCxDQURGLEVBTUU7QUFBUSxJQUFBLE9BQU8sRUFBRUYsU0FBUyxDQUFDUSxPQUFWLENBQWtCQztBQUFuQyxnQkFORixDQURGO0FBVUQsQ0FaRDs7QUFjQSxlQUFlUixRQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZG9tLCBGcmFnbWVudCB9IGZyb20gXCIuLi9tYWN0L2luZGV4LmpzXCI7XHJcblxyXG5pbXBvcnQgeyBUb2RvIH0gZnJvbSBcIi4vaW5kZXhcIjtcclxuaW1wb3J0IGluaXRTdGF0ZSBmcm9tIFwiLi9pbml0aWFsc3RhdGUuanNcIjtcclxuXHJcbi8vIFRvZG9MaXN0IENvbXBvbmVudFxyXG5jb25zdCBUb2RvTGlzdCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnNvbGUubG9nKHByb3BzKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIHtwcm9wcy50b2Rvcy5tYXAoKHgpID0+IHtcclxuICAgICAgICAgIHJldHVybiA8VG9kbyB7Li4ueH0gey4uLnByb3BzfSAvPjtcclxuICAgICAgICB9KX1cclxuICAgICAgPC91bD5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtpbml0U3RhdGUuYWN0aW9ucy5Nb3JlfT5Nb3JlIC4uLjwvYnV0dG9uPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZG9MaXN0O1xyXG4iXX0=
//# sourceMappingURL=todoList.js.map
