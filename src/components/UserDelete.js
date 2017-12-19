import React from "react";
import {Modal ,Button} from "react-bootstrap";
import { connect } from "react-redux";

class UserDelete extends React.Component{
    
     //constructor
    constructor(props){
        super(props);

        //bind <this> with event methods
        this.modalDeleteHide = this.modalDeleteHide.bind(this);
        this.userDelete = this.userDelete.bind(this);
    }
    
    render(){
        return (
            <Modal show={this.props.modal_delete.show}>
                <Modal.Header>
                    <Modal.Title>
                        Are you sure you want to delete &nbsp;
                         <strong>{this.props.modal_delete.username}</strong>?
                    </Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button onClick={this.modalDeleteHide}>No</Button>
                    <Button bsStyle="primary" onClick={this.userDelete}>Yes</Button>
                </Modal.Footer>
            </Modal>
        )
    }
    modalDeleteHide(event){
        console.log("in modalDeleteHide");
        this.props.dispatch({
            type : "users.modalDeleteHide",
        })
    }
    // delete a user 
    userDelete(event){
        //delete user
        this.props.dispatch({
            type : "users.delete",
            id : this.props.modal_delete.id
        })

        //hide the propmt
        this.props.dispatch({
            type : "users.modalDeleteHide",
        })
    }
}

function mapStateToProps(state){
    console.log("up vaga",state.users.modal);
    console.log("vgava",this.props)
    //set the data for user delete modal
    let modal_delete;
    if(state.users.modal && state.users.modal.list_delete){
        modal_delete = state.users.modal.list_delete;
    }
    else {
        modal_delete ={
            show : false,
            id   : 0,
            userName : "" 
        }
    }

    return {
        modal_delete : modal_delete
    }
}
export default connect(mapStateToProps)(UserDelete);