import React from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from 'actions';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

class App extends React.Component {
	renderButton() {
		if (this.props.auth) {
			return (
				<button onClick={() => this.props.changeAuth(false)}>Sign Out</button>
			);
		}
		return <button onClick={() => this.props.changeAuth(true)}>Sign In</button>;
	}
	renderHeader() {
		return (
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/post'>Post a Comment</Link>
				</li>
				<li>{this.renderButton()}</li>
			</ul>
		);
	}
	render() {
		return (
			<div className='App'>
				{this.renderHeader()}
				<Routes>
					<Route path='/' element={<CommentList />} />
					<Route path='/post' element={<CommentBox />}></Route>
				</Routes>
				<Outlet />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { auth: state.auth };
}

export default connect(mapStateToProps, actions)(App);
