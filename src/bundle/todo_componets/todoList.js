function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { dom, Fragment } from "../mact/index.js";
import { Todo } from "./index"; // TodoList Component

const TodoList = props => {
  console.log(props);
  return dom('Fragment', null, dom("ul", null, props.todos.map(x => {
    return dom(Todo, _extends({}, x, props));
  })));
};

export default TodoList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2pzeC90b2RvX2NvbXBvbmV0cy90b2RvTGlzdC5qcyJdLCJuYW1lcyI6WyJkb20iLCJGcmFnbWVudCIsIlRvZG8iLCJUb2RvTGlzdCIsInByb3BzIiwiY29uc29sZSIsImxvZyIsInRvZG9zIiwibWFwIiwieCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxTQUFTQSxHQUFULEVBQWNDLFFBQWQsUUFBOEIsa0JBQTlCO0FBRUEsU0FBU0MsSUFBVCxRQUFxQixTQUFyQixDLENBRUE7O0FBQ0EsTUFBTUMsUUFBUSxHQUFJQyxLQUFELElBQVc7QUFDMUJDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0EsU0FDRSxzQkFDRSxnQkFDR0EsS0FBSyxDQUFDRyxLQUFOLENBQVlDLEdBQVosQ0FBaUJDLENBQUQsSUFBTztBQUN0QixXQUFPLElBQUMsSUFBRCxlQUFVQSxDQUFWLEVBQWlCTCxLQUFqQixFQUFQO0FBQ0QsR0FGQSxDQURILENBREYsQ0FERjtBQVNELENBWEQ7O0FBYUEsZUFBZUQsUUFBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRvbSwgRnJhZ21lbnQgfSBmcm9tIFwiLi4vbWFjdC9pbmRleC5qc1wiO1xyXG5cclxuaW1wb3J0IHsgVG9kbyB9IGZyb20gXCIuL2luZGV4XCI7XHJcblxyXG4vLyBUb2RvTGlzdCBDb21wb25lbnRcclxuY29uc3QgVG9kb0xpc3QgPSAocHJvcHMpID0+IHtcclxuICBjb25zb2xlLmxvZyhwcm9wcyk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7cHJvcHMudG9kb3MubWFwKCh4KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gPFRvZG8gey4uLnh9IHsuLi5wcm9wc30gLz47XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9kb0xpc3Q7XHJcbiJdfQ==
//# sourceMappingURL=todoList.js.map
