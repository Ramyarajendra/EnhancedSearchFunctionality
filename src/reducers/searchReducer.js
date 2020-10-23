import { 
    DELETE_ITEM,
    GET_SEARCH_ARRAY 
} from '../actions/types';

const initialState ={
    loading: false,
    searchArr : [],
    deleted: []
}

export default (state = initialState , action)=>{
    switch (action.type) {
        case GET_SEARCH_ARRAY:
            return {
                ...state,
                loading: false,
                searchArr: action.payload
            }
    
        case DELETE_ITEM:
            return {
                ...state,
                loading: false,
                deleted: [...state.deleted, action.payload]
            }
        default:
            return state
    }
}
