import React from "react";
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import {useState} from 'react';

function Register(){
    let navigate = useNavigate();
    
        const[firstname, setfirstname] =useState("");
        const[lastname, setlastname] =useState("");
        const[username, setusername] =useState("");
        const[password, setpasname] =useState("");

    const addUser = () => {
            Axios.post("http://localhost:3001/create", {
              firstname: firstname,
              lastname: lastname,
              username: username,
              password: password
        
        }).then(() => {
                console.log("Success")
              });
            };
          

    return (
        <div>
            Create your account:{"\n"}
            First Name:<input type = "text" name = "firstname" />{"\n"}
            Last Name:<input type = "text" name = "lastname" />{"\n"}
            Username:<input type = "text" name = "username" />{"\n"}
            Password:<input type = "text" name = "password" />{"\n"}
            
            <button type = "button" onClick ={() => { navigate("/survey")}}>Register</button>
            
        </div>
    );
}
export default Register;