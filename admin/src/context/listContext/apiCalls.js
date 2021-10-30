import axios from 'axios';
import {
    getListsStart,
    getListsSuccess,
    getListsFaillure,
    deleteListStart,
    deleteListSuccess,
    deleteListFaillure,
    createListStart,
    createListSuccess,
    createListFaillure
} from './ListsActions';

export const getLists  = async(dispatch)=>{
    dispatch(getListsStart())
    try {
        const {data} = await axios.get("/lists",{
            headers:{
                token:"Bearer"+JSON.parse(localStorage.getItem("user").accessToken)
            }
        })
        dispatch(getListsSuccess(data))
    } catch (error) {
        dispatch(getListsFaillure())
    }
}
//CREATE

export const createList  = async(list,dispatch)=>{
    dispatch(createListStart())
    try {
        const {data} = await axios.post("/lists",list,{
            headers:{
                token:"Bearer"+JSON.parse(localStorage.getItem("user").accessToken)
            }
        })
        dispatch(createListSuccess(data))
    } catch (error) {
        dispatch(createListFaillure())
    }
}
export const deleteList  = async(id,dispatch)=>{
    dispatch(deleteListStart())
    try {
        const {data} = await axios.delete("/lists/"+id,{
            headers:{
                token:"Bearer"+JSON.parse(localStorage.getItem("user").accessToken)
            }
        })
        dispatch(deleteListSuccess(id))
    } catch (error) {
        dispatch(deleteListFaillure())
    }
}