import React from "react";
import ReactDOM from 'react-dom';
import { useHistory } from "react-router-dom";
import Axios from 'axios';

function loggingIn(){
    let hist = useHistory();
    
    const[username, username] =useState("");
    const[password, password] =useState("");

    const login = () => {
    Axios.post("http://localhost:3001/create", {

        username: username,
        password: password

    }).then(() => {
        console.log("Success")
      });
    };


    return (
        <div>
            Login: {"\n"}
            Username: <input type = "text" name = "username" onChange={(event) =>{
            username(event.target.value);
          }} />{"\n"}
            Password: <input type = "text" name = "password" onChange={(event) =>{
            password(event.target.value);
          }} />{"\n"}
            <button type = "button" onClick ={() => { hist.push("/results")}}>Log in</button>
            
        </div>
    );
}
export default loggingIn;