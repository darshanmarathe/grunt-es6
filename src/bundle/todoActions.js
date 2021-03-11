import { initState } from "./todo_componets/index";
const actions = {
  HandleDelete(id) {
    var settings = {
      url: "http://localhost:3000/todos/" + id,
      method: "DELETE",
      timeout: 0,
      headers: {
        "Content-Type": "application/json"
      }
    };
    $.ajax(settings).done(response => {
      let todos = initState.state.todos.filter(x => x.id != id);
      initState.setState({
        todos: [...todos]
      });
    });
  },

  HandleDone(todo) {
    var obj = {};
    obj.id = todo.id;
    obj.done = !todo.done;
    console.log(obj);
    var settings = {
      url: "http://localhost:3000/todos/" + todo.id,
      method: "PUT",
      timeout: 0,
      headers: {
        "Content-Type": "application/json"
      },
      data: JSON.stringify(obj)
    };
    $.ajax(settings).done(response => {
      console.log(response);
      let todos = initState.state.todos.map(x => {
        if (x.id == response.id) {
          return response;
        } else {
          return x;
        }
      });
      initState.setState({
        todos: [...todos]
      });
    });
  },

  HandleAdd(e) {
    var obj = {};
    obj.title = e.target.value;
    obj.done = false;
    console.log(obj);
    var settings = {
      url: "http://localhost:3000/todos",
      method: "POST",
      timeout: 0,
      headers: {
        "Content-Type": "application/json"
      },
      data: JSON.stringify(obj)
    };
    $.ajax(settings).done(response => {
      initState.setState({
        todos: [...initState.state.todos, response]
      });
      alert("saved....");
    });
  }

};
export default actions;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC90b2RvQWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJpbml0U3RhdGUiLCJhY3Rpb25zIiwiSGFuZGxlRGVsZXRlIiwiaWQiLCJzZXR0aW5ncyIsInVybCIsIm1ldGhvZCIsInRpbWVvdXQiLCJoZWFkZXJzIiwiJCIsImFqYXgiLCJkb25lIiwicmVzcG9uc2UiLCJ0b2RvcyIsInN0YXRlIiwiZmlsdGVyIiwieCIsInNldFN0YXRlIiwiSGFuZGxlRG9uZSIsInRvZG8iLCJvYmoiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJtYXAiLCJIYW5kbGVBZGQiLCJlIiwidGl0bGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImFsZXJ0Il0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxTQUFULFFBQTBCLHdCQUExQjtBQUNBLE1BQU1DLE9BQU8sR0FBRztBQUNkQyxFQUFBQSxZQUFZLENBQUNDLEVBQUQsRUFBSztBQUNmLFFBQUlDLFFBQVEsR0FBRztBQUNiQyxNQUFBQSxHQUFHLEVBQUUsaUNBQWlDRixFQUR6QjtBQUViRyxNQUFBQSxNQUFNLEVBQUUsUUFGSztBQUdiQyxNQUFBQSxPQUFPLEVBQUUsQ0FISTtBQUliQyxNQUFBQSxPQUFPLEVBQUU7QUFDUCx3QkFBZ0I7QUFEVDtBQUpJLEtBQWY7QUFTQUMsSUFBQUEsQ0FBQyxDQUFDQyxJQUFGLENBQU9OLFFBQVAsRUFBaUJPLElBQWpCLENBQXVCQyxRQUFELElBQWM7QUFDbEMsVUFBSUMsS0FBSyxHQUFHYixTQUFTLENBQUNjLEtBQVYsQ0FBZ0JELEtBQWhCLENBQXNCRSxNQUF0QixDQUE4QkMsQ0FBRCxJQUFPQSxDQUFDLENBQUNiLEVBQUYsSUFBUUEsRUFBNUMsQ0FBWjtBQUNBSCxNQUFBQSxTQUFTLENBQUNpQixRQUFWLENBQW1CO0FBQUVKLFFBQUFBLEtBQUssRUFBRSxDQUFDLEdBQUdBLEtBQUo7QUFBVCxPQUFuQjtBQUNELEtBSEQ7QUFJRCxHQWZhOztBQWlCZEssRUFBQUEsVUFBVSxDQUFDQyxJQUFELEVBQU87QUFDZixRQUFJQyxHQUFHLEdBQUcsRUFBVjtBQUNBQSxJQUFBQSxHQUFHLENBQUNqQixFQUFKLEdBQVNnQixJQUFJLENBQUNoQixFQUFkO0FBQ0FpQixJQUFBQSxHQUFHLENBQUNULElBQUosR0FBVyxDQUFDUSxJQUFJLENBQUNSLElBQWpCO0FBQ0FVLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0EsUUFBSWhCLFFBQVEsR0FBRztBQUNiQyxNQUFBQSxHQUFHLEVBQUUsaUNBQWlDYyxJQUFJLENBQUNoQixFQUQ5QjtBQUViRyxNQUFBQSxNQUFNLEVBQUUsS0FGSztBQUdiQyxNQUFBQSxPQUFPLEVBQUUsQ0FISTtBQUliQyxNQUFBQSxPQUFPLEVBQUU7QUFDUCx3QkFBZ0I7QUFEVCxPQUpJO0FBT2JlLE1BQUFBLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVMLEdBQWY7QUFQTyxLQUFmO0FBVUFYLElBQUFBLENBQUMsQ0FBQ0MsSUFBRixDQUFPTixRQUFQLEVBQWlCTyxJQUFqQixDQUF1QkMsUUFBRCxJQUFjO0FBQ2xDUyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVYsUUFBWjtBQUNBLFVBQUlDLEtBQUssR0FBR2IsU0FBUyxDQUFDYyxLQUFWLENBQWdCRCxLQUFoQixDQUFzQmEsR0FBdEIsQ0FBMkJWLENBQUQsSUFBTztBQUMzQyxZQUFJQSxDQUFDLENBQUNiLEVBQUYsSUFBUVMsUUFBUSxDQUFDVCxFQUFyQixFQUF5QjtBQUN2QixpQkFBT1MsUUFBUDtBQUNELFNBRkQsTUFFTztBQUNMLGlCQUFPSSxDQUFQO0FBQ0Q7QUFDRixPQU5XLENBQVo7QUFPQWhCLE1BQUFBLFNBQVMsQ0FBQ2lCLFFBQVYsQ0FBbUI7QUFBRUosUUFBQUEsS0FBSyxFQUFFLENBQUMsR0FBR0EsS0FBSjtBQUFULE9BQW5CO0FBQ0QsS0FWRDtBQVdELEdBM0NhOztBQTZDZGMsRUFBQUEsU0FBUyxDQUFDQyxDQUFELEVBQUk7QUFDWCxRQUFJUixHQUFHLEdBQUcsRUFBVjtBQUNBQSxJQUFBQSxHQUFHLENBQUNTLEtBQUosR0FBWUQsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLEtBQXJCO0FBQ0FYLElBQUFBLEdBQUcsQ0FBQ1QsSUFBSixHQUFXLEtBQVg7QUFDQVUsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDQSxRQUFJaEIsUUFBUSxHQUFHO0FBQ2JDLE1BQUFBLEdBQUcsRUFBRSw2QkFEUTtBQUViQyxNQUFBQSxNQUFNLEVBQUUsTUFGSztBQUdiQyxNQUFBQSxPQUFPLEVBQUUsQ0FISTtBQUliQyxNQUFBQSxPQUFPLEVBQUU7QUFDUCx3QkFBZ0I7QUFEVCxPQUpJO0FBT2JlLE1BQUFBLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVMLEdBQWY7QUFQTyxLQUFmO0FBVUFYLElBQUFBLENBQUMsQ0FBQ0MsSUFBRixDQUFPTixRQUFQLEVBQWlCTyxJQUFqQixDQUF1QkMsUUFBRCxJQUFjO0FBQ2xDWixNQUFBQSxTQUFTLENBQUNpQixRQUFWLENBQW1CO0FBQUVKLFFBQUFBLEtBQUssRUFBRSxDQUFDLEdBQUdiLFNBQVMsQ0FBQ2MsS0FBVixDQUFnQkQsS0FBcEIsRUFBMkJELFFBQTNCO0FBQVQsT0FBbkI7QUFDQW9CLE1BQUFBLEtBQUssQ0FBQyxXQUFELENBQUw7QUFDRCxLQUhEO0FBSUQ7O0FBaEVhLENBQWhCO0FBbUVBLGVBQWUvQixPQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5pdFN0YXRlIH0gZnJvbSBcIi4vdG9kb19jb21wb25ldHMvaW5kZXhcIjtcclxuY29uc3QgYWN0aW9ucyA9IHtcclxuICBIYW5kbGVEZWxldGUoaWQpIHtcclxuICAgIHZhciBzZXR0aW5ncyA9IHtcclxuICAgICAgdXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC90b2Rvcy9cIiArIGlkLFxyXG4gICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgIHRpbWVvdXQ6IDAsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgIH07XHJcblxyXG4gICAgJC5hamF4KHNldHRpbmdzKS5kb25lKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBsZXQgdG9kb3MgPSBpbml0U3RhdGUuc3RhdGUudG9kb3MuZmlsdGVyKCh4KSA9PiB4LmlkICE9IGlkKTtcclxuICAgICAgaW5pdFN0YXRlLnNldFN0YXRlKHsgdG9kb3M6IFsuLi50b2Rvc10gfSk7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBIYW5kbGVEb25lKHRvZG8pIHtcclxuICAgIHZhciBvYmogPSB7fTtcclxuICAgIG9iai5pZCA9IHRvZG8uaWQ7XHJcbiAgICBvYmouZG9uZSA9ICF0b2RvLmRvbmU7XHJcbiAgICBjb25zb2xlLmxvZyhvYmopO1xyXG4gICAgdmFyIHNldHRpbmdzID0ge1xyXG4gICAgICB1cmw6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL3RvZG9zL1wiICsgdG9kby5pZCxcclxuICAgICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgICB0aW1lb3V0OiAwLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KG9iaiksXHJcbiAgICB9O1xyXG5cclxuICAgICQuYWpheChzZXR0aW5ncykuZG9uZSgocmVzcG9uc2UpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICBsZXQgdG9kb3MgPSBpbml0U3RhdGUuc3RhdGUudG9kb3MubWFwKCh4KSA9PiB7XHJcbiAgICAgICAgaWYgKHguaWQgPT0gcmVzcG9uc2UuaWQpIHtcclxuICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgaW5pdFN0YXRlLnNldFN0YXRlKHsgdG9kb3M6IFsuLi50b2Rvc10gfSk7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBIYW5kbGVBZGQoZSkge1xyXG4gICAgdmFyIG9iaiA9IHt9O1xyXG4gICAgb2JqLnRpdGxlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICBvYmouZG9uZSA9IGZhbHNlO1xyXG4gICAgY29uc29sZS5sb2cob2JqKTtcclxuICAgIHZhciBzZXR0aW5ncyA9IHtcclxuICAgICAgdXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC90b2Rvc1wiLFxyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICB0aW1lb3V0OiAwLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KG9iaiksXHJcbiAgICB9O1xyXG5cclxuICAgICQuYWpheChzZXR0aW5ncykuZG9uZSgocmVzcG9uc2UpID0+IHtcclxuICAgICAgaW5pdFN0YXRlLnNldFN0YXRlKHsgdG9kb3M6IFsuLi5pbml0U3RhdGUuc3RhdGUudG9kb3MsIHJlc3BvbnNlXSB9KTtcclxuICAgICAgYWxlcnQoXCJzYXZlZC4uLi5cIik7XHJcbiAgICB9KTtcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWN0aW9ucztcclxuIl19
//# sourceMappingURL=todoActions.js.map