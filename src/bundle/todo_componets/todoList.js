function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { dom, Fragment } from "../mact/index.js";
import { Todo } from "./index";
import initState from "./initialstate.js";
const i18n = initState.translations(); // TodoList Component

const TodoList = props => {
  console.log(props);
  return dom('Fragment', null, dom("ul", null, props.todos.map(x => {
    return dom(Todo, _extends({}, x, props));
  })), dom("button", {
    onClick: initState.actions.More
  }, i18n("moreBtn")));
};

export default TodoList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2pzeC90b2RvX2NvbXBvbmV0cy90b2RvTGlzdC5qcyJdLCJuYW1lcyI6WyJkb20iLCJGcmFnbWVudCIsIlRvZG8iLCJpbml0U3RhdGUiLCJpMThuIiwidHJhbnNsYXRpb25zIiwiVG9kb0xpc3QiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJ0b2RvcyIsIm1hcCIsIngiLCJhY3Rpb25zIiwiTW9yZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxTQUFTQSxHQUFULEVBQWNDLFFBQWQsUUFBOEIsa0JBQTlCO0FBRUEsU0FBU0MsSUFBVCxRQUFxQixTQUFyQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsbUJBQXRCO0FBQ0EsTUFBTUMsSUFBSSxHQUFJRCxTQUFTLENBQUNFLFlBQVYsRUFBZCxDLENBQ0E7O0FBQ0EsTUFBTUMsUUFBUSxHQUFJQyxLQUFELElBQVc7QUFDMUJDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0EsU0FDRSxzQkFDRSxnQkFDR0EsS0FBSyxDQUFDRyxLQUFOLENBQVlDLEdBQVosQ0FBaUJDLENBQUQsSUFBTztBQUN0QixXQUFPLElBQUMsSUFBRCxlQUFVQSxDQUFWLEVBQWlCTCxLQUFqQixFQUFQO0FBQ0QsR0FGQSxDQURILENBREYsRUFNRTtBQUFRLElBQUEsT0FBTyxFQUFFSixTQUFTLENBQUNVLE9BQVYsQ0FBa0JDO0FBQW5DLEtBQTBDVixJQUFJLENBQUMsU0FBRCxDQUE5QyxDQU5GLENBREY7QUFVRCxDQVpEOztBQWNBLGVBQWVFLFFBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkb20sIEZyYWdtZW50IH0gZnJvbSBcIi4uL21hY3QvaW5kZXguanNcIjtcclxuXHJcbmltcG9ydCB7IFRvZG8gfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5pbXBvcnQgaW5pdFN0YXRlIGZyb20gXCIuL2luaXRpYWxzdGF0ZS5qc1wiO1xyXG5jb25zdCBpMThuICA9IGluaXRTdGF0ZS50cmFuc2xhdGlvbnMoKTtcclxuLy8gVG9kb0xpc3QgQ29tcG9uZW50XHJcbmNvbnN0IFRvZG9MaXN0ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc29sZS5sb2cocHJvcHMpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAge3Byb3BzLnRvZG9zLm1hcCgoeCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIDxUb2RvIHsuLi54fSB7Li4ucHJvcHN9IC8+O1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2luaXRTdGF0ZS5hY3Rpb25zLk1vcmV9PntpMThuKFwibW9yZUJ0blwiKX08L2J1dHRvbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2RvTGlzdDtcclxuIl19
//# sourceMappingURL=todoList.js.map
