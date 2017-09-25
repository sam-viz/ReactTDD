import {ADD_COMMENT} from "./types";


function addComment (comment) {
    return {
        type: ADD_COMMENT,
        payload : {
            comment: {
                body : comment 
            }
        }
    };

}

export {addComment};