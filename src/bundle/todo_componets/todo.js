import { dom, Fragment, memoize } from "../mact/index.js";
import moment from 'moment';
import { initState, PeopleLookUp } from "./index"; // Todo Component

const Todo = props => {
  function renderTodo() {
    let todo = props.title == null ? "Junk data" : props.title;
    const decoration = props.done ? 'line-through' : 'none';
    return dom('Fragment', null, dom("div", {
      class: "titleDiv",
      style: {
        'text-decoration': decoration
      },
      onBlur: e => {
        const todo = {
          id: props.id,
          title: e.target.innerHTML
        };
        initState.actions.HandleChange(todo);
      },
      contentEditable: "true",
      id: props.id + "_title"
    }, todo), dom("div", {
      class: "controlsContainer"
    }, dom("select", {
      value: props.status,
      style: {
        marginTop: '5px'
      },
      onChange: e => {
        const todo = {
          id: props.id,
          status: e.target.value,
          done: e.target.value === "Done"
        };
        Done_Click(todo);
      }
    }, dom("option", {
      value: props.status
    }, props.status), initState.statuses.filter(x => x != props.status).map(x => dom("option", {
      value: x
    }, x))), dom("button", {
      onClick: e => {
        Delete_Click(props);
      }
    }, "X"), dom("button", {
      onClick: e => {
        // $("#" + props.id + "div").slideToggle();
        // initState.actions.HandleOpenClose(props);
        Handle_Popup("todoItem" + props.id);
      }
    }, "..."), dom("span", {
      class: "dateContainer"
    }, moment(props.date).format("Do MMM YYYY")), dom("input", {
      type: "color",
      value: props.color,
      onChange: e => {
        const todo = {
          id: props.id,
          color: e.target.value
        };
        initState.actions.HandleChange(todo);
      }
    }), dom("span", {
      class: "datepicker-toggle"
    }, dom("span", {
      class: "datepicker-toggle-button"
    }), dom("input", {
      type: "date",
      class: "datepicker-input",
      value: new Date(props.date),
      onChange: e => {
        const todo = {
          id: props.id,
          date: e.target.value
        };
        initState.actions.HandleChange(todo);
      }
    })), dom("button", {
      dangerouslySetInnerHTML: {
        __html: `${props.isOpen ? '&#8593;' : '&#8595;'}`
      },
      style: {
        float: 'right',
        marginTop: '5px',
        fontWeight: 'bold'
      },
      onClick: e => {
        console.log('#' + "todo_" + props.id, $('#' + "todo_" + props.id).length);
        $('#' + "todo_" + props.id).toggle(); //        setTimeout(() => {

        initState.actions.HandleOpenClose(props); //      }, 3100);
      }
    })));
  }

  function Delete_Click(e) {
    if (confirm("Do you want to delete this record ?")) {
      initState.actions.HandleDelete(e.id);
    }
  }

  function Handle_Popup(id) {
    const _id = `#${id}`;
    console.log(_id);
    $(_id).colorbox({
      width: "600px",
      inline: false,
      html: dom(PeopleLookUp, props),
      onClosed: function () {
        $.colorbox.remove();
        $(_id).css('width', '');
      }
    });
  }

  function Done_Click(todo) {
    initState.actions.HandleStatus(todo);
  }

  let shadow = '5px 0px ' + (props.color || 'black'); //style={{ 'box-shadow': shadow }}

  return dom("div", {
    class: "todoItem",
    style: {
      boxShadow: shadow
    },
    id: "todoItem" + props.id,
    onMouseOver: e => {//e.target.style.boxShadow = shadow
    },
    onMouseOut: e => {//e.target.style.boxShadow = '';
    }
  }, props.done === true ? dom("del", null, " ", renderTodo(), " ") : renderTodo(), dom("div", {
    id: "todo_" + props.id,
    style: {
      display: props.isOpen ? "block" : "none"
    }
  }, dom("br", null), dom("br", null), dom("div", {
    class: "desc",
    onBlur: e => {
      var todo = {
        id: props.id,
        desc: e.target.innerHTML,
        isOpen: true
      };
      initState.actions.HandleChange(todo);
    },
    contentEditable: "true",
    id: props.id + "div"
  }, props.desc)));
};

