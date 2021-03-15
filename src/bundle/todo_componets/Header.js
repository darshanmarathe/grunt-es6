function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { dom, Fragment } from "../mact/index.js";
import { TodoInput } from "./Index";
import initState from "./initialstate.js";
const i18n = initState.translations(); // Header Component

const Header = props => {
  return dom('Fragment', null, dom("h1", null, i18n('todoLabel'), " ", props.todos.length), dom(TodoInput, _extends({
    placeholder: i18n('placeHolder')
  }, props)));
};

export default Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2pzeC90b2RvX2NvbXBvbmV0cy9IZWFkZXIuanMiXSwibmFtZXMiOlsiZG9tIiwiRnJhZ21lbnQiLCJUb2RvSW5wdXQiLCJpbml0U3RhdGUiLCJpMThuIiwidHJhbnNsYXRpb25zIiwiSGVhZGVyIiwicHJvcHMiLCJ0b2RvcyIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxTQUFTQSxHQUFULEVBQWNDLFFBQWQsUUFBOEIsa0JBQTlCO0FBRUEsU0FBU0MsU0FBVCxRQUEwQixTQUExQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsbUJBQXRCO0FBQ0EsTUFBTUMsSUFBSSxHQUFHRCxTQUFTLENBQUNFLFlBQVYsRUFBYixDLENBRUE7O0FBQ0EsTUFBTUMsTUFBTSxHQUFJQyxLQUFELElBQVc7QUFFeEIsU0FDRSxzQkFDRSxnQkFBS0gsSUFBSSxDQUFDLFdBQUQsQ0FBVCxPQUF5QkcsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQXJDLENBREYsRUFFRSxJQUFDLFNBQUQ7QUFDRSxJQUFBLFdBQVcsRUFBRUwsSUFBSSxDQUFDLGFBQUQ7QUFEbkIsS0FFTUcsS0FGTixFQUZGLENBREY7QUFTRCxDQVhEOztBQWFBLGVBQWVELE1BQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkb20sIEZyYWdtZW50IH0gZnJvbSBcIi4uL21hY3QvaW5kZXguanNcIjtcclxuXHJcbmltcG9ydCB7IFRvZG9JbnB1dCB9IGZyb20gXCIuL0luZGV4XCI7XHJcbmltcG9ydCBpbml0U3RhdGUgZnJvbSBcIi4vaW5pdGlhbHN0YXRlLmpzXCI7XHJcbmNvbnN0IGkxOG4gPSBpbml0U3RhdGUudHJhbnNsYXRpb25zKClcclxuXHJcbi8vIEhlYWRlciBDb21wb25lbnRcclxuY29uc3QgSGVhZGVyID0gKHByb3BzKSA9PiB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aDE+e2kxOG4oJ3RvZG9MYWJlbCcpfSB7cHJvcHMudG9kb3MubGVuZ3RofTwvaDE+XHJcbiAgICAgIDxUb2RvSW5wdXRcclxuICAgICAgICBwbGFjZWhvbGRlcj17aTE4bigncGxhY2VIb2xkZXInKX1cclxuICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iXX0=
//# sourceMappingURL=Header.js.map
