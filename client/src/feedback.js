import React from "react";
import ReactDOM from 'react-dom';
import { useHistory } from "react-router-dom";
import Axios from 'axios';

function feedback(){
    let hist = useHistory();


    const[rating, rating] =useState("");
    const[Comments, Comments] =useState("");

const addFeedback = () => {
        Axios.post("http://localhost:3001/create", {
          rating: rating,
          Comments: Comments
    
    }).then(() => {
            console.log("Success")
          });
        };


    return (
    
    <div>
        <h>Rate your experience:</h>
        <p>We would love to hear about your experience! Your feedback will allow us to improve our service!</p>
        <p1>On a scale of 1-5 tell us about how helpful were your results:</p1>
        <input type="radio" value="1" name="star" /> 1
        <input type="radio" value="2" name="star" /> 2
        <input type="radio" value="3" name="star" /> 3
        <input type="radio" value="4" name="star" /> 4
        <input type="radio" value="5" name="star" /> 5

        <input type= "textarea" name = "Comments" />
        <button type="submit" onClick ={() => { hist.push("/")}}>Submit</button>
    </div>
    
    );
}
export default feedback;