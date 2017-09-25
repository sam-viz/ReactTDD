import {expect} from "../test_helper";

import { addComment } from "../../src/actions";
import {ADD_COMMENT} from "../../src/actions/types";


describe("Add Comment Action creator ", () => {

    const commentBody = "Test body comment";
    const expectedReturn = {
        TYPE : ADD_COMMENT,
        payload: {
            comment: {
                body : commentBody
            }
        }
    };

    let actualResult;
    
    beforeEach(() => {
        actualResult= addComment(commentBody);
    });
    
    it("should send the correct payload format", () => {
        expect(actualResult.TYPE).to.eql(expectedReturn.TYPE);
    });
    
    it("should send the correct action type", () => {
        expect(actualResult.payload).to.eql(expectedReturn.payload);    
    });


});

