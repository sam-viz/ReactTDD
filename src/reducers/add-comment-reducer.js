import {ADD_COMMENT} from "../actions/types";


export default function addComment (state = [] , action) {
    
    if(action == undefined || action == null) {
        return state; 
    }
    switch(action.TYPE) {
        case ADD_COMMENT : 
            return [action.payload.comment, ...state];

    }

    return state;
}