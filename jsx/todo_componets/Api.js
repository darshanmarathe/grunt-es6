function FetchTodos(page = 1, pageSize = 5) {
  const url = `http://localhost:3000/todos?_page=${page}&_pageSize=${pageSize}`;
  return new Promise((resolve, reject) => {
  setTimeout(() => {
    $.get(url).then((d) => {
      resolve(d);
    });
  }, 3000);
  });
}

export default FetchTodos;
