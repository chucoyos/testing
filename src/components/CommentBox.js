import React from 'react';

class commentBox extends React.Component {
	state = { comment: '' };
	handleChange = (event) => {
		this.setState({ comment: event.target.value });
	};
	handleSubmit = (event) => {
		event.preventDefault();
		// TODO - call an action creator
		// And save the comment
		this.setState({ comment: '' });
	};
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<h4>Add a comment</h4>
				<textarea value={this.state.comment} onChange={this.handleChange} />
				<div>
					<button>Submit comment</button>
				</div>
			</form>
		);
	}
}

export default commentBox;
