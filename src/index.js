import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";

// to inculde sass file
import "./stylesheets/main.scss"
import App from "./components/App";
import { reducers } from "./reducers/index";

//initial state
let  users = [];
for(let i=1;i<=10;i++){
    users.push({
        id : i,
        userName : "john" + i,
        job :"Employee" + i,
    })
}

let intial_state= {
    users : {
      list :  users
    }
}


//craete store
const store = createStore(reducers,intial_state);

//render the main component
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,document.getElementById('app'));