import {ADD_COMMENT} from "./types";


function addComment (comment) {
    return {
        TYPE: ADD_COMMENT,
        payload : {
            comment: {
                body : comment 
            }
        }
    };

}

export {addComment};