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
  }, initState.statuses.map(x => {
    return dom("div", {
      style: {
        width: '100%'
      }
    }, dom("h4", null, x), props.todos.filter(t => t.status === x).map(ft => {
      return dom(Todo, _extends({}, ft, props));
    }));
  })), dom("div", null, dom("br", null), dom("p", null, "Done : ", ReachedMax.toString(), " PageNo : ", page, " , PageSize: ", pageSize, " Records: ", props.todos.length), loading && dom("div", null, "Loading..... ", dom(Loading, null), " "), dom("br", null), initState.state.ReachedMax ? dom("button", {
    disabled: initState.ReachedMax,
    onClick: initState.actions.More
  }, i18n("moreBtn")) : dom("button", {
    onClick: initState.actions.More
  }, i18n("moreBtn"))));
};

export default TodoList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2pzeC90b2RvX2NvbXBvbmV0cy90b2RvTGlzdC5qcyJdLCJuYW1lcyI6WyJkb20iLCJGcmFnbWVudCIsIlRvZG8iLCJMb2FkaW5nIiwiaW5pdFN0YXRlIiwiaTE4biIsInRyYW5zbGF0aW9ucyIsIlRvZG9MaXN0IiwicHJvcHMiLCJSZWFjaGVkTWF4IiwicGFnZSIsInBhZ2VTaXplIiwibG9hZGluZyIsInN0YXRlIiwic3RhdHVzZXMiLCJtYXAiLCJ4Iiwid2lkdGgiLCJ0b2RvcyIsImZpbHRlciIsInQiLCJzdGF0dXMiLCJmdCIsInRvU3RyaW5nIiwibGVuZ3RoIiwiYWN0aW9ucyIsIk1vcmUiXSwibWFwcGluZ3MiOiI7O0FBQUEsU0FBU0EsR0FBVCxFQUFjQyxRQUFkLFFBQThCLGtCQUE5QjtBQUVBLFNBQVNDLElBQVQsRUFBZUMsT0FBZixRQUE4QixTQUE5QjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsbUJBQXRCO0FBQ0EsTUFBTUMsSUFBSSxHQUFHRCxTQUFTLENBQUNFLFlBQVYsRUFBYixDLENBQ0E7O0FBQ0EsTUFBTUMsUUFBUSxHQUFJQyxLQUFELElBQVc7QUFDMUIsTUFBSTtBQUFFQyxJQUFBQSxVQUFGO0FBQWNDLElBQUFBLElBQWQ7QUFBb0JDLElBQUFBLFFBQXBCO0FBQThCQyxJQUFBQTtBQUE5QixNQUEwQ1IsU0FBUyxDQUFDUyxLQUF4RDtBQUNBLFNBQ0Usc0JBQ0U7QUFBSyxJQUFBLEtBQUssRUFBQztBQUFYLEtBR0lULFNBQVMsQ0FBQ1UsUUFBVixDQUFtQkMsR0FBbkIsQ0FBd0JDLENBQUQsSUFBTztBQUM1QixXQUFPO0FBQUssTUFBQSxLQUFLLEVBQUU7QUFBRUMsUUFBQUEsS0FBSyxFQUFFO0FBQVQ7QUFBWixPQUNMLGdCQUFLRCxDQUFMLENBREssRUFFSlIsS0FBSyxDQUFDVSxLQUFOLENBQVlDLE1BQVosQ0FBb0JDLENBQUQsSUFBT0EsQ0FBQyxDQUFDQyxNQUFGLEtBQWFMLENBQXZDLEVBQTBDRCxHQUExQyxDQUErQ08sRUFBRCxJQUFRO0FBQ3JELGFBQU8sSUFBQyxJQUFELGVBQVVBLEVBQVYsRUFBa0JkLEtBQWxCLEVBQVA7QUFDRCxLQUZBLENBRkksQ0FBUDtBQVFELEdBVEQsQ0FISixDQURGLEVBa0JFLGlCQUNFLGVBREYsRUFFRSwwQkFBV0MsVUFBVSxDQUFDYyxRQUFYLEVBQVgsZ0JBQTRDYixJQUE1QyxtQkFBK0RDLFFBQS9ELGdCQUFtRkgsS0FBSyxDQUFDVSxLQUFOLENBQVlNLE1BQS9GLENBRkYsRUFJR1osT0FBTyxJQUFJLGtDQUFrQixJQUFDLE9BQUQsT0FBbEIsTUFKZCxFQUtFLGVBTEYsRUFPSVIsU0FBUyxDQUFDUyxLQUFWLENBQWdCSixVQUFoQixHQUNFO0FBQ0UsSUFBQSxRQUFRLEVBQUVMLFNBQVMsQ0FBQ0ssVUFEdEI7QUFFRSxJQUFBLE9BQU8sRUFBRUwsU0FBUyxDQUFDcUIsT0FBVixDQUFrQkM7QUFGN0IsS0FFb0NyQixJQUFJLENBQUMsU0FBRCxDQUZ4QyxDQURGLEdBS0U7QUFDRSxJQUFBLE9BQU8sRUFBRUQsU0FBUyxDQUFDcUIsT0FBVixDQUFrQkM7QUFEN0IsS0FDb0NyQixJQUFJLENBQUMsU0FBRCxDQUR4QyxDQVpOLENBbEJGLENBREY7QUFzQ0QsQ0F4Q0Q7O0FBMENBLGVBQWVFLFFBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkb20sIEZyYWdtZW50IH0gZnJvbSBcIi4uL21hY3QvaW5kZXguanNcIjtcclxuXHJcbmltcG9ydCB7IFRvZG8sIExvYWRpbmcgfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5pbXBvcnQgaW5pdFN0YXRlIGZyb20gXCIuL2luaXRpYWxzdGF0ZS5qc1wiO1xyXG5jb25zdCBpMThuID0gaW5pdFN0YXRlLnRyYW5zbGF0aW9ucygpO1xyXG4vLyBUb2RvTGlzdCBDb21wb25lbnRcclxuY29uc3QgVG9kb0xpc3QgPSAocHJvcHMpID0+IHtcclxuICBsZXQgeyBSZWFjaGVkTWF4LCBwYWdlLCBwYWdlU2l6ZSwgbG9hZGluZyB9ID0gaW5pdFN0YXRlLnN0YXRlO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicGFyZW50XCI+XHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGluaXRTdGF0ZS5zdGF0dXNlcy5tYXAoKHgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICA8aDQ+e3h9PC9oND5cclxuICAgICAgICAgICAgICB7cHJvcHMudG9kb3MuZmlsdGVyKCh0KSA9PiB0LnN0YXR1cyA9PT0geCkubWFwKChmdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxUb2RvIHsuLi5mdH0gey4uLnByb3BzfSAvPjtcclxuICAgICAgICAgICAgICB9KX1cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxwPkRvbmUgOiB7UmVhY2hlZE1heC50b1N0cmluZygpfSBQYWdlTm8gOiB7cGFnZX0gLCBQYWdlU2l6ZToge3BhZ2VTaXplfSBSZWNvcmRzOiB7cHJvcHMudG9kb3MubGVuZ3RofTwvcD5cclxuXHJcbiAgICAgICAge2xvYWRpbmcgJiYgPGRpdj5Mb2FkaW5nLi4uLi4gPExvYWRpbmcgLz4gPC9kaXY+fVxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGluaXRTdGF0ZS5zdGF0ZS5SZWFjaGVkTWF4ID9cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtpbml0U3RhdGUuUmVhY2hlZE1heH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtpbml0U3RhdGUuYWN0aW9ucy5Nb3JlfT57aTE4bihcIm1vcmVCdG5cIil9PC9idXR0b24+XHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2luaXRTdGF0ZS5hY3Rpb25zLk1vcmV9PntpMThuKFwibW9yZUJ0blwiKX08L2J1dHRvbj5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2RvTGlzdDtcclxuIl19
//# sourceMappingURL=todoList.js.map
