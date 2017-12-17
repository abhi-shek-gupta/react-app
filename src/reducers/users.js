export default function users(state ={},action){
    let new_state;
    switch(action.type){
        case "users.modalDeleteShow":
           /* intial state must not be changed and it must be mutable
            so make sure new_state must be clone of state not refrence 
            for this we use */
            new_state =JSON.parse(JSON.stringify(state));
            /* to prevent undefined error */
            new_state.modal = new_state.modal?new_state.modal:{};
            new_state.modal.list_delete = {
                show : true,
                id : action.id,
                userName : action.userName
            }
        return new_state;
        default : 
            // no action passes so default state returned 
        return state;
    }

}