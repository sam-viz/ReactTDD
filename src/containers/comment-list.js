import React, {Component} from "react";
import {connect} from "react-redux";

class CommentList extends Component {
    render () {
    
    
        let renderComments= this.props.comments.map ((comment,index) => {
            return (
                <li key={index} className="collection-item avatar">
                    <span className="title">{comment.body}</span>
                </li>
            );
        });
    

        return this.props.comments.length>0 && (        
            <ul className="collection comment-list">
                {renderComments}
            </ul>
        );
    }
    
}

function mapStateToProps(state) {
    return {
        comments: state.comments
    };
}

export default connect(mapStateToProps)(CommentList);