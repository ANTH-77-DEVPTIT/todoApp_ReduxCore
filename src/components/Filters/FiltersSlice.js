const initialState = {
  search: "",
  status: "All",
  priorities: [],
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "filters/searhTextChange":
      return {
        ...state,
        search: action.payload,
      };
    case "filter/statusFilterChange":
      return {
        ...state,
        status: action.payload,
      };
    case "filter/prioritiesFilterChange":
      return {
        ...state,
        priorities: action.payload,
      }
    default:
      return state;
  }
};

export default filtersReducer;
