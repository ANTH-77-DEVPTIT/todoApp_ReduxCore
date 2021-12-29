import { createStore } from "redux";
import rootReducer from "./reducer";

//cài đặt extension để giúp ta phân biệt được sự khác nhau của state qua các giai đoạn
import { composeWithDevTools } from "redux-devtools-extension";
const composedEnhancers = composeWithDevTools();
// rootReducer: reducer quản lý các thay đổi của state thông qua hành động
// initValue: giá trị khởi tạo của store
// enhancers: là một middleware như redux saga, ...
const store = createStore(rootReducer, composedEnhancers);

export default store;
