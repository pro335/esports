import {
    ALL_USER,
    USER_DELETE,
    UPDATE_USER,
    ADD_USER  ,
    USER_ERROR
} from '../constants/ActionTypes';

const initialState = {
    users: [],
};
export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_USER:
            return {...state,users:[...state.users,action.user]}    
        case ALL_USER:
            return { ...state, users: action.users }
        case USER_DELETE:
            return {...state,users: state.users.filter(item => item.id !== action.id)}
        case UPDATE_USER:
            const  newData=[]
            state.users.map((user)=>{                
                if(user._id === action.user._id){
                    user = action.user

                }
                newData.push(user)
                
            })
            return {...state,users:newData}
        case USER_ERROR:
            return { ...state, message: action.message, users: [] }
        default:
            return state
    }
}

