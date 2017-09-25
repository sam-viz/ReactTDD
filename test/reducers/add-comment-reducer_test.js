import {expect} from "../test_helper";

import {ADD_COMMENT} from "../../src/actions/types";
import commentReducer from "../../src/reducers/add-comment-reducer";

describe("Add Comment Action creator ", () => {

    it("should an empty array when called with wrong arguments" , () => {
        const expectedResult= [];
        var actualResult = commentReducer();
        expect(actualResult).to.eq.expectedResult;
    });

    it("should not update state when called with a useless action", () => {
        const previousState = [
            {
                body: "Yo there"
            },
            {
                body: "whassup"
            }];

        const dummyAction = {
            TYPE: "DUMMY"
        };    
        var returnedState= commentReducer(previousState,dummyAction);

        expect(returnedState).to.eql(previousState);  
    });

    it("should update comments state when called with the right action", () => {
        const previousState = [];
        const action = {
            TYPE: ADD_COMMENT,
            payload: {
                comment: {
                    body : "This is a new state"
                }
            }
        };

        var returnedState = commentReducer(previousState,action);
        expect(returnedState).to.eql([action.payload.comment, ...previousState]);
    });


});

