import { dom, Fragment, JSXComponent } from "./mact/index.js";

import { Item } from "./components/Item";

const initState = {
  state: {},
  setState: function (obj, func = null) {
    console.log("old state", this.state);
    this.state = { ...this.state, ...obj };
    console.log("new state", this.state);
    if (func == null) {
      BootJSX(this.state);
    } else {
      func(obj);
    }
  },
};

const OrderHistoryContaier = (props) => {
  initState.state = { ...props };
  let clicked = (item) => {
    alert(item);
  };
  let search = (e) => {
    console.log(e, "e");
    initState.setState({ name: e.target.value });
  };

  let ToggleList = (e) => {
    if ($("#list").is(":visible")) {
      initState.setState({ items: [...props.items, ...[4, 5, 6, 7]] });
    }

    $("#list").slideToggle(1000);
  };
  return (
    <div>
      <OrderHistorySearchV2 name={props.name} search={search} />
      <div>
        <button class="btn" onClick={ToggleList}>
          Toggle With JQuery
        </button>
        <h3>
          Example heading <span class="label label-default">New</span>
        </h3>
        <p>This is a paragraph in a fragment</p>
        <>
          <h1>Hello {props.name}</h1>

          <hr />
          <spam> {props.DisplayName != null ? props.DisplayName : ""}</spam>
        </>

        {props.showItems ? (
          <ItemList items={props.items} clicked={clicked} />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

const ItemList = (props) => {
  return (
    <ul id="list">
      {props.items.map((item) => (
        <Item clicked={props.clicked} item={item}></Item>
      ))}
    </ul>
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
  setTimeout(() => {
    SetCaretAtEnd(document.querySelector("#search"));
  }, 150);

  return (
    <input
      id="search"
      type="search"
      placeholder="search something"
      value={props.name}
      onKeyUp={function (e) {
        let val = e.target.value;
        props.search({
          target: {
            value: val,
          },
        });
      }}
    />
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

class OrderHistorySearchV2 extends JSXComponent {
  render(props) {
    setTimeout(() => {
      SetCaretAtEnd(document.querySelector("#search"));
    }, 10);
    return (
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
    );
  }
}

export const BootJSX = (props, container = "root") => {
  document.getElementById(container).innerHTML = "";
  document
    .getElementById(container)
    .appendChild(<OrderHistoryContaier {...props} />);
};
