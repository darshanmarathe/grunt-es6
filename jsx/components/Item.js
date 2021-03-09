import { dom, Fragment } from "../mact/index.js";
const Item = (props) => {
  return (
    <li
      onClick={() => {
        props.clicked(props.item);
      }}
    >
      Item No : {props.item}
    </li>
  );
};

export { Item };
