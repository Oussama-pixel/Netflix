export const getMoviesStart = ()=>({
    type:"GET_MOVIES_START"
})
export const getMoviesSuccess = (movies)=>({
    type:"GET_MOVIES_SUCCESS",
    payload:movies,
})
export const getMoviesFaillure = ()=>({
    type:"GET_MOVIES_FAILLURE"
})

export const deleteMovieStart = ()=>({
    type:"DELETE_MOVIE_START"
})
export const deleteMovieSuccess = (id)=>({
    type:"DELETE_MOVIE_SUCCESS",
    payload:id,
})
export const deleteMovieFaillure = ()=>({
    type:"DELETE_MOVIE_FAILLURE"
})

export const createMovieStart = ()=>({
    type:"CREATE_MOVIE_START"
})
export const createMovieSuccess = (movie)=>({
    type:"CREATE_MOVIE_SUCCESS",
    payload:movie,
})
export const createMovieFaillure = ()=>({
    type:"CREATE_MOVIE_FAILLURE"
})

export const updateMovieStart = ()=>({
    type:"UPDATE_MOVIE_START"
})
export const updateMoviesSuccess = (movie)=>({
    type:"UPDATE_MOVIE_SUCCESS",
    payload:movie,
})
export const updateMoviesFaillure = ()=>({
    type:"UPDATE_MOVIE_FAILLURE"
})
