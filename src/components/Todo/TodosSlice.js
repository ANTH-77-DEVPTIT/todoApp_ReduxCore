const initialState = [
  { id: 1, name: "Learn java", completed: false, priority: "Medium" },
  { id: 2, name: "Learn Redux", completed: true, priority: "High" },
  { id: 3, name: "Learn react native", completed: false, priority: "Low" },
];

const todoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload];

    case "todoList/toggleTodoStatus":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
};

export default todoListReducer;
