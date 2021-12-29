//actions creater => function
// export const addTodoAction = {
//     type: "",
//     payload: viết như thế này là hardcode nên không thể truyền dữ liệu đi được
// }
//
export const addTodo = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};

export const toggleTodoStatus = (todoId) => {
  return {
    type: "todoList/toggleTodoStatus",
    payload: todoId,
  };
};

export const searchTextChange = (text) => {
  return {
    type: "filters/searhTextChange",
    payload: text,
  };
};

export const statusFilterChange = (status) => {
  return {
    type: "filter/statusFilterChange",
    payload: status,
  };
};

export const priorityFilterChange = (priorities) => {
  return {
    type: "filter/prioritiesFilterChange",
    payload: priorities,
  };
};
