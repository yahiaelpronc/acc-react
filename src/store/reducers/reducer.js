const INITIAL_VALUE = {
    loggedUser:[],
    currentVet:[],
    logged:false,
    type:""
}
export default function UserReducer(state=INITIAL_VALUE,action){
    switch(action.type){
        case "CHANGE_USER":
            return{
                ...state,
                loggedUser : action.payload
            };
        case "CHANGE_VET":
            return{
                ...state,
                currentVet : action.payload
            };
        case "CHANGE_LOGGED":
            return{
                ...state,
                logged : action.payload
            };
        case "CHANGE_LOGGED_TYPE":
            return{
                ...state,
                type : action.payload
            };
        default :
            return state
    }
}