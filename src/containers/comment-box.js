import React, {Component} from "react";

export default class CommentBox extends Component {
    constructor(props) {
        super(props);
        this.defaultCommentMessage="We'd love to hear your feedback :)";
        this.state= {
            comment: ""
        };
        this.handleChange= this.handleChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
    }

    handleChange(evt){
        this.setState({
            comment: evt.target.value
        });
    }
    
    handleSubmit(evt) {
        evt.preventDefault();


        this.setState({
            comment: ""
        }); 
    }
    
    render () {
        return (
            <div className="row comment-box">
                <form onSubmit={this.handleSubmit} className= "col s12 m8 l8 offset-m2 offset-l2">
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="textarea1" placeholder={this.defaultCommentMessage} onChange={this.handleChange} value={this.state.comment} className="materialize-textarea"></textarea>                            
                        </div>
                    </div>
                    <button 
                        className="btn waves-effect waves-light" 
                        type="submit">
                        Submit 
                    </button>
                </form>
            </div>
        );
    }
}