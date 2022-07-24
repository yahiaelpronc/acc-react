const INITIAL_VALUE = {
    loggedUser:[],
    currentVet:[],
    logged:false
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
        default :
            return state
    }
}