import initState  from './initialstate'

function FetchTodos(page = 1, pageSize = initState.state.pageSize) {
  const url = `http://nodeApi.foxteam.in/todos?_page=${page}&_pageSize=${pageSize}`;
  return new Promise((resolve, reject) => {
  setTimeout(() => {
    $.get(url).then((d) => {
      resolve(d);
    });
  }, 250);
  });
}

export default FetchTodos;
