import {renderComponent, expect } from "../test_helper";

import CommentList from "../../src/containers/comment-list";

describe("Comment List Component", () => {

    const props= { 
        comments: [
            {
                author: "Jaques",
                body : "This is a comment from Jaques"
            },
            {
                author: "Clémentine",
                body : "This is a comment from Clémentine"
            },
            {
                author: "Julien",
                body: "This is a comment from Julien"
            }
        ]
    };

    let commentList;

    beforeEach(() => {
        commentList= renderComponent(CommentList,null, props);
    });

    it("should have the correct class name", () => {
        expect(commentList).to.have.class("comment-list");
    });

    it("should render list of given comments", () => {
        expect(commentList.find("li").length).to.eql(props.comments.length);
    });

    it("should render comments content", () => {
        props.comments.every(({body}) => {
            expect(commentList).to.contain(body);
        });
    });

    

});