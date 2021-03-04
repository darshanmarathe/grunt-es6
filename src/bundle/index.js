import { createElement, createFragment } from "./mact";
const initState = {
  state: {},
  setState: function (obj) {
    console.log("old state", this.state);
    this.state = { ...this.state,
      ...obj
    };
    console.log("new state", this.state);
    BootJSX(this.state);
  }
};

const OrderHistoryContaier = props => {
  initState.state = { ...props
  };

  let clicked = item => {
    alert(item);
  };

  let search = e => {
    console.log(e, "e");
    initState.setState({
      name: e.target.value
    });
  };

  let ToggleList = e => {
    // if($('#list').is(":visible")){
    //   initState.setState({items : [...props.items , ...[4,5,6,7]]})
    $('#list').slideToggle(1000); //}
  };

  return createElement("div", null, createElement(OrderHistorySearch, {
    search: search
  }), createElement("div", null, createElement("button", {
    class: "btn",
    onClick: ToggleList
  }, "Toggle With JQuery"), createElement("h3", null, "Example heading ", createElement("span", {
    class: "label label-default"
  }, "New")), createElement("p", null, "This is a paragraph in a fragment"), createElement('fragment', null, createElement("h1", null, "Hello ", props.name), typeof props.showItems), createElement("ul", {
    id: "list"
  }, props.showItems ? props.items.map(item => createElement(Item, {
    clicked: clicked,
    item: item
  })) : createElement('fragment', null))));
};

const Item = props => {
  return createElement("li", {
    onClick: () => {
      props.clicked(props.item);
    }
  }, props.item);
};

const OrderHistorySearch = props => {
  return createElement("input", {
    type: "search",
    placeholder: "search something",
    onChange: props.search
  });
};

export const BootJSX = props => {
  document.getElementById("root").innerHTML = "";
  document.getElementById("root").appendChild(createElement(OrderHistoryContaier, props));
};
//# sourceMappingURL=index.js.map
