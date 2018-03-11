export default (state = [], action) => {
	switch (action.type) {
		case 'ADD_PLACE':
			return state.concat(action.payload);
		default:
			return state;
	}
}