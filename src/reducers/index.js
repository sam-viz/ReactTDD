import { combineReducers } from "redux";
import addCommentReducer from "./add-comment-reducer";

const rootReducer = combineReducers({
    comments: addCommentReducer
});

export default rootReducer;
