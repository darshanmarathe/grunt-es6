import { dom } from "../mact/index.js";
import { initState } from "./index";

const PeopleLookUp = props => {
  console.log("People Lookups");
  return dom("div", null, dom("h1", null, props.title), dom("hr", null), dom("p", null, props.desc), dom("button", {
    class: "btn",
    onClick: e => {
      props.done = true;
      props.status = "Done";
      initState.actions.HandleStatus(props);
      setTimeout(function () {
        $.colorbox.close();
      }, 200);
    }
  }, "Mark Done"), dom("button", {
    class: "btn btn-success",
    onClick: e => {
      initState.actions.HandleDelete(props.id);
      setTimeout(function () {
        $.colorbox.close();
      }, 200);
    }
  }, "Delete"));
};

export default PeopleLookUp;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2pzeC90b2RvX2NvbXBvbmV0cy9wZW9wbGVMb29rdXAuanMiXSwibmFtZXMiOlsiZG9tIiwiaW5pdFN0YXRlIiwiUGVvcGxlTG9va1VwIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwidGl0bGUiLCJkZXNjIiwiZSIsImRvbmUiLCJzdGF0dXMiLCJhY3Rpb25zIiwiSGFuZGxlU3RhdHVzIiwic2V0VGltZW91dCIsIiQiLCJjb2xvcmJveCIsImNsb3NlIiwiSGFuZGxlRGVsZXRlIiwiaWQiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLEdBQVQsUUFBb0Isa0JBQXBCO0FBQ0EsU0FBU0MsU0FBVCxRQUEwQixTQUExQjs7QUFFQSxNQUFNQyxZQUFZLEdBQUlDLEtBQUQsSUFBVztBQUM5QkMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVo7QUFDQSxTQUFPLGlCQUNMLGdCQUFLRixLQUFLLENBQUNHLEtBQVgsQ0FESyxFQUVMLGVBRkssRUFHTCxlQUFJSCxLQUFLLENBQUNJLElBQVYsQ0FISyxFQUlMO0FBQVEsSUFBQSxLQUFLLEVBQUMsS0FBZDtBQUFvQixJQUFBLE9BQU8sRUFBR0MsQ0FBRCxJQUFPO0FBQ2xDTCxNQUFBQSxLQUFLLENBQUNNLElBQU4sR0FBYSxJQUFiO0FBQ0FOLE1BQUFBLEtBQUssQ0FBQ08sTUFBTixHQUFlLE1BQWY7QUFDQVQsTUFBQUEsU0FBUyxDQUFDVSxPQUFWLENBQWtCQyxZQUFsQixDQUErQlQsS0FBL0I7QUFDQVUsTUFBQUEsVUFBVSxDQUFDLFlBQVk7QUFDckJDLFFBQUFBLENBQUMsQ0FBQ0MsUUFBRixDQUFXQyxLQUFYO0FBQ0QsT0FGUyxFQUVQLEdBRk8sQ0FBVjtBQUdEO0FBUEQsaUJBSkssRUFZTDtBQUFRLElBQUEsS0FBSyxFQUFDLGlCQUFkO0FBQWdDLElBQUEsT0FBTyxFQUFHUixDQUFELElBQU87QUFDOUNQLE1BQUFBLFNBQVMsQ0FBQ1UsT0FBVixDQUFrQk0sWUFBbEIsQ0FBK0JkLEtBQUssQ0FBQ2UsRUFBckM7QUFDQUwsTUFBQUEsVUFBVSxDQUFDLFlBQVk7QUFDckJDLFFBQUFBLENBQUMsQ0FBQ0MsUUFBRixDQUFXQyxLQUFYO0FBQ0QsT0FGUyxFQUVQLEdBRk8sQ0FBVjtBQUdEO0FBTEQsY0FaSyxDQUFQO0FBbUJELENBckJEOztBQXVCQSxlQUFlZCxZQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZG9tIH0gZnJvbSBcIi4uL21hY3QvaW5kZXguanNcIjtcclxuaW1wb3J0IHsgaW5pdFN0YXRlIH0gZnJvbSBcIi4vaW5kZXhcIjtcclxuXHJcbmNvbnN0IFBlb3BsZUxvb2tVcCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwiUGVvcGxlIExvb2t1cHNcIilcclxuICByZXR1cm4gPGRpdj5cclxuICAgIDxoMT57cHJvcHMudGl0bGV9PC9oMT5cclxuICAgIDxociAvPlxyXG4gICAgPHA+e3Byb3BzLmRlc2N9PC9wPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cImJ0blwiIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgIHByb3BzLmRvbmUgPSB0cnVlO1xyXG4gICAgICBwcm9wcy5zdGF0dXMgPSBcIkRvbmVcIlxyXG4gICAgICBpbml0U3RhdGUuYWN0aW9ucy5IYW5kbGVTdGF0dXMocHJvcHMpO1xyXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkLmNvbG9yYm94LmNsb3NlKClcclxuICAgICAgfSwgMjAwKTtcclxuICAgIH19ID5NYXJrIERvbmU8L2J1dHRvbj5cclxuICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIiBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICBpbml0U3RhdGUuYWN0aW9ucy5IYW5kbGVEZWxldGUocHJvcHMuaWQpO1xyXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkLmNvbG9yYm94LmNsb3NlKClcclxuICAgICAgfSwgMjAwKTtcclxuICAgIH19ID5EZWxldGU8L2J1dHRvbj5cclxuICA8L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGVvcGxlTG9va1VwOyJdfQ==
//# sourceMappingURL=peopleLookup.js.map