import {renderComponent, expect} from "../test_helper";
import CommentBox from "../../src/containers/comment-box";


describe("Comment box Component", () => {
    let commentBox;

    beforeEach(() => {
        commentBox = renderComponent(CommentBox);
    });

    it("should contain the class name comment-box", () => {
        expect(commentBox).to.have.class("comment-box");

    });

    it("should contain a text area", () => {
        expect(commentBox.find("textarea")).to.exist;
    });

    it("should contain a button", () => {
        expect(commentBox.find("button")).to.exist;
    });


    describe("Comment Text Area Behavior", () => {
        let inputValue;
        
        beforeEach(() => {
            inputValue="Hey ! I liked your article :)";
        });
        
        it("The textarea should contain the input value" , () => {
            commentBox.find("textarea").simulate("change", inputValue);
            expect(commentBox.find("textarea")).to.have.value(inputValue);
        });
        
    });
        
    describe("Component Behavior", () => {
        let inputValue;
       
        beforeEach(() => {
            inputValue="I very much have liked your post ! Thank you ";
            commentBox.find("textarea").simulate("focus");
            commentBox.find("textarea").simulate("change", inputValue);
        });

        it("should clear the textarea when the text is submitted", () => {
            commentBox.find("form").simulate("submit");
            expect(commentBox.find("textarea")).to.have.value("");
        });
    });
    
});