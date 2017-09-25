import React, { Component } from "react";
import CommentBox from "../containers/comment-box";
import CommentList from "../containers/comment-list";

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <CommentBox />
                <CommentList />
            </div>
        );
    }
}
