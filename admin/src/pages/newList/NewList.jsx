import { useContext, useState } from 'react'
import './newList.scss'
import storage from '../../firebase';
import { createMovies, getMovies } from '../../context/movieContext/apiCalls';
import { ListsContext } from '../../context/listContext/ListsContext';
import { MovieContext } from '../../context/movieContext/MovieContext';
import { useEffect } from 'react';
import { createList } from '../../context/listContext/apiCalls';
import { useHistory } from 'react-router';

export default function NewList() {
    const [list, setList] = useState(null)
    const {dispatch} = useContext(ListsContext)
    const {movies,dispatch: dispatchMovie} = useContext(MovieContext)
    const history = useHistory()
    useEffect(()=>{
        getMovies(dispatchMovie)
    },[dispatchMovie])
    const handleChange = (e)=>{
        const value = e.target.value;
        setList({...list,[e.target.name]:value})
    }
    const handleSelect = (e)=>{
        let value = Array.from(e.target.selectedOptions,(option)=>option.value)
        setList({...list,[e.target.name]:value})
    }

    const handleSubmit = e=>{
        e.preventDefault();
        createList(list,dispatch)
        history.push("/list")
    }
    return (
        <div className="newProduct">
            <h1 className="addProductTitle">New List</h1>
            <form className="addProductForm">
                <div className="formLeft">
                    <div className="addProductItem">
                        <label>Title</label>
                        <input type="text" placeholder="Popular Movies" name="title" onChange={handleChange}/>
                    </div>
                    <div className="addProductItem">
                        <label>Genre</label>
                        <input type="text" placeholder="genre" name="genre" onChange={handleChange} />
                    </div>
                    <div className="addProductItem">
                        <label>Genre</label>
                        <input type="text" placeholder="action" name="genre" onChange={handleChange} />
                    </div>
                    <div className="addProductItem">
                        <label>Type</label>
                        <select name="type" id="type" onChange={handleChange}>
                            <option>Type</option>
                            <option value="movie">Movie</option>
                            <option value="series">Series</option>
                        </select>
                    </div>
                    <div className="addProductItem">
                        <label>Type</label>
                        <select name="type" id="type" onChange={handleChange}>
                            <option value="movie">Movie</option>
                            <option value="series">Series</option>
                        </select>
                    </div>
                </div>
                <div className="formRight">
                    <div className="addProductItem">
                        <label>Content</label>
                        <select name="content" id="content" onChange={handleSelect} style={{height:"280px"}}>
                            {movies.map(movie=>(
                                <option key={movie._id} value={movie._id}>{movie.title}</option>
                                ))}
                        </select>
                    </div>
                    <button className="addProductButton" onClick={e=>handleSubmit(e)}>Create</button>
                </div>
            </form>
        </div>
    )
}
