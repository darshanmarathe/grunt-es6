function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { dom, Fragment } from "../mact/index.js";
import { Todo, Loading } from "./index";
import initState from "./initialstate.js";
const i18n = initState.translations(); // TodoList Component

const TodoList = props => {
  let {
    ReachedMax,
    page,
    pageSize,
    loading
  } = initState.state;
  return dom('Fragment', null, dom("div", {
    class: "parent"
  }, props.todos.map(x => {
    return dom(Todo, _extends({}, x, props));
  })), dom("div", null, dom("br", null), dom("p", null, "Done : ", ReachedMax.toString(), " PageNo : ", page, " , PageSize: ", pageSize, " Records: ", props.todos.length), loading && dom("div", null, "Loading..... ", dom(Loading, null), " "), dom("br", null), initState.state.ReachedMax ? dom("button", {
    disabled: initState.ReachedMax,
    onClick: initState.actions.More
  }, i18n("moreBtn")) : dom("button", {
    onClick: initState.actions.More
  }, i18n("moreBtn"))));
};

export default TodoList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2pzeC90b2RvX2NvbXBvbmV0cy90b2RvTGlzdC5qcyJdLCJuYW1lcyI6WyJkb20iLCJGcmFnbWVudCIsIlRvZG8iLCJMb2FkaW5nIiwiaW5pdFN0YXRlIiwiaTE4biIsInRyYW5zbGF0aW9ucyIsIlRvZG9MaXN0IiwicHJvcHMiLCJSZWFjaGVkTWF4IiwicGFnZSIsInBhZ2VTaXplIiwibG9hZGluZyIsInN0YXRlIiwidG9kb3MiLCJtYXAiLCJ4IiwidG9TdHJpbmciLCJsZW5ndGgiLCJhY3Rpb25zIiwiTW9yZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxTQUFTQSxHQUFULEVBQWNDLFFBQWQsUUFBOEIsa0JBQTlCO0FBRUEsU0FBU0MsSUFBVCxFQUFlQyxPQUFmLFFBQThCLFNBQTlCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixtQkFBdEI7QUFDQSxNQUFNQyxJQUFJLEdBQUdELFNBQVMsQ0FBQ0UsWUFBVixFQUFiLEMsQ0FDQTs7QUFDQSxNQUFNQyxRQUFRLEdBQUlDLEtBQUQsSUFBVztBQUMxQixNQUFJO0FBQUVDLElBQUFBLFVBQUY7QUFBY0MsSUFBQUEsSUFBZDtBQUFvQkMsSUFBQUEsUUFBcEI7QUFBOEJDLElBQUFBO0FBQTlCLE1BQTBDUixTQUFTLENBQUNTLEtBQXhEO0FBQ0EsU0FDQyxzQkFDQTtBQUFLLElBQUEsS0FBSyxFQUFDO0FBQVgsS0FDSUwsS0FBSyxDQUFDTSxLQUFOLENBQVlDLEdBQVosQ0FBaUJDLENBQUQsSUFBTztBQUN0QixXQUFPLElBQUMsSUFBRCxlQUFVQSxDQUFWLEVBQWlCUixLQUFqQixFQUFQO0FBQ0QsR0FGQSxDQURKLENBREEsRUFPQyxpQkFDQSxlQURBLEVBRUEsMEJBQVdDLFVBQVUsQ0FBQ1EsUUFBWCxFQUFYLGdCQUE0Q1AsSUFBNUMsbUJBQStEQyxRQUEvRCxnQkFBbUZILEtBQUssQ0FBQ00sS0FBTixDQUFZSSxNQUEvRixDQUZBLEVBSUNOLE9BQU8sSUFBSSxrQ0FBa0IsSUFBQyxPQUFELE9BQWxCLE1BSlosRUFLQSxlQUxBLEVBT0VSLFNBQVMsQ0FBQ1MsS0FBVixDQUFnQkosVUFBaEIsR0FDRTtBQUNFLElBQUEsUUFBUSxFQUFFTCxTQUFTLENBQUNLLFVBRHRCO0FBRUUsSUFBQSxPQUFPLEVBQUVMLFNBQVMsQ0FBQ2UsT0FBVixDQUFrQkM7QUFGN0IsS0FFb0NmLElBQUksQ0FBQyxTQUFELENBRnhDLENBREYsR0FLRTtBQUNFLElBQUEsT0FBTyxFQUFFRCxTQUFTLENBQUNlLE9BQVYsQ0FBa0JDO0FBRDdCLEtBQ29DZixJQUFJLENBQUMsU0FBRCxDQUR4QyxDQVpKLENBUEQsQ0FERDtBQTJCRCxDQTdCRDs7QUErQkEsZUFBZUUsUUFBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRvbSwgRnJhZ21lbnQgfSBmcm9tIFwiLi4vbWFjdC9pbmRleC5qc1wiO1xyXG5cclxuaW1wb3J0IHsgVG9kbywgTG9hZGluZyB9IGZyb20gXCIuL2luZGV4XCI7XHJcbmltcG9ydCBpbml0U3RhdGUgZnJvbSBcIi4vaW5pdGlhbHN0YXRlLmpzXCI7XHJcbmNvbnN0IGkxOG4gPSBpbml0U3RhdGUudHJhbnNsYXRpb25zKCk7XHJcbi8vIFRvZG9MaXN0IENvbXBvbmVudFxyXG5jb25zdCBUb2RvTGlzdCA9IChwcm9wcykgPT4ge1xyXG4gIGxldCB7IFJlYWNoZWRNYXgsIHBhZ2UsIHBhZ2VTaXplLCBsb2FkaW5nIH0gPSBpbml0U3RhdGUuc3RhdGU7XHJcbiAgcmV0dXJuIChcclxuICAgPD5cclxuICAgPGRpdiBjbGFzcz1cInBhcmVudFwiPlxyXG4gICAgICB7cHJvcHMudG9kb3MubWFwKCh4KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIDxUb2RvIHsuLi54fSB7Li4ucHJvcHN9IC8+O1xyXG4gICAgICB9KX1cclxuICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXY+XHJcbiAgICA8YnIgLz5cclxuICAgIDxwPkRvbmUgOiB7UmVhY2hlZE1heC50b1N0cmluZygpfSBQYWdlTm8gOiB7cGFnZX0gLCBQYWdlU2l6ZToge3BhZ2VTaXplfSBSZWNvcmRzOiB7cHJvcHMudG9kb3MubGVuZ3RofTwvcD5cclxuXHJcbiAgICB7bG9hZGluZyAmJiA8ZGl2PkxvYWRpbmcuLi4uLiA8TG9hZGluZyAvPiA8L2Rpdj59XHJcbiAgICA8YnIgLz5cclxuICAgIHtcclxuICAgICAgaW5pdFN0YXRlLnN0YXRlLlJlYWNoZWRNYXggP1xyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGRpc2FibGVkPXtpbml0U3RhdGUuUmVhY2hlZE1heH1cclxuICAgICAgICAgIG9uQ2xpY2s9e2luaXRTdGF0ZS5hY3Rpb25zLk1vcmV9PntpMThuKFwibW9yZUJ0blwiKX08L2J1dHRvbj5cclxuICAgICAgICA6XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17aW5pdFN0YXRlLmFjdGlvbnMuTW9yZX0+e2kxOG4oXCJtb3JlQnRuXCIpfTwvYnV0dG9uPlxyXG5cclxuICAgIH1cclxuICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZG9MaXN0O1xyXG4iXX0=
//# sourceMappingURL=todoList.js.map
