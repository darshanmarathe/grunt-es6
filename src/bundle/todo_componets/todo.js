import { dom, Fragment } from "../mact/index.js";
import { initState } from "./index"; // Todo Component

const Todo = props => {
  function renderTodo() {
    let todo = props.title == null ? "Junk data" : props.title;
    return todo;
  }

  function Delete_Click(e) {
    if (confirm("Do you want to delete this record ?")) {
      initState.actions.HandleDelete(e);
    }
  }

  function Done_Click(todo) {
    console.log("todo", todo);
    initState.actions.HandleDone(todo);
  }

  return dom("li", null, props.done === true ? dom("del", null, " ", renderTodo(), " ") : renderTodo(), dom("button", {
    onClick: e => {
      Delete_Click(props.id);
    }
  }, "X"), dom("button", {
    onClick: e => {
      Done_Click(props);
    }
  }, props.done == true ? "undone" : "done"), props.desc && dom("button", {
    onClick: e => {
      $("#" + props.id + "div").slideToggle();
    }
  }, "..."), dom("br", null), props.desc && dom("div", {
    id: props.id + "div",
    style: {
      display: "none"
    }
  }, props.desc));
};

export default Todo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2pzeC90b2RvX2NvbXBvbmV0cy90b2RvLmpzIl0sIm5hbWVzIjpbImRvbSIsIkZyYWdtZW50IiwiaW5pdFN0YXRlIiwiVG9kbyIsInByb3BzIiwicmVuZGVyVG9kbyIsInRvZG8iLCJ0aXRsZSIsIkRlbGV0ZV9DbGljayIsImUiLCJjb25maXJtIiwiYWN0aW9ucyIsIkhhbmRsZURlbGV0ZSIsIkRvbmVfQ2xpY2siLCJjb25zb2xlIiwibG9nIiwiSGFuZGxlRG9uZSIsImRvbmUiLCJpZCIsImRlc2MiLCIkIiwic2xpZGVUb2dnbGUiLCJkaXNwbGF5Il0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxHQUFULEVBQWNDLFFBQWQsUUFBOEIsa0JBQTlCO0FBRUEsU0FBU0MsU0FBVCxRQUEwQixTQUExQixDLENBQ0E7O0FBQ0EsTUFBTUMsSUFBSSxHQUFJQyxLQUFELElBQVc7QUFDdEIsV0FBU0MsVUFBVCxHQUFzQjtBQUNwQixRQUFJQyxJQUFJLEdBQUdGLEtBQUssQ0FBQ0csS0FBTixJQUFlLElBQWYsR0FBc0IsV0FBdEIsR0FBb0NILEtBQUssQ0FBQ0csS0FBckQ7QUFDQSxXQUFPRCxJQUFQO0FBQ0Q7O0FBRUQsV0FBU0UsWUFBVCxDQUFzQkMsQ0FBdEIsRUFBeUI7QUFDdkIsUUFBSUMsT0FBTyxDQUFDLHFDQUFELENBQVgsRUFBb0Q7QUFDbERSLE1BQUFBLFNBQVMsQ0FBQ1MsT0FBVixDQUFrQkMsWUFBbEIsQ0FBK0JILENBQS9CO0FBQ0Q7QUFDRjs7QUFFRCxXQUFTSSxVQUFULENBQW9CUCxJQUFwQixFQUEwQjtBQUN4QlEsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQUFvQlQsSUFBcEI7QUFDQUosSUFBQUEsU0FBUyxDQUFDUyxPQUFWLENBQWtCSyxVQUFsQixDQUE2QlYsSUFBN0I7QUFDRDs7QUFFRCxTQUNFLGdCQUNHRixLQUFLLENBQUNhLElBQU4sS0FBZSxJQUFmLEdBQXNCLHNCQUFPWixVQUFVLEVBQWpCLE1BQXRCLEdBQW9EQSxVQUFVLEVBRGpFLEVBRUU7QUFDRSxJQUFBLE9BQU8sRUFBR0ksQ0FBRCxJQUFPO0FBQ2RELE1BQUFBLFlBQVksQ0FBQ0osS0FBSyxDQUFDYyxFQUFQLENBQVo7QUFDRDtBQUhILFNBRkYsRUFTRTtBQUNFLElBQUEsT0FBTyxFQUFHVCxDQUFELElBQU87QUFDZEksTUFBQUEsVUFBVSxDQUFDVCxLQUFELENBQVY7QUFDRDtBQUhILEtBS0dBLEtBQUssQ0FBQ2EsSUFBTixJQUFjLElBQWQsR0FBcUIsUUFBckIsR0FBZ0MsTUFMbkMsQ0FURixFQWdCR2IsS0FBSyxDQUFDZSxJQUFOLElBQ0M7QUFDRSxJQUFBLE9BQU8sRUFBR1YsQ0FBRCxJQUFPO0FBQ2RXLE1BQUFBLENBQUMsQ0FBQyxNQUFNaEIsS0FBSyxDQUFDYyxFQUFaLEdBQWlCLEtBQWxCLENBQUQsQ0FBMEJHLFdBQTFCO0FBQ0Q7QUFISCxXQWpCSixFQXlCRSxlQXpCRixFQTBCR2pCLEtBQUssQ0FBQ2UsSUFBTixJQUNDO0FBQUssSUFBQSxFQUFFLEVBQUVmLEtBQUssQ0FBQ2MsRUFBTixHQUFXLEtBQXBCO0FBQTJCLElBQUEsS0FBSyxFQUFFO0FBQUVJLE1BQUFBLE9BQU8sRUFBRTtBQUFYO0FBQWxDLEtBQ0dsQixLQUFLLENBQUNlLElBRFQsQ0EzQkosQ0FERjtBQWtDRCxDQW5ERDs7QUFxREEsZUFBZWhCLElBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkb20sIEZyYWdtZW50IH0gZnJvbSBcIi4uL21hY3QvaW5kZXguanNcIjtcclxuXHJcbmltcG9ydCB7IGluaXRTdGF0ZSB9IGZyb20gXCIuL2luZGV4XCI7XHJcbi8vIFRvZG8gQ29tcG9uZW50XHJcbmNvbnN0IFRvZG8gPSAocHJvcHMpID0+IHtcclxuICBmdW5jdGlvbiByZW5kZXJUb2RvKCkge1xyXG4gICAgbGV0IHRvZG8gPSBwcm9wcy50aXRsZSA9PSBudWxsID8gXCJKdW5rIGRhdGFcIiA6IHByb3BzLnRpdGxlO1xyXG4gICAgcmV0dXJuIHRvZG87XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBEZWxldGVfQ2xpY2soZSkge1xyXG4gICAgaWYgKGNvbmZpcm0oXCJEbyB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyByZWNvcmQgP1wiKSkge1xyXG4gICAgICBpbml0U3RhdGUuYWN0aW9ucy5IYW5kbGVEZWxldGUoZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBEb25lX0NsaWNrKHRvZG8pIHtcclxuICAgIGNvbnNvbGUubG9nKFwidG9kb1wiLCB0b2RvKTtcclxuICAgIGluaXRTdGF0ZS5hY3Rpb25zLkhhbmRsZURvbmUodG9kbyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGxpPlxyXG4gICAgICB7cHJvcHMuZG9uZSA9PT0gdHJ1ZSA/IDxkZWw+IHtyZW5kZXJUb2RvKCl9IDwvZGVsPiA6IHJlbmRlclRvZG8oKX1cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICBEZWxldGVfQ2xpY2socHJvcHMuaWQpO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICBYXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgIERvbmVfQ2xpY2socHJvcHMpO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7cHJvcHMuZG9uZSA9PSB0cnVlID8gXCJ1bmRvbmVcIiA6IFwiZG9uZVwifVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAge3Byb3BzLmRlc2MgJiYgKFxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICQoXCIjXCIgKyBwcm9wcy5pZCArIFwiZGl2XCIpLnNsaWRlVG9nZ2xlKCk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIC4uLlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICApfVxyXG4gICAgICA8YnIgLz5cclxuICAgICAge3Byb3BzLmRlc2MgJiYgKFxyXG4gICAgICAgIDxkaXYgaWQ9e3Byb3BzLmlkICsgXCJkaXZcIn0gc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX0+XHJcbiAgICAgICAgICB7cHJvcHMuZGVzY31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvbGk+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZG87XHJcbiJdfQ==
//# sourceMappingURL=todo.js.map
