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

    describe("Behavior", () => {
        it("should clear the textarea when the text is submitted", () => {
            
        });
    });
});