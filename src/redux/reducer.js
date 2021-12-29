import filtersReducer from "../components/Filters/FiltersSlice";
import todoListReducer from "../components/Todo/TodosSlice";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  filters: filtersReducer,
  todoList: todoListReducer,
});
//sau khi combineReducers chạy xong thì nó sẽ trả về cho chúng ta như thế này.
// const rootReducer = (state = {}, action) => {
//   return {
//     filters: filtersReducer(state.filters, action),
//     todoList: todoListReducer(state.todoList, action),
//   };
// };
export default rootReducer;
