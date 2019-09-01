export default function add (state=[], action) {
    if (action.type === 'ADD'){
        return [
            ...state, action.payload
        ]
    }
    return state;
}