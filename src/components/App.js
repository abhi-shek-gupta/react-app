import React from "react";
import ReactDOM from "react-dom";


import UserList from "./UserList";


//app component
export default class App extends React.Component{
    render(){
       
        return (
            <div className="container">
                <UserList  />
            </div>
            
        )
        
    }
}

