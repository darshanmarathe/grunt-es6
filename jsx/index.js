import { createElement, createFragment } from "./mact";

import { Item } from "./components/Ítem";

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

const Stateful = function (state) {
  return function (component) {
    return component.bind(state);
  };
};

const stateFul = Stateful(initState);

const basicComponent = stateFul((props) => {
  return <span>basicComponent {this.state.name} </span>;
});

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
      <OrderHistorySearch name={props.name} search={search} />
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

        <basicComponent />
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
const debounce = (func, delay) => {
  let inDebounce;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func.apply(context, args), delay);
  };
};

function memoize(func) {
  var memo = {};
  var slice = Array.prototype.slice;

  return function () {
    var args = slice.call(arguments);

    if (args in memo) return memo[args];
    else return (memo[args] = func.apply(this, args));
  };
}
const OrderHistorySearch = memoize((props) => {
  setTimeout(() => {
    SetCaretAtEnd(document.querySelector("#search"));
  }, 50);

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
      //}, 500)}
    />
  );
});

export const BootJSX = (props, container = "root") => {
  document.getElementById(container).innerHTML = "";
  document
    .getElementById(container)
    .appendChild(<OrderHistoryContaier {...props} />);
};
