// Always good to have an initial state that contains as many of the keys as possible.
const initialState = {
    title: '',
    poster: '',
    rating: null,
    movies: []
};

// Declare action constant (also called action type)
const SET_MOVIE_INFO = 'SET MOVIE INFO';

//Action builders exported from reducer - similar to this.setState
// EVERY ACTION BUILDER NEEDS TO RETURN AN OBJECT WITH 2 PROPERTIES - TYPE & PAYLOAD
export const setMovieInfo = (title, poster, rating) => {
    return (
        {
            type: SET_MOVIE_INFO,
            payload: {title, poster, rating}
        }
    )
};

// Actual reducer - should always be called the same thing as the file name
// state = initialState means if state is undefined, pass in initialState and set it equal to state
const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MOVIE_INFO:
            return {...state, ...action.payload}
        default:
            return state;
    }
};

export default moviesReducer;





