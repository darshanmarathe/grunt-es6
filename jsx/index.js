import HelpLabel from "./components/HelpLabel.js";
import ItemList from "./components/ItemList.js";
import { dom, Fragment } from "./mact/index";

const initState = {
  state: {},
  setState: function (obj, func = null) {
    console.log("old state", this.state);
    this.state = { ...this.state, ...obj };
    console.log("new state", this.state);
    if (func == null) {
      BootJSX(this.state);
    } else {
      console.log(func, "func");
      dom(func, obj);
    }
  },
};

const OrderHistoryContaier = (props) => {
  console.log("OrderHistoryContaier");
  initState.state = { ...props };
  let clicked = (item) => {
    alert(item);
  };
  let search = (e) => {
    initState.setState({
      items: e.target.value.replace(/ /g, "").split(""),
      name: e.target.value,
    });
  };

  let ToggleList = (e) => {
    if ($("#list").is(":visible")) {
      initState.setState({ items: [...props.items, ...[4, 5, 6, 7]] });
    }

    $("#list").slideToggle(1000);
  };

  let HanleAdd = (e, func) => {
    initState.setState({ items: [...props.items, ...[4, 5, 6, 7]] }, func);
  };
  return (
    <div>
      <OrderHistorySearch
        placeholder="my name is darshan"
        name={props.name}
        search={search}
      />
      <div>
        <HelpLabel helpText="Hello Darshan" />
        <button class="btn" onClick={ToggleList}>
          Toggle With JQuery
        </button>

        <h2>{props.name}</h2>

        <spam> {props.DisplayName != null ? props.DisplayName : ""}</spam>
        {props.showItems ? (
          <ItemList HanleAdd={HanleAdd} items={props.items} clicked={clicked} />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

function SetCaretAtEnd(elem) {
  if (elem === null) return;
  var elemLen = elem.value.length;
  // For IE Only
  if (document.selection) {
    // Set focus
    elem.focus();
    // Use IE Ranges
    var oSel = document.selection.createRange();
    // Reset position to 0 & then set at end
    oSel.moveStart("character", -elemLen);
    oSel.moveStart("character", elemLen);
    oSel.moveEnd("character", 0);
    oSel.select();
  } else if (elem.selectionStart || elem.selectionStart == "0") {
    console.log(elem);
    // Firefox/Chrome
    elem.selectionStart = elemLen;
    elem.selectionEnd = elemLen;
    elem.focus();
  } // if
}

const isTextSelected = (input) => {
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

  return (
    <>
      {props.name}
      <br />
      <input
        id="search"
        type="search"
        placeholder={props.placeholder ? props.placeholder : "Search Some"}
        style={{ width: "100%" }}
        value={props.name}
        onKeyUp={debounce(function (e) {
          if (!isTextSelected(e)) {
            props.search(e);
          }
        }, 500)}
      />
    </>
  );
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
    return (
      <>
        {props.name}
        <input
          id="search"
          type="search"
          placeholder="search something"
          style={{ width: "100%" }}
          value={props.name}
          onKeyUp={debounce(function (e) {
            if (!isTextSelected(e)) {
              props.search(e);
            }
          }, 500)}
        />
      </>
    );
  }
}

export const BootJSX = (props, container = "root") => {
  document.getElementById(container).innerHTML = "";
  document
    .getElementById(container)
    .appendChild(<OrderHistoryContaier {...props} />);
};
