function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { dom, Fragment } from "../mact/index.js";
import { TodoInput } from "./Index"; // Header Component

const Header = props => {
  return dom('Fragment', null, dom("h1", null, "Todos ", props.todos.length), dom(TodoInput, _extends({
    placeholder: props.placeholderText // HandleAdd={props.HandleAdd}

  }, props)));
};

export default Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2pzeC90b2RvX2NvbXBvbmV0cy9IZWFkZXIuanMiXSwibmFtZXMiOlsiZG9tIiwiRnJhZ21lbnQiLCJUb2RvSW5wdXQiLCJIZWFkZXIiLCJwcm9wcyIsInRvZG9zIiwibGVuZ3RoIiwicGxhY2Vob2xkZXJUZXh0Il0sIm1hcHBpbmdzIjoiOztBQUFBLFNBQVNBLEdBQVQsRUFBY0MsUUFBZCxRQUE4QixrQkFBOUI7QUFFQSxTQUFTQyxTQUFULFFBQTBCLFNBQTFCLEMsQ0FDQTs7QUFDQSxNQUFNQyxNQUFNLEdBQUlDLEtBQUQsSUFBVztBQUN4QixTQUNFLHNCQUNFLDBCQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBdkIsQ0FERixFQUVFLElBQUMsU0FBRDtBQUNFLElBQUEsV0FBVyxFQUFFRixLQUFLLENBQUNHLGVBRHJCLENBRUU7O0FBRkYsS0FHTUgsS0FITixFQUZGLENBREY7QUFVRCxDQVhEOztBQWFBLGVBQWVELE1BQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkb20sIEZyYWdtZW50IH0gZnJvbSBcIi4uL21hY3QvaW5kZXguanNcIjtcclxuXHJcbmltcG9ydCB7IFRvZG9JbnB1dCB9IGZyb20gXCIuL0luZGV4XCI7XHJcbi8vIEhlYWRlciBDb21wb25lbnRcclxuY29uc3QgSGVhZGVyID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxoMT5Ub2RvcyB7cHJvcHMudG9kb3MubGVuZ3RofTwvaDE+XHJcbiAgICAgIDxUb2RvSW5wdXRcclxuICAgICAgICBwbGFjZWhvbGRlcj17cHJvcHMucGxhY2Vob2xkZXJUZXh0fVxyXG4gICAgICAgIC8vIEhhbmRsZUFkZD17cHJvcHMuSGFuZGxlQWRkfVxyXG4gICAgICAgIHsuLi5wcm9wc31cclxuICAgICAgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiJdfQ==
//# sourceMappingURL=Header.js.map
