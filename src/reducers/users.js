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
                username : action.username
            }
        return new_state;
        case "users.modalDeleteHide":
             new_state =JSON.parse(JSON.stringify(state));
             new_state.modal.list_delete = {
                show : false,
                id : 0,
                username : '',
            }
        return new_state;
        case "users.delete" :
             new_state =JSON.parse(JSON.stringify(state));
             for(const index in new_state.list){
                 if(new_state.list[index] === action.id){
                     new_state.list.splice(index,1);
                     break;
                 }
             }
        return new_state;     
        default : 
            // no action passes so default state returned 
        return state;
    }

}