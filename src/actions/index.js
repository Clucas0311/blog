import jsonPlaceholder from '../apis/jsonPlaceholder';
// ACTION CREATOR

export const fetchPosts = () => async (dispatch) => {
	const { data } = await jsonPlaceholder.get('/posts');
	dispatch({ type: 'FETCH_POSTS', payload: data });
};
