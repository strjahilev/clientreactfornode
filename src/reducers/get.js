export default function getbook (state=[], action){
        if(action.type==='GET'){
            return action.books


        }
    if(action.type==='REMOVE'){
        return state.filter(({ id }) => id !== action.id);


    }

    return state;
}