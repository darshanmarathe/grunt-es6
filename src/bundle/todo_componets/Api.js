function FetchTodos(page = 1, pageSize = 2) {
  const url = `http://localhost:3000/todos?_page=${page}&_pageSize=${pageSize}`;
  return new Promise((resolve, reject) => {
    $.get(url).then(d => {
      resolve(d);
    });
  });
}

export default FetchTodos;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2pzeC90b2RvX2NvbXBvbmV0cy9BcGkuanMiXSwibmFtZXMiOlsiRmV0Y2hUb2RvcyIsInBhZ2UiLCJwYWdlU2l6ZSIsInVybCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiJCIsImdldCIsInRoZW4iLCJkIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxVQUFULENBQW9CQyxJQUFJLEdBQUcsQ0FBM0IsRUFBOEJDLFFBQVEsR0FBRyxDQUF6QyxFQUE0QztBQUMxQyxRQUFNQyxHQUFHLEdBQUkscUNBQW9DRixJQUFLLGNBQWFDLFFBQVMsRUFBNUU7QUFDQSxTQUFPLElBQUlFLE9BQUosQ0FBWSxDQUFDQyxPQUFELEVBQVVDLE1BQVYsS0FBcUI7QUFDdENDLElBQUFBLENBQUMsQ0FBQ0MsR0FBRixDQUFNTCxHQUFOLEVBQVdNLElBQVgsQ0FBaUJDLENBQUQsSUFBTztBQUNyQkwsTUFBQUEsT0FBTyxDQUFDSyxDQUFELENBQVA7QUFDRCxLQUZEO0FBR0QsR0FKTSxDQUFQO0FBS0Q7O0FBRUQsZUFBZVYsVUFBZiIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIEZldGNoVG9kb3MocGFnZSA9IDEsIHBhZ2VTaXplID0gMikge1xyXG4gIGNvbnN0IHVybCA9IGBodHRwOi8vbG9jYWxob3N0OjMwMDAvdG9kb3M/X3BhZ2U9JHtwYWdlfSZfcGFnZVNpemU9JHtwYWdlU2l6ZX1gO1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAkLmdldCh1cmwpLnRoZW4oKGQpID0+IHtcclxuICAgICAgcmVzb2x2ZShkKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGZXRjaFRvZG9zO1xyXG4iXX0=
//# sourceMappingURL=Api.js.map
