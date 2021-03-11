import HelpLabel from "./components/HelpLabel.js";
import ItemList from "./components/ItemList.js";
import { dom, Fragment } from "./mact/index";
const initState = {
  state: {},
  setState: function (obj, func = null) {
    console.log("old state", this.state);
    this.state = { ...this.state,
      ...obj
    };
    console.log("new state", this.state);

    if (func == null) {
      BootJSX(this.state);
    } else {
      console.log(func, "func");
      dom(func, obj);
    }
  }
};

const OrderHistoryContaier = props => {
  console.log("OrderHistoryContaier");
  initState.state = { ...props
  };

  let clicked = item => {
    alert(item);
  };

  let search = e => {
    initState.setState({
      items: e.target.value.replace(/ /g, "").split(""),
      name: e.target.value
    });
  };

  let ToggleList = e => {
    if ($("#list").is(":visible")) {
      initState.setState({
        items: [...props.items, ...[4, 5, 6, 7]]
      });
    }

    $("#list").slideToggle(1000);
  };

  let HanleAdd = (e, func) => {
    initState.setState({
      items: [...props.items, ...[4, 5, 6, 7]]
    }, func);
  };

  return dom("div", null, dom(OrderHistorySearch, {
    placeholder: "my name is darshan",
    name: props.name,
    search: search
  }), dom("div", null, dom(HelpLabel, {
    helpText: "Hello Darshan"
  }), dom("button", {
    class: "btn",
    onClick: ToggleList
  }, "Toggle With JQuery"), dom("h2", null, props.name), dom("spam", null, " ", props.DisplayName != null ? props.DisplayName : ""), props.showItems ? dom(ItemList, {
    HanleAdd: HanleAdd,
    items: props.items,
    clicked: clicked
  }) : dom('Fragment', null)));
};

function SetCaretAtEnd(elem) {
  if (elem === null) return;
  var elemLen = elem.value.length; // For IE Only

  if (document.selection) {
    // Set focus
    elem.focus(); // Use IE Ranges

    var oSel = document.selection.createRange(); // Reset position to 0 & then set at end

    oSel.moveStart("character", -elemLen);
    oSel.moveStart("character", elemLen);
    oSel.moveEnd("character", 0);
    oSel.select();
  } else if (elem.selectionStart || elem.selectionStart == "0") {
    console.log(elem); // Firefox/Chrome

    elem.selectionStart = elemLen;
    elem.selectionEnd = elemLen;
    elem.focus();
  } // if

}

const isTextSelected = input => {
  if (!input) return false;
  var selecttxt = "";

  if (window.getSelection) {
    selecttxt = window.getSelection();
  } else if (document.getSelection) {
    selecttxt = document.getSelection();
  } else if (document.selection) {
    selecttxt = document.selection.createRange().text;
  }

  if (selecttxt == "") {
    return false;
  }

  return true;
};

function OrderHistorySearch(props) {
  console.log("OrderHistorySearch");
  setTimeout(() => {
    SetCaretAtEnd(document.querySelector("#search"));
  }, 10);
  return dom('Fragment', null, props.name, dom("br", null), dom("input", {
    id: "search",
    type: "search",
    placeholder: props.placeholder ? props.placeholder : "Search Some",
    style: {
      width: "100%"
    },
    value: props.name,
    onKeyUp: debounce(function (e) {
      if (!isTextSelected(e)) {
        props.search(e);
      }
    }, 500)
  }));
}

