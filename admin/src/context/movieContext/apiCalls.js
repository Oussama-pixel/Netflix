import axios from 'axios';
import {
    getMoviesStart,
    getMoviesFaillure,
    getMoviesSuccess,
    deleteMovieStart,
    deleteMovieSuccess,
    deleteMovieFaillure,
    createMovieStart,
    createMovieSuccess,
    createMovieFaillure
} from './MovieActions';
export const getMovies  = async(dispatch)=>{
    dispatch(getMoviesStart())
    try {
        const {data} = await axios.get("/movies",{
            headers:{
                token:"Bearer"+JSON.parse(localStorage.getItem("user").accessToken)
            }
        })
        dispatch(getMoviesSuccess(data))
    } catch (error) {
        dispatch(getMoviesFaillure())
    }
}
//CREATE
export const createMovies  = async(movie,dispatch)=>{
    dispatch(createMovieStart())
    try {
        const {data} = await axios.post("/movies/",movie,{
            headers:{
                token:"Bearer"+JSON.parse(localStorage.getItem("user").accessToken)
            }
        })
        dispatch(createMovieSuccess(data))
    } catch (error) {
        dispatch(createMovieFaillure())
    }
}
export const deleteMovies  = async(id,dispatch)=>{
    dispatch(deleteMovieStart())
    try {
        const {data} = await axios.delete("/movies/"+id,{
            headers:{
                token:"Bearer"+JSON.parse(localStorage.getItem("user").accessToken)
            }
        })
        dispatch(deleteMovieSuccess(id))
    } catch (error) {
        dispatch(deleteMovieFaillure())
    }
}