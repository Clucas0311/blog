import jsonPlaceholder from '../apis/jsonPlaceholder';
// ACTION CREATOR

// Thunks for fetchPosts
export const fetchPosts = () => async (dispatch) => {
	const { data } = await jsonPlaceholder.get('/posts');
	dispatch({ type: 'FETCH_POSTS', payload: data });
};

// Thunks for FetchUser
export const fetchUser = (id) => {
	return async (dispatch) => {
		try {
			const { data } = await jsonPlaceholder.get(`/users/${id}`);
			dispatch({ type: 'FETCH_USER', payload: data });
		} catch (error) {
			console.log('Error with the fetch user!');
		}
	};
};
