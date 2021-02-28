export default (state = [], action) => {
	// if the action.type
	switch (action.type) {
		// if equal to 'FETCH_POSTS'
		case 'FETCH_POSTS':
			// return the action.payload
			return action.payload;
		// if the case doesn't match return the original state
		default:
			return state;
	}
};
