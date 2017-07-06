import React, {Component} from 'react';

class CommentBox extends Component {
	
	constructor(props) {
		super(props);
		this.state= {
			comment: ''
		};

		this.handleChange=this.handleChange.bind(this);
		this.handleSubmit=this.handleSubmit.bind(this);
	}

	handleChange(evt) {
		this.setState({
			comment: evt.target.value
		});
	}

	handleSubmit(evt) {
		evt.preventDefault();
		this.setState({
			comment: ''
		});
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit} className="comment-box">
			<textarea onChange={this.handleChange} value={this.state.comment} />
			<button action="submit">Send comment</button>
			</form>
			);
	}
}


export default CommentBox;