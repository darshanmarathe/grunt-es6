import { initState } from "./todo_componets/index";
import FetchTodos from "./todo_componets/api";
const actions = {
  HandleDelete(id) {
    var settings = {
      url: "http://nodeapi.foxteam.in/todos/" + id,
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

  HandleStatus(todo) {
    var obj = {};
    obj.id = todo.id;
    obj.status = todo.status;
    obj.done = todo.done;
    obj.isOpen = false;
    var settings = {
      url: "http://nodeapi.foxteam.in/todos/" + todo.id,
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

  HandleChange(todo) {
    console.log(todo);
    var settings = {
      url: "http://nodeapi.foxteam.in/todos/" + todo.id,
      method: "PUT",
      timeout: 0,
      headers: {
        "Content-Type": "application/json"
      },
      data: JSON.stringify(todo)
    };
    $.ajax(settings).done(response => {
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

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  },

  HandleAdd(e) {
    var obj = {};
    obj.title = e.str;
    obj.done = false;
    obj.desc = "";
    obj.date = e.date;
    obj.status = "Not Started";
    obj.color = this.getRandomColor();
    console.log(obj);
    var settings = {
      url: "http://nodeapi.foxteam.in/todos",
      method: "POST",
      timeout: 0,
      headers: {
        "Content-Type": "application/json"
      },
      data: JSON.stringify(obj)
    };
    $.ajax(settings).done(response => {
      initState.setState({
        todos: [response, ...initState.state.todos]
      });
      toastr.success("saved....");
    });
  },

  HandleOpenClose(todo) {
    todo.isOpen = !todo.isOpen;
    console.log('#' + "todo_" + todo.id);
    let todos = initState.state.todos.map(x => {
      if (x.id == todo.id) {
        return todo;
      } else {
        return x;
      }
    });
    initState.setState({
      todos: [...todos]
    });
  },

  More() {
    let {
      page,
      pageSize,
      todos,
      ReachedMax
    } = initState.state;
    if (ReachedMax || initState.state.loading) return;
    page = page + 1;
    initState.setState({
      loading: true
    });
    FetchTodos(page, pageSize).then(d => {
      initState.setState({
        page,
        todos: [...todos, ...d],
        ReachedMax: d.length < pageSize,
        loading: false
      });
    });
  }

};
export default actions;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC90b2RvQWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJpbml0U3RhdGUiLCJGZXRjaFRvZG9zIiwiYWN0aW9ucyIsIkhhbmRsZURlbGV0ZSIsImlkIiwic2V0dGluZ3MiLCJ1cmwiLCJtZXRob2QiLCJ0aW1lb3V0IiwiaGVhZGVycyIsIiQiLCJhamF4IiwiZG9uZSIsInJlc3BvbnNlIiwidG9kb3MiLCJzdGF0ZSIsImZpbHRlciIsIngiLCJzZXRTdGF0ZSIsIkhhbmRsZVN0YXR1cyIsInRvZG8iLCJvYmoiLCJzdGF0dXMiLCJpc09wZW4iLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJIYW5kbGVDaGFuZ2UiLCJnZXRSYW5kb21Db2xvciIsImxldHRlcnMiLCJjb2xvciIsImkiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJIYW5kbGVBZGQiLCJlIiwidGl0bGUiLCJzdHIiLCJkZXNjIiwiZGF0ZSIsInRvYXN0ciIsInN1Y2Nlc3MiLCJIYW5kbGVPcGVuQ2xvc2UiLCJNb3JlIiwicGFnZSIsInBhZ2VTaXplIiwiUmVhY2hlZE1heCIsImxvYWRpbmciLCJ0aGVuIiwiZCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsU0FBVCxRQUEwQix3QkFBMUI7QUFFQSxPQUFPQyxVQUFQLE1BQXVCLHNCQUF2QjtBQUVBLE1BQU1DLE9BQU8sR0FBRztBQUNkQyxFQUFBQSxZQUFZLENBQUNDLEVBQUQsRUFBSztBQUNmLFFBQUlDLFFBQVEsR0FBRztBQUNiQyxNQUFBQSxHQUFHLEVBQUUscUNBQXFDRixFQUQ3QjtBQUViRyxNQUFBQSxNQUFNLEVBQUUsUUFGSztBQUdiQyxNQUFBQSxPQUFPLEVBQUUsQ0FISTtBQUliQyxNQUFBQSxPQUFPLEVBQUU7QUFDUCx3QkFBZ0I7QUFEVDtBQUpJLEtBQWY7QUFTQUMsSUFBQUEsQ0FBQyxDQUFDQyxJQUFGLENBQU9OLFFBQVAsRUFBaUJPLElBQWpCLENBQXVCQyxRQUFE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LElBQUFBLElBQUksR0FBR0EsSUFBSSxHQUFHLENBQWQ7QUFDQWhELElBQUFBLFNBQVMsQ0FBQ2tCLFFBQVYsQ0FBbUI7QUFBRWlDLE1BQUFBLE9BQU8sRUFBRTtBQUFYLEtBQW5CO0FBQ0FsRCxJQUFBQSxVQUFVLENBQUMrQyxJQUFELEVBQU9DLFFBQVAsQ0FBVixDQUEyQkcsSUFBM0IsQ0FBaUNDLENBQUQsSUFBTztBQUNyQ3JELE1BQUFBLFNBQVMsQ0FBQ2tCLFFBQVYsQ0FBbUI7QUFDakI4QixRQUFBQSxJQURpQjtBQUVqQmxDLFFBQUFBLEtBQUssRUFBRSxDQUFDLEdBQUdBLEtBQUosRUFBVyxHQUFHdUMsQ0FBZCxDQUZVO0FBR2ZILFFBQUFBLFVBQVUsRUFBRUcsQ0FBQyxDQUFDQyxNQUFGLEdBQVdMLFFBSFI7QUFJZkUsUUFBQUEsT0FBTyxFQUFFO0FBSk0sT0FBbkI7QUFNRCxLQVBEO0FBUUQ7O0FBOUhhLENBQWhCO0FBaUlBLGVBQWVqRCxPQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5pdFN0YXRlIH0gZnJvbSBcIi4vdG9kb19jb21wb25ldHMvaW5kZXhcIjtcclxuXHJcbmltcG9ydCBGZXRjaFRvZG9zIGZyb20gXCIuL3RvZG9fY29tcG9uZXRzL2FwaVwiO1xyXG5cclxuY29uc3QgYWN0aW9ucyA9IHtcclxuICBIYW5kbGVEZWxldGUoaWQpIHtcclxuICAgIHZhciBzZXR0aW5ncyA9IHtcclxuICAgICAgdXJsOiBcImh0dHA6Ly9ub2RlYXBpLmZveHRlYW0uaW4vdG9kb3MvXCIgKyBpZCxcclxuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICB0aW1lb3V0OiAwLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG5cclxuICAgICQuYWpheChzZXR0aW5ncykuZG9uZSgocmVzcG9uc2UpID0+IHtcclxuICAgICAgbGV0IHRvZG9zID0gaW5pdFN0YXRlLnN0YXRlLnRvZG9zLmZpbHRlcigoeCkgPT4geC5pZCAhPSBpZCk7XHJcbiAgICAgIGluaXRTdGF0ZS5zZXRTdGF0ZSh7IHRvZG9zOiBbLi4udG9kb3NdIH0pO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgSGFuZGxlU3RhdHVzKHRvZG8pIHtcclxuICAgIHZhciBvYmogPSB7fTtcclxuICAgIG9iai5pZCA9IHRvZG8uaWQ7XHJcbiAgICBvYmouc3RhdHVzID0gdG9kby5zdGF0dXM7XHJcbiAgICBvYmouZG9uZSA9IHRvZG8uZG9uZTtcclxuICAgIG9iai5pc09wZW4gPSBmYWxzZTtcclxuICAgIHZhciBzZXR0aW5ncyA9IHtcclxuICAgICAgdXJsOiBcImh0dHA6Ly9ub2RlYXBpLmZveHRlYW0uaW4vdG9kb3MvXCIgKyB0b2RvLmlkLFxyXG4gICAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICAgIHRpbWVvdXQ6IDAsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkob2JqKSxcclxuICAgIH07XHJcblxyXG4gICAgJC5hamF4KHNldHRpbmdzKS5kb25lKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgIGxldCB0b2RvcyA9IGluaXRTdGF0ZS5zdGF0ZS50b2Rvcy5tYXAoKHgpID0+IHtcclxuICAgICAgICBpZiAoeC5pZCA9PSByZXNwb25zZS5pZCkge1xyXG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4geDtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBpbml0U3RhdGUuc2V0U3RhdGUoeyB0b2RvczogWy4uLnRvZG9zXSB9KTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgSGFuZGxlQ2hhbmdlKHRvZG8pIHtcclxuICAgIGNvbnNvbGUubG9nKHRvZG8pXHJcbiAgICB2YXIgc2V0dGluZ3MgPSB7XHJcbiAgICAgIHVybDogXCJodHRwOi8vbm9kZWFwaS5mb3h0ZWFtLmluL3RvZG9zL1wiICsgdG9kby5pZCxcclxuICAgICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgICB0aW1lb3V0OiAwLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHRvZG8pLFxyXG4gICAgfTtcclxuXHJcbiAgICAkLmFqYXgoc2V0dGluZ3MpLmRvbmUoKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGxldCB0b2RvcyA9IGluaXRTdGF0ZS5zdGF0ZS50b2Rvcy5tYXAoKHgpID0+IHtcclxuICAgICAgICBpZiAoeC5pZCA9PSByZXNwb25zZS5pZCkge1xyXG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4geDtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBpbml0U3RhdGUuc2V0U3RhdGUoeyB0b2RvczogWy4uLnRvZG9zXSB9KTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgZ2V0UmFuZG9tQ29sb3IoKSB7XHJcbiAgICBjb25zdCBsZXR0ZXJzID0gJzAxMjM0NTY3ODlBQkNERUYnO1xyXG4gICAgbGV0IGNvbG9yID0gJyMnO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcclxuICAgICAgY29sb3IgKz0gbGV0dGVyc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNildO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvbG9yO1xyXG4gIH0sXHJcbiAgSGFuZGxlQWRkKGUpIHtcclxuICAgIHZhciBvYmogPSB7fTtcclxuICAgIG9iai50aXRsZSA9IGUuc3RyO1xyXG4gICAgb2JqLmRvbmUgPSBmYWxzZTtcclxuICAgIG9iai5kZXNjID0gXCJcIjtcclxuICAgIG9iai5kYXRlID0gZS5kYXRlO1xyXG4gICAgb2JqLnN0YXR1cyA9IFwiTm90IFN0YXJ0ZWRcIjtcclxuICAgIG9iai5jb2xvciA9IHRoaXMuZ2V0UmFuZG9tQ29sb3IoKTtcclxuICAgIGNvbnNvbGUubG9nKG9iaik7XHJcbiAgICB2YXIgc2V0dGluZ3MgPSB7XHJcbiAgICAgIHVybDogXCJodHRwOi8vbm9kZWFwaS5mb3h0ZWFtLmluL3RvZG9zXCIsXHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIHRpbWVvdXQ6IDAsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkob2JqKSxcclxuICAgIH07XHJcblxyXG4gICAgJC5hamF4KHNldHRpbmdzKS5kb25lKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBpbml0U3RhdGUuc2V0U3RhdGUoeyB0b2RvczogW3Jlc3BvbnNlLCAuLi5pbml0U3RhdGUuc3RhdGUudG9kb3NdIH0pO1xyXG4gICAgICB0b2FzdHIuc3VjY2VzcyhcInNhdmVkLi4uLlwiKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgSGFuZGxlT3BlbkNsb3NlKHRvZG8pIHtcclxuICAgIHRvZG8uaXNPcGVuID0gIXRvZG8uaXNPcGVuO1xyXG4gICAgY29uc29sZS5sb2coKCcjJyArIFwidG9kb19cIiArIHRvZG8uaWQpKTtcclxuICAgIGxldCB0b2RvcyA9IGluaXRTdGF0ZS5zdGF0ZS50b2Rvcy5tYXAoKHgpID0+IHtcclxuICAgICAgaWYgKHguaWQgPT0gdG9kby5pZCkge1xyXG4gICAgICAgIHJldHVybiB0b2RvO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB4O1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGluaXRTdGF0ZS5zZXRTdGF0ZSh7IHRvZG9zOiBbLi4udG9kb3NdIH0pO1xyXG5cclxuICB9LFxyXG4gIE1vcmUoKSB7XHJcbiAgICBsZXQgeyBwYWdlLCBwYWdlU2l6ZSwgdG9kb3MsIFJlYWNoZWRNYXggfSA9IGluaXRTdGF0ZS5zdGF0ZTtcclxuICAgIGlmIChSZWFjaGVkTWF4IHx8IGluaXRTdGF0ZS5zdGF0ZS5sb2FkaW5nKSByZXR1cm47XHJcbiAgICBwYWdlID0gcGFnZSArIDE7XHJcbiAgICBpbml0U3RhdGUuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlIH0pXHJcbiAgICBGZXRjaFRvZG9zKHBhZ2UsIHBhZ2VTaXplKS50aGVuKChkKSA9PiB7XHJcbiAgICAgIGluaXRTdGF0ZS5zZXRTdGF0ZSh7XHJcbiAgICAgICAgcGFnZSxcclxuICAgICAgICB0b2RvczogWy4uLnRvZG9zLCAuLi5kXVxyXG4gICAgICAgICwgUmVhY2hlZE1heDogZC5sZW5ndGggPCBwYWdlU2l6ZVxyXG4gICAgICAgICwgbG9hZGluZzogZmFsc2VcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWN0aW9ucztcclxuIl19
//# sourceMappingURL=todoActions.js.map
