import React, { Component } from "react";
import CommentBox from "../containers/comment-box";

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <CommentBox />
            </div>
        );
    }
}
