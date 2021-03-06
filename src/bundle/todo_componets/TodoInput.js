import { dom, Fragment } from "../mact/index.js";
import { initState } from "./index"; // TodoInput Component

const TodoInput = props => {
  return dom("input", {
    type: "text",
    style: {
      width: "100%"
    },
    onChange: initState.actions.HandleAdd,
    placeholder: props.placeholder
  });
};

export default TodoInput;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2pzeC90b2RvX2NvbXBvbmV0cy9Ub2RvSW5wdXQuanMiXSwibmFtZXMiOlsiZG9tIiwiRnJhZ21lbnQiLCJpbml0U3RhdGUiLCJUb2RvSW5wdXQiLCJwcm9wcyIsIndpZHRoIiwiYWN0aW9ucyIsIkhhbmRsZUFkZCIsInBsYWNlaG9sZGVyIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxHQUFULEVBQWNDLFFBQWQsUUFBOEIsa0JBQTlCO0FBRUEsU0FBU0MsU0FBVCxRQUEwQixTQUExQixDLENBQ0E7O0FBQ0EsTUFBTUMsU0FBUyxHQUFJQyxLQUFELElBQVc7QUFDM0IsU0FDRTtBQUNFLElBQUEsSUFBSSxFQUFDLE1BRFA7QUFFRSxJQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxLQUFLLEVBQUU7QUFBVCxLQUZUO0FBR0UsSUFBQSxRQUFRLEVBQUVILFNBQVMsQ0FBQ0ksT0FBVixDQUFrQkMsU0FIOUI7QUFJRSxJQUFBLFdBQVcsRUFBRUgsS0FBSyxDQUFDSTtBQUpyQixJQURGO0FBUUQsQ0FURDs7QUFXQSxlQUFlTCxTQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZG9tLCBGcmFnbWVudCB9IGZyb20gXCIuLi9tYWN0L2luZGV4LmpzXCI7XHJcblxyXG5pbXBvcnQgeyBpbml0U3RhdGUgfSBmcm9tIFwiLi9pbmRleFwiO1xyXG4vLyBUb2RvSW5wdXQgQ29tcG9uZW50XHJcbmNvbnN0IFRvZG9JbnB1dCA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8aW5wdXRcclxuICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgb25DaGFuZ2U9e2luaXRTdGF0ZS5hY3Rpb25zLkhhbmRsZUFkZH1cclxuICAgICAgcGxhY2Vob2xkZXI9e3Byb3BzLnBsYWNlaG9sZGVyfVxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9kb0lucHV0O1xyXG4iXX0=
//# sourceMappingURL=TodoInput.js.map
