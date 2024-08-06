var initialState = { count: 0 }

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'increment': return {
            count: state.count + 1
        }
        default:
            return state;
    }
}
export default reducer;