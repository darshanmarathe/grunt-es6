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
  return dom('Fragment', null, dom("ul", null, props.todos.map(x => {
    return dom(Todo, _extends({}, x, props));
  }), dom("li", null, "Done : ", ReachedMax.toString(), " PageNo : ", page, " , PageSize: ", pageSize, " Records: ", props.todos.length)), loading && dom("div", null, "Loading..... ", dom(Loading, null), " "), dom("br", null), initState.state.ReachedMax ? dom("button", {
    disabled: initState.ReachedMax,
    onClick: initState.actions.More
  }, i18n("moreBtn")) : dom("button", {
    onClick: initState.actions.More
  }, i18n("moreBtn")));
};

export default TodoList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2pzeC90b2RvX2NvbXBvbmV0cy90b2RvTGlzdC5qcyJdLCJuYW1lcyI6WyJkb20iLCJGcmFnbWVudCIsIlRvZG8iLCJMb2FkaW5nIiwiaW5pdFN0YXRlIiwiaTE4biIsInRyYW5zbGF0aW9ucyIsIlRvZG9MaXN0IiwicHJvcHMiLCJSZWFjaGVkTWF4IiwicGFnZSIsInBhZ2VTaXplIiwibG9hZGluZyIsInN0YXRlIiwidG9kb3MiLCJtYXAiLCJ4IiwidG9TdHJpbmciLCJsZW5ndGgiLCJhY3Rpb25zIiwiTW9yZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxTQUFTQSxHQUFULEVBQWNDLFFBQWQsUUFBOEIsa0JBQTlCO0FBRUEsU0FBU0MsSUFBVCxFQUFnQkMsT0FBaEIsUUFBK0IsU0FBL0I7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLG1CQUF0QjtBQUNBLE1BQU1DLElBQUksR0FBSUQsU0FBUyxDQUFDRSxZQUFWLEVBQWQsQyxDQUNBOztBQUNBLE1BQU1DLFFBQVEsR0FBSUMsS0FBRCxJQUFXO0FBQzFCLE1BQUk7QUFBQ0MsSUFBQUEsVUFBRDtBQUFjQyxJQUFBQSxJQUFkO0FBQXFCQyxJQUFBQSxRQUFyQjtBQUFnQ0MsSUFBQUE7QUFBaEMsTUFBMkNSLFNBQVMsQ0FBQ1MsS0FBekQ7QUFDQSxTQUNFLHNCQUNFLGdCQUNHTCxLQUFLLENBQUNNLEtBQU4sQ0FBWUMsR0FBWixDQUFpQkMsQ0FBRCxJQUFPO0FBQ3RCLFdBQU8sSUFBQyxJQUFELGVBQVVBLENBQVYsRUFBaUJSLEtBQWpCLEVBQVA7QUFDRCxHQUZBLENBREgsRUFJRCwyQkFBWUMsVUFBVSxDQUFDUSxRQUFYLEVBQVosZ0JBQTZDUCxJQUE3QyxtQkFBZ0VDLFFBQWhFLGdCQUFvRkgsS0FBSyxDQUFDTSxLQUFOLENBQVlJLE1BQWhHLENBSkMsQ0FERixFQU9FTixPQUFPLElBQUksa0NBQWtCLElBQUMsT0FBRCxPQUFsQixNQVBiLEVBUUMsZUFSRCxFQVVJUixTQUFTLENBQUNTLEtBQVYsQ0FBZ0JKLFVBQWhCLEdBQ0E7QUFDQSxJQUFBLFFBQVEsRUFBRUwsU0FBUyxDQUFDSyxVQURwQjtBQUVELElBQUEsT0FBTyxFQUFFTCxTQUFTLENBQUNlLE9BQVYsQ0FBa0JDO0FBRjFCLEtBRWlDZixJQUFJLENBQUMsU0FBRCxDQUZyQyxDQURBLEdBS0E7QUFDQSxJQUFBLE9BQU8sRUFBRUQsU0FBUyxDQUFDZSxPQUFWLENBQWtCQztBQUQzQixLQUNrQ2YsSUFBSSxDQUFDLFNBQUQsQ0FEdEMsQ0FmSixDQURGO0FBc0JELENBeEJEOztBQTBCQSxlQUFlRSxRQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZG9tLCBGcmFnbWVudCB9IGZyb20gXCIuLi9tYWN0L2luZGV4LmpzXCI7XHJcblxyXG5pbXBvcnQgeyBUb2RvICwgTG9hZGluZyB9IGZyb20gXCIuL2luZGV4XCI7XHJcbmltcG9ydCBpbml0U3RhdGUgZnJvbSBcIi4vaW5pdGlhbHN0YXRlLmpzXCI7XHJcbmNvbnN0IGkxOG4gID0gaW5pdFN0YXRlLnRyYW5zbGF0aW9ucygpO1xyXG4vLyBUb2RvTGlzdCBDb21wb25lbnRcclxuY29uc3QgVG9kb0xpc3QgPSAocHJvcHMpID0+IHtcclxuICBsZXQge1JlYWNoZWRNYXggLCBwYWdlICwgcGFnZVNpemUgLCBsb2FkaW5nfSA9IGluaXRTdGF0ZS5zdGF0ZTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIHtwcm9wcy50b2Rvcy5tYXAoKHgpID0+IHtcclxuICAgICAgICAgIHJldHVybiA8VG9kbyB7Li4ueH0gey4uLnByb3BzfSAvPjtcclxuICAgICAgICB9KX1cclxuICAgICA8bGk+RG9uZSA6IHtSZWFjaGVkTWF4LnRvU3RyaW5nKCl9IFBhZ2VObyA6IHtwYWdlfSAsIFBhZ2VTaXplOiB7cGFnZVNpemV9IFJlY29yZHM6IHtwcm9wcy50b2Rvcy5sZW5ndGh9PC9saT5cclxuICAgICAgPC91bD5cclxuICAgICB7bG9hZGluZyAmJiA8ZGl2PkxvYWRpbmcuLi4uLiA8TG9hZGluZyAvPiA8L2Rpdj59XHJcbiAgICAgPGJyIC8+XHJcbiAgICAgIHtcclxuICAgICAgICBpbml0U3RhdGUuc3RhdGUuUmVhY2hlZE1heCA/IFxyXG4gICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgZGlzYWJsZWQ9e2luaXRTdGF0ZS5SZWFjaGVkTWF4fVxyXG4gICAgICAgb25DbGljaz17aW5pdFN0YXRlLmFjdGlvbnMuTW9yZX0+e2kxOG4oXCJtb3JlQnRuXCIpfTwvYnV0dG9uPlxyXG4gICAgICAgIDpcclxuICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgIG9uQ2xpY2s9e2luaXRTdGF0ZS5hY3Rpb25zLk1vcmV9PntpMThuKFwibW9yZUJ0blwiKX08L2J1dHRvbj5cclxuXHJcbiAgICAgIH1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2RvTGlzdDtcclxuIl19
//# sourceMappingURL=todoList.js.map
