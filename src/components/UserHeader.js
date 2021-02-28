import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends Component {
	// fetch data componentDidMount
	componentDidMount() {
		this.props.fetchUser(this.props.userId);
	}
	render() {
		// When the application is first rendered the array will be empty
		const user = this.props.users.find((user) => user.id === this.props.userId);
		// So if the user is not found
		if (!user) {
			// don't show anything on the screen
			return null;
		}
		//Otherwise
		// return the user
		return <div className="header">{user.name}</div>;
	}
}

const mapStateToProps = (state) => {
	return { users: state.users };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
