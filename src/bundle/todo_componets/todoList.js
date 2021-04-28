function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { dom, Fragment } from "../mact/index.js";
import { rc, mh } from "./rc.js";
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
      return rc(ft, true) ? dom(Todo, _extends({}, ft, props)) : null;
    }));
  })), dom("div", null, dom("br", null), dom("p", null, "Done : ", ReachedMax.toString(), " PageNo : ", page, " , PageSize: ", pageSize, " Records: ", props.todos.length), loading && dom("div", null, "Loading..... ", dom(Loading, null), " "), dom("br", null), initState.state.ReachedMax ? dom("button", {
    disabled: initState.ReachedMax,
    onClick: initState.actions.More
  }, i18n("moreBtn")) : dom("button", {
    onClick: initState.actions.More
  }, i18n("moreBtn"))));
};

export default TodoList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2pzeC90b2RvX2NvbXBvbmV0cy90b2RvTGlzdC5qcyJdLCJuYW1lcyI6WyJkb20iLCJGcmFnbWVudCIsInJjIiwibWgiLCJUb2RvIiwiTG9hZGluZyIsImluaXRTdGF0ZSIsImkxOG4iLCJ0cmFuc2xhdGlvbnMiLCJUb2RvTGlzdCIsInByb3BzIiwiUmVhY2hlZE1heCIsInBhZ2UiLCJwYWdlU2l6ZSIsImxvYWRpbmciLCJzdGF0ZSIsInN0YXR1c2VzIiwibWFwIiwieCIsIndpZHRoIiwidG9kb3MiLCJmaWx0ZXIiLCJ0Iiwic3RhdHVzIiwiZnQiLCJ0b1N0cmluZyIsImxlbmd0aCIsImFjdGlvbnMiLCJNb3JlIl0sIm1hcHBpbmdzIjoiOztBQUFBLFNBQVNBLEdBQVQsRUFBY0MsUUFBZCxRQUE4QixrQkFBOUI7QUFFQSxTQUFTQyxFQUFULEVBQWFDLEVBQWIsUUFBdUIsU0FBdkI7QUFDQSxTQUFTQyxJQUFULEVBQWVDLE9BQWYsUUFBOEIsU0FBOUI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLG1CQUF0QjtBQUNBLE1BQU1DLElBQUksR0FBR0QsU0FBUyxDQUFDRSxZQUFWLEVBQWIsQyxDQUNBOztBQUNBLE1BQU1DLFFBQVEsR0FBSUMsS0FBRCxJQUFXO0FBQzFCLE1BQUk7QUFBRUMsSUFBQUEsVUFBRjtBQUFjQyxJQUFBQSxJQUFkO0FBQW9CQyxJQUFBQSxRQUFwQjtBQUE4QkMsSUFBQUE7QUFBOUIsTUFBMENSLFNBQVMsQ0FBQ1MsS0FBeEQ7QUFDQSxTQUNFLHNCQUNFO0FBQUssSUFBQSxLQUFLLEVBQUM7QUFBWCxLQUdJVCxTQUFTLENBQUNVLFFBQVYsQ0FBbUJDLEdBQW5CLENBQXdCQyxDQUFELElBQU87QUFDNUIsV0FBTztBQUFLLE1BQUEsS0FBSyxFQUFFO0FBQUVDLFFBQUFBLEtBQUssRUFBRTtBQUFUO0FBQVosT0FDTCxnQkFBS0QsQ0FBTCxDQURLLEVBRUpSLEtBQUssQ0FBQ1UsS0FBTixDQUFZQyxNQUFaLENBQW9CQyxDQUFELElBQU9BLENBQUMsQ0FBQ0MsTUFBRixLQUFhTCxDQUF2QyxFQUEwQ0QsR0FBMUMsQ0FBK0NPLEVBQUQsSUFBUTtBQUNyRCxhQUFPdEIsRUFBRSxDQUFDc0IsRUFBRCxFQUFLLElBQUwsQ0FBRixHQUFlLElBQUMsSUFBRCxlQUFVQSxFQUFWLEVBQWtCZCxLQUFsQixFQUFmLEdBQTZDLElBQXBEO0FBQ0QsS0FGQSxDQUZJLENBQVA7QUFRRCxHQVRELENBSEosQ0FERixFQWtCRSxpQkFDRSxlQURGLEVBRUUsMEJBQVdDLFVBQVUsQ0FBQ2MsUUFBWCxFQUFYLGdCQUE0Q2IsSUFBNUMsbUJBQStEQyxRQUEvRCxnQkFBbUZILEtBQUssQ0FBQ1UsS0FBTixDQUFZTSxNQUEvRixDQUZGLEVBSUdaLE9BQU8sSUFBSSxrQ0FBa0IsSUFBQyxPQUFELE9BQWxCLE1BSmQsRUFLRSxlQUxGLEVBT0lSLFNBQVMsQ0FBQ1MsS0FBVixDQUFnQkosVUFBaEIsR0FDRTtBQUNFLElBQUEsUUFBUSxFQUFFTCxTQUFTLENBQUNLLFVBRHRCO0FBRUUsSUFBQSxPQUFPLEVBQUVMLFNBQVMsQ0FBQ3FCLE9BQVYsQ0FBa0JDO0FBRjdCLEtBRW9DckIsSUFBSSxDQUFDLFNBQUQsQ0FGeEMsQ0FERixHQUtFO0FBQ0UsSUFBQSxPQUFPLEVBQUVELFNBQVMsQ0FBQ3FCLE9BQVYsQ0FBa0JDO0FBRDdCLEtBQ29DckIsSUFBSSxDQUFDLFNBQUQsQ0FEeEMsQ0FaTixDQWxCRixDQURGO0FBc0NELENBeENEOztBQTBDQSxlQUFlRSxRQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZG9tLCBGcmFnbWVudCB9IGZyb20gXCIuLi9tYWN0L2luZGV4LmpzXCI7XHJcblxyXG5pbXBvcnQgeyByYywgbWggfSBmcm9tIFwiLi9yYy5qc1wiXHJcbmltcG9ydCB7IFRvZG8sIExvYWRpbmcgfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5pbXBvcnQgaW5pdFN0YXRlIGZyb20gXCIuL2luaXRpYWxzdGF0ZS5qc1wiO1xyXG5jb25zdCBpMThuID0gaW5pdFN0YXRlLnRyYW5zbGF0aW9ucygpO1xyXG4vLyBUb2RvTGlzdCBDb21wb25lbnRcclxuY29uc3QgVG9kb0xpc3QgPSAocHJvcHMpID0+IHtcclxuICBsZXQgeyBSZWFjaGVkTWF4LCBwYWdlLCBwYWdlU2l6ZSwgbG9hZGluZyB9ID0gaW5pdFN0YXRlLnN0YXRlO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicGFyZW50XCI+XHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGluaXRTdGF0ZS5zdGF0dXNlcy5tYXAoKHgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICA8aDQ+e3h9PC9oND5cclxuICAgICAgICAgICAgICB7cHJvcHMudG9kb3MuZmlsdGVyKCh0KSA9PiB0LnN0YXR1cyA9PT0geCkubWFwKChmdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJjKGZ0LCB0cnVlKSA/IDxUb2RvIHsuLi5mdH0gey4uLnByb3BzfSAvPiA6IG51bGxcclxuICAgICAgICAgICAgICB9KX1cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxwPkRvbmUgOiB7UmVhY2hlZE1heC50b1N0cmluZygpfSBQYWdlTm8gOiB7cGFnZX0gLCBQYWdlU2l6ZToge3BhZ2VTaXplfSBSZWNvcmRzOiB7cHJvcHMudG9kb3MubGVuZ3RofTwvcD5cclxuXHJcbiAgICAgICAge2xvYWRpbmcgJiYgPGRpdj5Mb2FkaW5nLi4uLi4gPExvYWRpbmcgLz4gPC9kaXY+fVxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGluaXRTdGF0ZS5zdGF0ZS5SZWFjaGVkTWF4ID9cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtpbml0U3RhdGUuUmVhY2hlZE1heH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtpbml0U3RhdGUuYWN0aW9ucy5Nb3JlfT57aTE4bihcIm1vcmVCdG5cIil9PC9idXR0b24+XHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2luaXRTdGF0ZS5hY3Rpb25zLk1vcmV9PntpMThuKFwibW9yZUJ0blwiKX08L2J1dHRvbj5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2RvTGlzdDtcclxuIl19
//# sourceMappingURL=todoList.js.map
