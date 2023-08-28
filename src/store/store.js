import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import authReducer from "../store/reducers/authReducer";
import alertReducer from "../store/reducers/alertReducer";
import friendsReducer from "../store/reducers/friendsReducer";
import chatReducer from "../store/reducers/chatReducer";
import roomReducer from "../store/reducers/roomReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  alert: alertReducer,
  friends: friendsReducer,
  chat: chatReducer,
  room: roomReducer,
});

const store = legacy_createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export { store };
