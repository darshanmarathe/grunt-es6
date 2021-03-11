import { dom, Fragment } from "../mact";

import Item from "./Item.js";

const ItemList = (props) => {
  console.log("ItemList");
  return (
    <ul id="list">
      {props.items.map((item) => (
        <Item clicked={props.clicked} item={item}></Item>
      ))}
      <li>
        <button
          onClick={(e) => {
            props.HanleAdd(e);
          }}
        >
          Add More
        </button>{" "}
      </li>
    </ul>
  );
};

export default ItemList;
