import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from 'actions';

class commentBox extends React.Component {
	state = { comment: '' };
	handleChange = (event) => {
		this.setState({ comment: event.target.value });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.saveComment(this.state.comment);
		this.setState({ comment: '' });
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<h4>Add a comment</h4>
					<textarea value={this.state.comment} onChange={this.handleChange} />
					<div>
						<button>Submit comment</button>
					</div>
				</form>
				<button className='fetch-comments' onClick={this.props.fetchComments}>
					Fetch Comments
				</button>
				<Link to='/'>Comments</Link>
			</div>
		);
	}
}

export default connect(null, actions)(commentBox);
