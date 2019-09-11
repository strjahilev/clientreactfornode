
export default function edit (state=[], action) {
    if (action.type === 'EDIT'){
        return state.map((book) => {
            if (book.id === action.id) {
                return {
                    ...book,
                    ...action.updates

                };

            } else {
                return book;
            }

    })
 }
    return state;
}