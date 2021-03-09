const Item = props => {
  return createElement("li", {
    onClick: () => {
      props.clicked(props.item);
    }
  }, "Item No : ", props.item);
};

export default Item;
//# sourceMappingURL=Ítem.jsx.map
