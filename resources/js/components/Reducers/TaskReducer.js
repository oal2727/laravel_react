export const TaskReducer = (state,action)=>{
    switch(action.type){
        case "ADD_TASK":
            return [
                ...state,{id:action.id,name:action.name,description:action.description}
            ]
        case "EDIT_TASK":
            break;
        case "REMOVE_TASK":
            break;
        case "UPDATE_TASK":
            break;
        default:
            return state
            
    }
}