import React, { Component } from 'react';
import { connect } from 'react-redux';

// eslint-disable-next-line import/no-anonymous-default-export
export default (ChildComponent) => {
	class ComposedComponent extends Component {
		componentDidMount() {
			this.shouldNavigateAway();
		}

		componentDidUpdate() {
			this.shouldNavigateAway();
		}

		shouldNavigateAway() {
			if (!this.props.auth) {
				console.log('should navigate away');
			}
		}

		render() {
			return <ChildComponent {...this.props} />;
		}
	}

	function mapStateToProps(state) {
		return {
			auth: state.auth
		};
	}

	return connect(mapStateToProps)(ComposedComponent);
};
