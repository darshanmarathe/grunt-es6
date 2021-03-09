import { dom, Fragment } from "../mact/index.js";

const Item = props => {
  return dom("li", {
    onClick: () => {
      props.clicked(props.item);
    }
  }, "Item No : ", props.item);
};

export { Item };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2pzeC9jb21wb25lbnRzL0l0ZW0uanMiXSwibmFtZXMiOlsiZG9tIiwiRnJhZ21lbnQiLCJJdGVtIiwicHJvcHMiLCJjbGlja2VkIiwiaXRlbSJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsR0FBVCxFQUFjQyxRQUFkLFFBQThCLGtCQUE5Qjs7QUFDQSxNQUFNQyxJQUFJLEdBQUlDLEtBQUQsSUFBVztBQUN0QixTQUNFO0FBQ0UsSUFBQSxPQUFPLEVBQUUsTUFBTTtBQUNiQSxNQUFBQSxLQUFLLENBQUNDLE9BQU4sQ0FBY0QsS0FBSyxDQUFDRSxJQUFwQjtBQUNEO0FBSEgsbUJBS2FGLEtBQUssQ0FBQ0UsSUFMbkIsQ0FERjtBQVNELENBVkQ7O0FBWUEsU0FBU0gsSUFBVCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRvbSwgRnJhZ21lbnQgfSBmcm9tIFwiLi4vbWFjdC9pbmRleC5qc1wiO1xyXG5jb25zdCBJdGVtID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxsaVxyXG4gICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgcHJvcHMuY2xpY2tlZChwcm9wcy5pdGVtKTtcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgSXRlbSBObyA6IHtwcm9wcy5pdGVtfVxyXG4gICAgPC9saT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgSXRlbSB9O1xyXG4iXX0=
//# sourceMappingURL=Item.js.map
