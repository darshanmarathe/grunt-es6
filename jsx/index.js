import { createElement, createFragment } from "./mact";

const initState = {
  state: {},
  setState: function (obj) {
    console.log("old state", this.state)
    this.state = { ...this.state, ...obj };
    console.log("new state", this.state)
    BootJSX(this.state);
  }
}


const OrderHistoryContaier = (props) => {
  initState.state = { ...props };
  let clicked = (item) => {
    alert(item)
  }
  let search = (e) => {
    console.log(e, "e")
    initState.setState({ name: e.target.value });
  }

  let ToggleList = (e) => {
    // if($('#list').is(":visible")){
    //   initState.setState({items : [...props.items , ...[4,5,6,7]]})
    
    $('#list').slideToggle(1000);
    //}
  }
  return (
    <div>
      <OrderHistorySearch search={search} />
      <div>
      <button class="btn" onClick={ToggleList} >Toggle With JQuery</button>
      <h3>Example heading <span class="label label-default">New</span></h3>
        <p>This is a paragraph in a fragment</p>
        <>
          <h1>Hello {props.name}</h1>
          {typeof props.showItems}
        </>
        <ul id="list">
          {props.showItems ? props.items.map((item) => (
            <Item clicked={clicked} item={item}></Item>
          )) : <></>}
        </ul>
      </div>
    </div>
  )
};

const Item = (props) => {
  return <li onClick={() => {
    props.clicked(props.item);
  }}>{props.item}</li>

}

const OrderHistorySearch = (props) => {
  return <input type="search" placeholder="search something" onChange={props.search} />
}


export const BootJSX = (props) => {
  document.getElementById("root").innerHTML = "";
  document.getElementById("root").appendChild(<OrderHistoryContaier
    {...props} />);
};
