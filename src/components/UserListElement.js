import React from "react";
import { Button , Glyphicon } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from 'prop-types';

class UserListElement extends React.Component{
    constructor(props){
        super(props);

        // bind <this> with event methods
        this.modalDeleteShow = this.modalDeleteShow.bind(this);
    }
    render(){
        const user = this.props.user;
        return (
            <tr>
            <td>#{user.id}</td>
            <td>{user.userName}</td>
            <td>{user.job}</td>
            <td>
                <a href={'/edit-user/' + user.id}>
                    <Button bsSize="xsmall">
                        Edit <Glyphicon glyph="edit"/>
                    </Button>
                </a>
            </td>
            <td>
                <Button data-id={user.id} data-username={user.userName} onClick={this.modalDeleteShow}>
                    Delete<Glyphicon glyph="remove-circle"/>
                </Button>
            </td>
         </tr>
        )
    }
   
    modalDeleteShow(event){
        console.log("dataset",event.target.dataset);
        const user_id = Number(event.target.dataset.id);
        const username = event.target.dataset.username;
        this.props.dispatch({
             type :"users.modalDeleteShow",
             id : user_id,
             username : username
        })
    }
}

// make sure we have all props
UserListElement.PropTypes = { 
    user : PropTypes.object.isRequired
}

//export the connected class 
export default connect()(UserListElement);