function debounce(func, wait, immediate) {
  var timeout;
  return function executedFunction() {
    var context = this;
    var args = arguments;

    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

class OrderHistorySearchV2 {
  render(props) {
    setTimeout(() => {
      SetCaretAtEnd(document.querySelector("#search"));
    }, 10);
    return dom('Fragment', null, props.name, dom("input", {
      id: "search",
      type: "search",
      placeholder: "search something",
      style: {
        width: "100%"
      },
      value: props.name,
      onKeyUp: debounce(function (e) {
        if (!isTextSelected(e)) {
          props.search(e);
        }
      }, 500)
    }));
  }

}

export const BootJSX = (props, container = "root") => {
  document.getElementById(container).innerHTML = "";
  document.getElementById(container).appendChild(dom(OrderHistoryContaier, props));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC9pbmRleC5qcyJdLCJuYW1lcyI6WyJIZWxwTGFiZWwiLCJJdGVtTGlzdCIsImRvbSIsIkZyYWdtZW50IiwiaW5pdFN0YXRlIiwic3RhdGUiLCJzZXRTdGF0ZSIsIm9iaiIsImZ1bmMiLCJjb25zb2xlIiwibG9nIiwiQm9vdEpTWCIsIk9yZGVySGlzdG9yeUNvbnRhaWVyIiwicHJvcHMiLCJjbGlja2VkIiwiaXRlbSIsImFsZXJ0Iiwic2VhcmNoIiwiZSIsIml0ZW1zIiwidGFyZ2V0IiwidmFsdWUiLCJyZXBsYWNlIiwic3BsaXQiLCJuYW1lIiwiVG9nZ2xlTGlzdCIsIiQiLCJpcyIsInNsaWRlVG9nZ2xlIiwiSGFubGVBZGQiLCJEaXNwbGF5TmFtZSIsInNob3dJdGVtcyIsIlNldENhcmV0QXRFbmQiLCJlbGVtIiwiZWxlbUxlbiIsImxlbmd0aCIsImRvY3VtZW50Iiwic2VsZWN0aW9uIiwiZm9jdXMiLCJvU2VsIiwiY3JlYXRlUmFuZ2UiLCJtb3ZlU3RhcnQiLCJtb3ZlRW5kIiwic2VsZWN0Iiwic2VsZWN0aW9uU3RhcnQiLCJzZWxlY3Rpb25FbmQiLCJpc1RleHRTZWxlY3RlZCIsImlucHV0Iiwic2VsZWN0dHh0Iiwid2luZG93IiwiZ2V0U2VsZWN0aW9uIiwidGV4dCIsIk9yZGVySGlzdG9yeVNlYXJjaCIsInNldFRpbWVvdXQiLCJxdWVyeVNlbGVjdG9yIiwicGxhY2Vob2xkZXIiLCJ3aWR0aCIsImRlYm91bmNlIiwid2FpdCIsImltbWVkaWF0ZSIsInRpbWVvdXQiLCJleGVjdXRlZEZ1bmN0aW9uIiwiY29udGV4dCIsImFyZ3MiLCJhcmd1bWVudHMiLCJsYXRlciIsImFwcGx5IiwiY2FsbE5vdyIsImNsZWFyVGltZW91dCIsIk9yZGVySGlzdG9yeVNlYXJjaFYyIiwicmVuZGVyIiwiY29udGFpbmVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsU0FBUCxN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Q0FBQ3pELEtBQUQsRUFBUTtBQUNad0MsSUFBQUEsVUFBVSxDQUFDLE1BQU07QUFDZnJCLE1BQUFBLGFBQWEsQ0FBQ0ksUUFBUSxDQUFDa0IsYUFBVCxDQUF1QixTQUF2QixDQUFELENBQWI7QUFDRCxLQUZTLEVBRVAsRUFGTyxDQUFWO0FBR0EsV0FDRSxzQkFDR3pDLEtBQUssQ0FBQ1csSUFEVCxFQUVFO0FBQ0UsTUFBQSxFQUFFLEVBQUMsUUFETDtBQUVFLE1BQUEsSUFBSSxFQUFDLFFBRlA7QUFHRSxNQUFBLFdBQVcsRUFBQyxrQkFIZDtBQUlFLE1BQUEsS0FBSyxFQUFFO0FBQUVnQyxRQUFBQSxLQUFLLEVBQUU7QUFBVCxPQUpUO0FBS0UsTUFBQSxLQUFLLEVBQUUzQyxLQUFLLENBQUNXLElBTGY7QUFNRSxNQUFBLE9BQU8sRUFBRWlDLFFBQVEsQ0FBQyxVQUFVdkMsQ0FBVixFQUFhO0FBQzdCLFlBQUksQ0FBQzRCLGNBQWMsQ0FBQzVCLENBQUQsQ0FBbkIsRUFBd0I7QUFDdEJMLFVBQUFBLEtBQUssQ0FBQ0ksTUFBTixDQUFhQyxDQUFiO0FBQ0Q7QUFDRixPQUpnQixFQUlkLEdBSmM7QUFObkIsTUFGRixDQURGO0FBaUJEOztBQXRCd0I7O0FBeUIzQixPQUFPLE1BQU1QLE9BQU8sR0FBRyxDQUFDRSxLQUFELEVBQVEwRCxTQUFTLEdBQUcsTUFBcEIsS0FBK0I7QUFDcERuQyxFQUFBQSxRQUFRLENBQUNvQyxjQUFULENBQXdCRCxTQUF4QixFQUFtQ0UsU0FBbkMsR0FBK0MsRUFBL0M7QUFDQXJDLEVBQUFBLFFBQVEsQ0FDTG9DLGNBREgsQ0FDa0JELFNBRGxCLEVBRUdHLFdBRkgsQ0FFZSxJQUFDLG9CQUFELEVBQTBCN0QsS0FBMUIsQ0FGZjtBQUdELENBTE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVscExhYmVsIGZyb20gXCIuL2NvbXBvbmVudHMvSGVscExhYmVsLmpzXCI7XHJcbmltcG9ydCBJdGVtTGlzdCBmcm9tIFwiLi9jb21wb25lbnRzL0l0ZW1MaXN0LmpzXCI7XHJcbmltcG9ydCB7IGRvbSwgRnJhZ21lbnQgfSBmcm9tIFwiLi9tYWN0L2luZGV4XCI7XHJcblxyXG5jb25zdCBpbml0U3RhdGUgPSB7XHJcbiAgc3RhdGU6IHt9LFxyXG4gIHNldFN0YXRlOiBmdW5jdGlvbiAob2JqLCBmdW5jID0gbnVsbCkge1xyXG4gICAgY29uc29sZS5sb2coXCJvbGQgc3RhdGVcIiwgdGhpcy5zdGF0ZSk7XHJcbiAgICB0aGlzLnN0YXRlID0geyAuLi50aGlzLnN0YXRlLCAuLi5vYmogfTtcclxuICAgIGNvbnNvbGUubG9nKFwibmV3IHN0YXRlXCIsIHRoaXMuc3RhdGUpO1xyXG4gICAgaWYgKGZ1bmMgPT0gbnVsbCkge1xyXG4gICAgICBCb290SlNYKHRoaXMuc3RhdGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coZnVuYywgXCJmdW5jXCIpO1xyXG4gICAgICBkb20oZnVuYywgb2JqKTtcclxuICAgIH1cclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgT3JkZXJIaXN0b3J5Q29udGFpZXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zb2xlLmxvZyhcIk9yZGVySGlzdG9yeUNvbnRhaWVyXCIpO1xyXG4gIGluaXRTdGF0ZS5zdGF0ZSA9IHsgLi4ucHJvcHMgfTtcclxuICBsZXQgY2xpY2tlZCA9IChpdGVtKSA9PiB7XHJcbiAgICBhbGVydChpdGVtKTtcclxuICB9O1xyXG4gIGxldCBzZWFyY2ggPSAoZSkgPT4ge1xyXG4gICAgaW5pdFN0YXRlLnNldFN0YXRlKHtcclxuICAgICAgaXRlbXM6IGUudGFyZ2V0LnZhbHVlLnJlcGxhY2UoLyAvZywgXCJcIikuc3BsaXQoXCJcIiksXHJcbiAgICAgIG5hbWU6IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgbGV0IFRvZ2dsZUxpc3QgPSAoZSkgPT4ge1xyXG4gICAgaWYgKCQoXCIjbGlzdFwiKS5pcyhcIjp2aXNpYmxlXCIpKSB7XHJcbiAgICAgIGluaXRTdGF0ZS5zZXRTdGF0ZSh7IGl0ZW1zOiBbLi4ucHJvcHMuaXRlbXMsIC4uLls0LCA1LCA2LCA3XV0gfSk7XHJcbiAgICB9XHJcblxyXG4gICAgJChcIiNsaXN0XCIpLnNsaWRlVG9nZ2xlKDEwMDApO1xyXG4gIH07XHJcblxyXG4gIGxldCBIYW5sZUFkZCA9IChlLCBmdW5jKSA9PiB7XHJcbiAgICBpbml0U3RhdGUuc2V0U3RhdGUoeyBpdGVtczogWy4uLnByb3BzLml0ZW1zLCAuLi5bNCwgNSwgNiwgN11dIH0sIGZ1bmMpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxPcmRlckhpc3RvcnlTZWFyY2hcclxuICAgICAgICBwbGFjZWhvbGRlcj1cIm15IG5hbWUgaXMgZGFyc2hhblwiXHJcbiAgICAgICAgbmFtZT17cHJvcHMubmFtZX1cclxuICAgICAgICBzZWFyY2g9e3NlYXJjaH1cclxuICAgICAgLz5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8SGVscExhYmVsIGhlbHBUZXh0PVwiSGVsbG8gRGFyc2hhblwiIC8+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0blwiIG9uQ2xpY2s9e1RvZ2dsZUxpc3R9PlxyXG4gICAgICAgICAgVG9nZ2xlIFdpdGggSlF1ZXJ5XHJcbiAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgIDxoMj57cHJvcHMubmFtZX08L2gyPlxyXG5cclxuICAgICAgICA8c3BhbT4ge3Byb3BzLkRpc3BsYXlOYW1lICE9IG51bGwgPyBwcm9wcy5EaXNwbGF5TmFtZSA6IFwiXCJ9PC9zcGFtPlxyXG4gICAgICAgIHtwcm9wcy5zaG93SXRlbXMgPyAoXHJcbiAgICAgICAgICA8SXRlbUxpc3QgSGFubGVBZGQ9e0hhbmxlQWRkfSBpdGVtcz17cHJvcHMuaXRlbXN9IGNsaWNrZWQ9e2NsaWNrZWR9IC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDw+PC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gU2V0Q2FyZXRBdEVuZChlbGVtKSB7XHJcbiAgaWYgKGVsZW0gPT09IG51bGwpIHJldHVybjtcclxuICB2YXIgZWxlbUxlbiA9IGVsZW0udmFsdWUubGVuZ3RoO1xyXG4gIC8vIEZvciBJRSBPbmx5XHJcbiAgaWYgKGRvY3VtZW50LnNlbGVjdGlvbikge1xyXG4gICAgLy8gU2V0IGZvY3VzXHJcbiAgICBlbGVtLmZvY3VzKCk7XHJcbiAgICAvLyBVc2UgSUUgUmFuZ2VzXHJcbiAgICB2YXIgb1NlbCA9IGRvY3VtZW50LnNlbGVjdGlvbi5jcmVhdGVSYW5nZSgpO1xyXG4gICAgLy8gUmVzZXQgcG9zaXRpb24gdG8gMCAmIHRoZW4gc2V0IGF0IGVuZFxyXG4gICAgb1NlbC5tb3ZlU3RhcnQoXCJjaGFyYWN0ZXJcIiwgLWVsZW1MZW4pO1xyXG4gICAgb1NlbC5tb3ZlU3RhcnQoXCJjaGFyYWN0ZXJcIiwgZWxlbUxlbik7XHJcbiAgICBvU2VsLm1vdmVFbmQoXCJjaGFyYWN0ZXJcIiwgMCk7XHJcbiAgICBvU2VsLnNlbGVjdCgpO1xyXG4gIH0gZWxzZSBpZiAoZWxlbS5zZWxlY3Rpb25TdGFydCB8fCBlbGVtLnNlbGVjdGlvblN0YXJ0ID09IFwiMFwiKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlbGVtKTtcclxuICAgIC8vIEZpcmVmb3gvQ2hyb21lXHJcbiAgICBlbGVtLnNlbGVjdGlvblN0YXJ0ID0gZWxlbUxlbjtcclxuICAgIGVsZW0uc2VsZWN0aW9uRW5kID0gZWxlbUxlbjtcclxuICAgIGVsZW0uZm9jdXMoKTtcclxuICB9IC8vIGlmXHJcbn1cclxuXHJcbmNvbnN0IGlzVGV4dFNlbGVjdGVkID0gKGlucHV0KSA9PiB7XHJcbiAgaWYgKCFpbnB1dCkgcmV0dXJuIGZhbHNlO1xyXG4gIHZhciBzZWxlY3R0eHQgPSBcIlwiO1xyXG4gIGlmICh3aW5kb3cuZ2V0U2VsZWN0aW9uKSB7XHJcbiAgICBzZWxlY3R0eHQgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgfSBlbHNlIGlmIChkb2N1bWVudC5nZXRTZWxlY3Rpb24pIHtcclxuICAgIHNlbGVjdHR4dCA9IGRvY3VtZW50LmdldFNlbGVjdGlvbigpO1xyXG4gIH0gZWxzZSBpZiAoZG9jdW1lbnQuc2VsZWN0aW9uKSB7XHJcbiAgICBzZWxlY3R0eHQgPSBkb2N1bWVudC5zZWxlY3Rpb24uY3JlYXRlUmFuZ2UoKS50ZXh0O1xyXG4gIH1cclxuXHJcbiAgaWYgKHNlbGVjdHR4dCA9PSBcIlwiKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIHJldHVybiB0cnVlO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gT3JkZXJIaXN0b3J5U2VhcmNoKHByb3BzKSB7XHJcbiAgY29uc29sZS5sb2coXCJPcmRlckhpc3RvcnlTZWFyY2hcIik7XHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBTZXRDYXJldEF0RW5kKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoXCIpKTtcclxuICB9LCAxMCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7cHJvcHMubmFtZX1cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIGlkPVwic2VhcmNoXCJcclxuICAgICAgICB0eXBlPVwic2VhcmNoXCJcclxuICAgICAgICBwbGFjZWhvbGRlcj17cHJvcHMucGxhY2Vob2xkZXIgPyBwcm9wcy5wbGFjZWhvbGRlciA6IFwiU2VhcmNoIFNvbWVcIn1cclxuICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICB2YWx1ZT17cHJvcHMubmFtZX1cclxuICAgICAgICBvbktleVVwPXtkZWJvdW5jZShmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgaWYgKCFpc1RleHRTZWxlY3RlZChlKSkge1xyXG4gICAgICAgICAgICBwcm9wcy5zZWFyY2goZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSwgNTAwKX1cclxuICAgICAgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSkge1xyXG4gIHZhciB0aW1lb3V0O1xyXG5cclxuICByZXR1cm4gZnVuY3Rpb24gZXhlY3V0ZWRGdW5jdGlvbigpIHtcclxuICAgIHZhciBjb250ZXh0ID0gdGhpcztcclxuICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xyXG5cclxuICAgIHZhciBsYXRlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdGltZW91dCA9IG51bGw7XHJcbiAgICAgIGlmICghaW1tZWRpYXRlKSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcclxuXHJcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcblxyXG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xyXG5cclxuICAgIGlmIChjYWxsTm93KSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xyXG4gIH07XHJcbn1cclxuXHJcbmNsYXNzIE9yZGVySGlzdG9yeVNlYXJjaFYyIHtcclxuICByZW5kZXIocHJvcHMpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBTZXRDYXJldEF0RW5kKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoXCIpKTtcclxuICAgIH0sIDEwKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAge3Byb3BzLm5hbWV9XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBpZD1cInNlYXJjaFwiXHJcbiAgICAgICAgICB0eXBlPVwic2VhcmNoXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwic2VhcmNoIHNvbWV0aGluZ1wiXHJcbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgIHZhbHVlPXtwcm9wcy5uYW1lfVxyXG4gICAgICAgICAgb25LZXlVcD17ZGVib3VuY2UoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgaWYgKCFpc1RleHRTZWxlY3RlZChlKSkge1xyXG4gICAgICAgICAgICAgIHByb3BzLnNlYXJjaChlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSwgNTAwKX1cclxuICAgICAgICAvPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQm9vdEpTWCA9IChwcm9wcywgY29udGFpbmVyID0gXCJyb290XCIpID0+IHtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250YWluZXIpLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgZG9jdW1lbnRcclxuICAgIC5nZXRFbGVtZW50QnlJZChjb250YWluZXIpXHJcbiAgICAuYXBwZW5kQ2hpbGQoPE9yZGVySGlzdG9yeUNvbnRhaWVyIHsuLi5wcm9wc30gLz4pO1xyXG59O1xyXG4iXX0=
//# sourceMappingURL=index.js.map
