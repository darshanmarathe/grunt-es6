function FetchTodos(page = 1, pageSize = 2) {
  const url = `http://localhost:3000/todos?_page=${page}&_pageSize=${pageSize}`;
  return new Promise((resolve, reject) => {
    $.get(url).then((d) => {
      resolve(d);
    });
  });
}

export default FetchTodos;