export default memoize(Todo);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2pzeC90b2RvX2NvbXBvbmV0cy90b2RvLmpzIl0sIm5hbWVzIjpbImRvbSIsIkZyYWdtZW50IiwibWVtb2l6ZSIsIm1vbWVudCIsImluaXRTdGF0ZSIsIlBlb3BsZUxvb2tVcCIsIlRvZG8iLCJwcm9wcyIsInJlbmRlclRvZG8iLCJ0b2RvIiwidGl0bGUiLCJkZWNvcmF0aW9uIiwiZG9uZSIsImUiLCJpZCIsInRhcmdldCIsImlubmVySFRNTCIsImFjdGlvbnMiLCJIYW5kbGVDaGFuZ2UiLCJzdGF0dXMiLCJtYXJnaW5Ub3AiLCJ2YWx1ZSIsIkRvbmVfQ2xpY2siLCJzdGF0dXNlcyIsImZpbHRlciIsIngiLCJtYXAiLCJEZWxldGVfQ2xpY2siLCJIYW5kbGVfUG9wdXAiLCJkYXRlIiwiZm9ybWF0IiwiY29sb3IiLCJEYXRlIiwiX19odG1sIiwiaXNPcGVuIiwiZmxvYXQiLCJmb250V2VpZ2h0IiwiY29uc29sZSIsImxvZyIsIiQiLCJsZW5ndGgiLCJ0b2dnbGUiLCJIYW5kbGVPcGVuQ2xvc2UiLCJjb25maXJtIiwiSGFuZGxlRGVsZXRlIiwiX2lkIiwiY29sb3Jib3giLCJ3aWR0aCIsImlubGluZSIsImh0bWwiLCJvbkNsb3NlZCIsInJlbW92ZSIsImNzcyIsIkhhbmRsZVN0YXR1cyIsInNoYWRvdyIsImJveFNoYWRvdyIsImRpc3BsYXkiLCJkZXNjIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxHQUFULEVBQWNDLFFBQWQsRUFBd0JDLE9BQXhCLFFBQXVDLGtCQUF2QztBQUNBLE9BQU9DLE1BQVAsTUFBbUIsUUFBbkI7QUFDQSxTQUFTQyxTQUFULEVBQW9CQyxZQUFwQixRQUF3QyxTQUF4QyxDLENBRUE7O0FBQ0EsTUFBTUMsSUFBSSxHQUFJQyxLQUFELElBQVc7QUFDdEIsV0FBU0MsVUFBVCxHQUFzQjtBQUNwQixRQUFJQyxJQUFJLEdBQUdGLEtBQUssQ0FBQ0csS0FBTixJQUFlLElBQWYsR0FBc0IsV0FBdEIsR0FBb0NILEtBQUssQ0FB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Q0FDbEc7QUFDRCxLQUZEO0FBR0UsSUFBQSxVQUFVLEVBQUlBLENBQUQsSUFBTyxDQUNsQjtBQUNEO0FBTEgsS0FNR04sS0FBSyxDQUFDSyxJQUFOLEtBQWUsSUFBZixHQUFzQixzQkFBT0osVUFBVSxFQUFqQixNQUF0QixHQUFvREEsVUFBVSxFQU5qRSxFQVFFO0FBQUssSUFBQSxFQUFFLEVBQUUsVUFBVUQsS0FBSyxDQUFDTyxFQUF6QjtBQUE2QixJQUFBLEtBQUssRUFBRTtBQUFFMEMsTUFBQUEsT0FBTyxFQUFFakQsS0FBSyxDQUFDMkIsTUFBTixHQUFlLE9BQWYsR0FBeUI7QUFBcEM7QUFBcEMsS0FDRSxlQURGLEVBRUUsZUFGRixFQUlFO0FBQUssSUFBQSxLQUFLLEVBQUMsTUFBWDtBQUNFLElBQUEsTUFBTSxFQUFHckIsQ0FBRCxJQUFPO0FBQ2IsVUFBSUosSUFBSSxHQUFHO0FBQ1RLLFFBQUFBLEVBQUUsRUFBRVAsS0FBSyxDQUFDTyxFQUREO0FBRVQyQyxRQUFBQSxJQUFJLEVBQUU1QyxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsU0FGTjtBQUdUa0IsUUFBQUEsTUFBTSxFQUFFO0FBSEMsT0FBWDtBQU1BOUIsTUFBQUEsU0FBUyxDQUFDYSxPQUFWLENBQWtCQyxZQUFsQixDQUErQlQsSUFBL0I7QUFDRCxLQVRIO0FBVUUsSUFBQSxlQUFlLEVBQUMsTUFWbEI7QUFXRSxJQUFBLEVBQUUsRUFBRUYsS0FBSyxDQUFDTyxFQUFOLEdBQVc7QUFYakIsS0FjR1AsS0FBSyxDQUFDa0QsSUFkVCxDQUpGLENBUkYsQ0FERjtBQWlDRCxDQWpKRDs7QUFtSkEsZUFBZXZELE9BQU8sQ0FBQ0ksSUFBRCxDQUF0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRvbSwgRnJhZ21lbnQsIG1lbW9pemUgfSBmcm9tIFwiLi4vbWFjdC9pbmRleC5qc1wiO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcclxuaW1wb3J0IHsgaW5pdFN0YXRlLCBQZW9wbGVMb29rVXAgfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5cclxuLy8gVG9kbyBDb21wb25lbnRcclxuY29uc3QgVG9kbyA9IChwcm9wcykgPT4ge1xyXG4gIGZ1bmN0aW9uIHJlbmRlclRvZG8oKSB7XHJcbiAgICBsZXQgdG9kbyA9IHByb3BzLnRpdGxlID09IG51bGwgPyBcIkp1bmsgZGF0YVwiIDogcHJvcHMudGl0bGU7XHJcbiAgICBjb25zdCBkZWNvcmF0aW9uID0gcHJvcHMuZG9uZSA/ICdsaW5lLXRocm91Z2gnIDogJ25vbmUnXHJcbiAgICByZXR1cm4gPD5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZURpdlwiXHJcbiAgICAgICAgc3R5bGU9e3sgJ3RleHQtZGVjb3JhdGlvbic6IGRlY29yYXRpb24gfX0gb25CbHVyPXsoZSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgdG9kbyA9IHtcclxuICAgICAgICAgICAgaWQ6IHByb3BzLmlkLFxyXG4gICAgICAgICAgICB0aXRsZTogZS50YXJnZXQuaW5uZXJIVE1MXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgaW5pdFN0YXRlLmFjdGlvbnMuSGFuZGxlQ2hhbmdlKHRvZG8pO1xyXG4gICAgICAgIH19XHJcbiAgICAgICAgY29udGVudEVkaXRhYmxlPVwidHJ1ZVwiXHJcbiAgICAgICAgaWQ9e3Byb3BzLmlkICsgXCJfdGl0bGVcIn0+XHJcbiAgICAgICAge3RvZG99XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xzQ29udGFpbmVyXCI+XHJcbiAgICAgICAgPHNlbGVjdCB2YWx1ZT17cHJvcHMuc3RhdHVzfSBzdHlsZT17eyBtYXJnaW5Ub3A6ICc1cHgnIH19IG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgdG9kbyA9IHtcclxuICAgICAgICAgICAgaWQ6IHByb3BzLmlkLFxyXG4gICAgICAgICAgICBzdGF0dXM6IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgICBkb25lOiAoZS50YXJnZXQudmFsdWUgPT09IFwiRG9uZVwiKVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIERvbmVfQ2xpY2sodG9kbyk7XHJcbiAgICAgICAgfX0+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtwcm9wcy5zdGF0dXN9Pntwcm9wcy5zdGF0dXN9PC9vcHRpb24+XHJcbiAgICAgICAgICB7aW5pdFN0YXRlLnN0YXR1c2VzLmZpbHRlcih4ID0+IHggIT0gcHJvcHMuc3RhdHVzKVxyXG4gICAgICAgICAgICAubWFwKCh4KSA9PiA8b3B0aW9uIHZhbHVlPXt4fT57eH08L29wdGlvbj4pfVxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIERlbGV0ZV9DbGljayhwcm9wcyk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIFhcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAvLyAkKFwiI1wiICsgcHJvcHMuaWQgKyBcImRpdlwiKS5zbGlkZVRvZ2dsZSgpO1xyXG4gICAgICAgICAgICAvLyBpbml0U3RhdGUuYWN0aW9ucy5IYW5kbGVPcGVuQ2xvc2UocHJvcHMpO1xyXG4gICAgICAgICAgICBIYW5kbGVfUG9wdXAoXCJ0b2RvSXRlbVwiICsgcHJvcHMuaWQpXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIC4uLlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZGF0ZUNvbnRhaW5lclwiPlxyXG4gICAgICAgICAge21vbWVudChwcm9wcy5kYXRlKS5mb3JtYXQoXCJEbyBNTU0gWVlZWVwiKX1cclxuICAgICAgICA8L3NwYW4+XHJcblxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY29sb3JcIiB2YWx1ZT17cHJvcHMuY29sb3J9IG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgdG9kbyA9IHtcclxuICAgICAgICAgICAgaWQ6IHByb3BzLmlkLFxyXG4gICAgICAgICAgICBjb2xvcjogZS50YXJnZXQudmFsdWVcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBpbml0U3RhdGUuYWN0aW9ucy5IYW5kbGVDaGFuZ2UodG9kbyk7XHJcbiAgICAgICAgfX0gLz5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImRhdGVwaWNrZXItdG9nZ2xlXCI+XHJcblxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJkYXRlcGlja2VyLXRvZ2dsZS1idXR0b25cIj48L3NwYW4+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBjbGFzcz1cImRhdGVwaWNrZXItaW5wdXRcIiB2YWx1ZT17bmV3IERhdGUocHJvcHMuZGF0ZSl9IG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0b2RvID0ge1xyXG4gICAgICAgICAgICAgIGlkOiBwcm9wcy5pZCxcclxuICAgICAgICAgICAgICBkYXRlOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpbml0U3RhdGUuYWN0aW9ucy5IYW5kbGVDaGFuZ2UodG9kbyk7XHJcbiAgICAgICAgICB9fSAvPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgPGJ1dHRvbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGAke3Byb3BzLmlzT3BlbiA/ICcmIzg1OTM7JyA6ICcmIzg1OTU7J31gIH19IHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnLCBtYXJnaW5Ub3A6ICc1cHgnLCBmb250V2VpZ2h0OiAnYm9sZCcgfX0gb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCgnIycgKyBcInRvZG9fXCIgKyBwcm9wcy5pZCksICQoJyMnICsgXCJ0b2RvX1wiICsgcHJvcHMuaWQpLmxlbmd0aCk7XHJcbiAgICAgICAgICAkKCcjJyArIFwidG9kb19cIiArIHByb3BzLmlkKS50b2dnbGUoKTtcclxuICAgICAgICAgIC8vICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIGluaXRTdGF0ZS5hY3Rpb25zLkhhbmRsZU9wZW5DbG9zZShwcm9wcyk7XHJcbiAgICAgICAgICAvLyAgICAgIH0sIDMxMDApO1xyXG5cclxuICAgICAgICB9fT5cclxuXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBEZWxldGVfQ2xpY2soZSkge1xyXG4gICAgaWYgKGNvbmZpcm0oXCJEbyB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyByZWNvcmQgP1wiKSkge1xyXG4gICAgICBpbml0U3RhdGUuYWN0aW9ucy5IYW5kbGVEZWxldGUoZS5pZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBIYW5kbGVfUG9wdXAoaWQpIHtcclxuICAgIGNvbnN0IF9pZCA9IGAjJHtpZH1gO1xyXG4gICAgY29uc29sZS5sb2coX2lkKTtcclxuICAgICQoX2lkKS5jb2xvcmJveCh7XHJcbiAgICAgIHdpZHRoOiBcIjYwMHB4XCIsIGlubGluZTogZmFsc2UsIGh0bWw6IDxQZW9wbGVMb29rVXAgey4uLnByb3BzfSAvPiwgb25DbG9zZWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkLmNvbG9yYm94LnJlbW92ZSgpO1xyXG4gICAgICAgICQoX2lkKS5jc3MoJ3dpZHRoJywgJycpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcblxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gRG9uZV9DbGljayh0b2RvKSB7XHJcblxyXG4gICAgaW5pdFN0YXRlLmFjdGlvbnMuSGFuZGxlU3RhdHVzKHRvZG8pO1xyXG4gIH1cclxuXHJcbiAgbGV0IHNoYWRvdyA9ICc1cHggMHB4ICcgKyAocHJvcHMuY29sb3IgfHwgJ2JsYWNrJyk7XHJcbiAgLy9zdHlsZT17eyAnYm94LXNoYWRvdyc6IHNoYWRvdyB9fVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzPVwidG9kb0l0ZW1cIiBzdHlsZT17eyBib3hTaGFkb3c6IHNoYWRvdyB9fSBpZD17XCJ0b2RvSXRlbVwiICsgcHJvcHMuaWR9IG9uTW91c2VPdmVyPXsoKGUpID0+IHtcclxuICAgICAgLy9lLnRhcmdldC5zdHlsZS5ib3hTaGFkb3cgPSBzaGFkb3dcclxuICAgIH0pfVxyXG4gICAgICBvbk1vdXNlT3V0PXsoKGUpID0+IHtcclxuICAgICAgICAvL2UudGFyZ2V0LnN0eWxlLmJveFNoYWRvdyA9ICcnO1xyXG4gICAgICB9KX0+XHJcbiAgICAgIHtwcm9wcy5kb25lID09PSB0cnVlID8gPGRlbD4ge3JlbmRlclRvZG8oKX0gPC9kZWw+IDogcmVuZGVyVG9kbygpfVxyXG5cclxuICAgICAgPGRpdiBpZD17XCJ0b2RvX1wiICsgcHJvcHMuaWR9IHN0eWxlPXt7IGRpc3BsYXk6IHByb3BzLmlzT3BlbiA/IFwiYmxvY2tcIiA6IFwibm9uZVwiIH19PlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGVzY1wiXHJcbiAgICAgICAgICBvbkJsdXI9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciB0b2RvID0ge1xyXG4gICAgICAgICAgICAgIGlkOiBwcm9wcy5pZCxcclxuICAgICAgICAgICAgICBkZXNjOiBlLnRhcmdldC5pbm5lckhUTUwsXHJcbiAgICAgICAgICAgICAgaXNPcGVuOiB0cnVlLFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgaW5pdFN0YXRlLmFjdGlvbnMuSGFuZGxlQ2hhbmdlKHRvZG8pO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIGNvbnRlbnRFZGl0YWJsZT1cInRydWVcIlxyXG4gICAgICAgICAgaWQ9e3Byb3BzLmlkICsgXCJkaXZcIn1cclxuXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3Byb3BzLmRlc2N9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW1vaXplKFRvZG8pO1xyXG4iXX0=
//# sourceMappingURL=todo.js.map
