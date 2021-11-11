const ADD_BOOK = 'BookStores/books/ADD_BOOK';
const REMOVE_BOOK = 'BookStores/books/REMOVE_BOOK';

const initialState = [];


// ACTION CREATORS 
export const addBook = payload => ({
    type: ADD_BOOK,
    payload
})
export const removeBook = payload => ({
    type: REMOVE_BOOK,
    payload
})

// REDUCER 

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BOOK:
            return[...state, action.payload]
            break;
        case REMOVE_BOOK:
            return state.filter(book => book.id !== id)
        default:
            return state
            break;
    }
};

export default reducer;