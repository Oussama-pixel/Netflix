const MovieReducer = (state,action)=>{
    switch(action.type){
        case "GET_MOVIES_START":
            return {
                movies:[],
                isFetching:true,
                error:false
            }
        case "GET_MOVIES_SUCCESS":
            return {
                movies:action.payload,
                isFetching:false,
                error:false
            }
        case "GET_MOVIES_FAILLURE":
            return {
                movies:[],
                isFetching:false,
                error:true
            }
        case "DELETE_MOVIES_START":
            return {
                ...state,
                isFetching:true,
                error:false
            }
        case "DELETE_MOVIES_SUCCESS":
            return {
                movies:action.movies.filter(movie=>movie.id!==action.payload),
                isFetching:false,
                error:false
            }
        case "DELETE_MOVIES_FAILLURE":
            return {
                ...state,
                isFetching:false,
                error:true
            }

        case "CREATE_MOVIE_START":
            return {
                ...state,
                isFetching:true,
                error:false
            }
        case "CREATE_MOVIE_SUCCESS":
            return {
                movie:[...state.movies,action.payload],
                isFetching:false,
                error:false
            }
        case "CREATE_MOVIE_FAILLURE":
            return {
                ...state,
                isFetching:false,
                error:true
            }

        case "UPDATE_MOVIE_START":
            return {
                ...state,
                isFetching:true,
                error:false
            }
        case "UPDATE_MOVIE_SUCCESS":
            return {
                movie:state.movies.map(movie=> movie._id === action.payload._id && action.payload),
                isFetching:false,
                error:false
            }
        case "UPDATE_MOVIE_FAILLURE":
            return {
                ...state,
                isFetching:false,
                error:true
            }
        default:
            return { ...state }
    }
}
export default MovieReducer;