export default function deletebook (state=[], action){
    if(action.type==='REMOVE'){
        return state.filter(({ id }) => id !== action.id);


    }

    return state;
}