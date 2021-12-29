import { createSelector } from "reselect";
//lưu vào một file chung như thế này sẽ giúp ta dễ quản lý hơn khi app ngày càng lớn hơn.
//sau khi nhận được dữ liệu ngừi dùng nhập từ ô search thì ta lọc ra những thằng nào trùng trong todoList thì lọc nó ra.
// export const todoListSelector = (state) => {
//     const todosRemaining = state.todoList.filter((todo) => {
//         return todo.name.includes(state.filters.search)
//     })
//     return todosRemaining
// };

export const todoListSelector = (state) => {
  return state.todoList;
};

export const searchTextSelector = (state) => {
  return state.filters.search;
};

export const filterStatusSelector = (state) => state.filters.status;

export const filterPriortiesSelector = (state) => state.filters.priorities;
// export const searchTextSelector = (state) => state.filters.search;
//trong dự án thực tế thì sẽ có rất nhiều selector nên ta phải sử dụng lib RESELECT để quản lý các selector
//nếu ta có một selector phụ thuộc vào một selector khác thì ta truyền nó vào làm tham số của createSelector
export const todoRemainingSelector = createSelector(
  todoListSelector,
  filterStatusSelector,
  searchTextSelector,
  filterPriortiesSelector,
  (todoList, status, searchText, priorities) => {
    //status: "All" "Completed" "Todo"
    return todoList.filter((todo) => {
      if (status === "All") {
        //nếu priorities rỗng thì nó lọt vào điều kiện phía sau(searchText thôi)
        return priorities.length
          ? todo.name.includes(searchText) && priorities.includes(todo.priority)
          : todo.name.includes(searchText);
      }
      return (
        todo.name.includes(searchText) &&
        (status === "Completed" ? todo.completed : !todo.completed) &&
        (priorities.length ? priorities.includes(todo.priority) : true)
      );
    });
  }
);
