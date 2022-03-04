import React from "react";
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';

import Axios from 'axios';

function LoggingIn(){
  let navigate = useNavigate();
    
    const[username, setusername] =useState("");
    const[password, setpassword] =useState("");

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
            <button type = "button" onClick ={() => { navigate("/results")}}>Log in</button>
            
        </div>
    );
}
export default LoggingIn;