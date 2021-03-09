import { createElement, createFragment } from "../mact";

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
