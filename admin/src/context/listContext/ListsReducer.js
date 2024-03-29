const ListsReducer = (state,action)=>{
    switch(action.type){
        case "GET_LISTS_START":
            return {
                lists:[],
                isFetching:true,
                error:false
            }
        case "GET_LISTS_SUCCESS":
            return {
                lists:action.payload,
                isFetching:false,
                error:false
            }
        case "GET_LISTS_FAILLURE":
            return {
                lists:[],
                isFetching:false,
                error:true
            }
        case "DELETE_LIST_START":
            return {
                ...state,
                isFetching:true,
                error:false
            }
        case "DELETE_LIST_SUCCESS":
            return {
                lists:action.lists.filter(list=>list._id!==action.payload),
                isFetching:false,
                error:false
            }
        case "DELETE_LIST_FAILLURE":
            return {
                ...state,
                isFetching:false,
                error:true
            }

        case "CREATE_LIST_START":
            return {
                ...state,
                isFetching:true,
                error:false
            }
        case "CREATE_LIST_SUCCESS":
            return {
                lists:[...state.lists,action.payload],
                isFetching:false,
                error:false
            }
        case "CREATE_LIST_FAILLURE":
            return {
                ...state,
                isFetching:false,
                error:true
            }

        case "UPDATE_LIST_START":
            return {
                ...state,
                isFetching:true,
                error:false
            }
        case "UPDATE_LIST_SUCCESS":
            return {
                lists:state.movies.map(list=> list._id === action.payload._id && action.payload),
                isFetching:false,
                error:false
            }
        case "UPDATE_LIST_FAILLURE":
            return {
                ...state,
                isFetching:false,
                error:true
            }
        default:
            return { ...state }
    }
}
export default ListsReducer;