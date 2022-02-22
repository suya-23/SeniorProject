import React from "react";
import ReactDOM from 'react-dom';
import { useHistory } from "react-router-dom";
import Axios from 'axios';

function register(){
    let hist = useHistory();
    
        const[firstname, firstname] =useState("");
        const[lastname, lastname] =useState("");

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
            
            <button type = "button" onClick ={() => { hist.push("/survey")}}>Log in</button>
            
        </div>
    );
}
export default register;