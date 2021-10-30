export const getListsStart = ()=>({
    type:"GET_LISTS_START"
})
export const getListsSuccess = (lists)=>({
    type:"GET_LISTS_SUCCESS",
    payload:lists,
})
export const getListsFaillure = ()=>({
    type:"GET_LISTS_FAILLURE"
})

export const deleteListStart = ()=>({
    type:"DELETE_LIST_START"
})
export const deleteListSuccess = (id)=>({
    type:"DELETE_LIST_SUCCESS",
    payload:id,
})
export const deleteListFaillure = ()=>({
    type:"DELETE_LIST_FAILLURE"
}) 

export const createListStart = ()=>({
    type:"CREATE_LIST_START"
})
export const createListSuccess = (list)=>({
    type:"CREATE_LIST_SUCCESS",
    payload:list,
})
export const createListFaillure = ()=>({
    type:"CREATE_LIST_FAILLURE"
})

export const updatListStart = ()=>({
    type:"UPDATE_LIST_START"
})
export const updateListSuccess = (list)=>({
    type:"UPDATE_LIST_SUCCESS",
    payload:list,
})
export const updateListFaillure = ()=>({
    type:"UPDATE_LIST_FAILLURE"
})
