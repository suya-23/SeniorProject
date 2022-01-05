import './App.css';
import {useState} from 'react';
import Axios from 'axios';

function App() {
  const[school, setSchool] =useState("");
  const[major, setMajor] =useState("");
  const[interest, setInterest] =useState("");

  const[math, mathLevel] =useState("");
  const[science, scienceLevel] =useState("");
  const[english, englishLevel] =useState("");
  const[art, artLevel] =useState("");
  const[history, historyLevel] =useState("");


  const [employeeList, setEmployeeList] = useState([]);

  const addSurvey = () => {
    Axios.post("http://localhost:3001/create", {
      school: school,
      major: major,
      interest: interest,
      math: math,
      science: science,
      english: english,
      art: art,
      history: history

    }).then(() => {
      console.log("Succsess")
    });
  };

  const getEmployees = () => {
    Axios.get("http://localhost:3001/employees").then((response) => {
      setEmployeeList(response.data);

    });
  };

  return (
    <div className="App">
      <div className="info">
        <h3>School</h3>
        <input 
          type="text"
          onChange={(event) =>{
            setSchool(event.target.value);
          }}
          />
        <h3>Major</h3>
        <input 
          type="text"
          onChange={(event) =>{
            setMajor(event.target.value);
          }}
          />
        <h3>Interest</h3>
        <input 
          type="text"
          onChange={(event) =>{
            setInterest(event.target.value);
          }}
          />

        <h3>Math Interest Level</h3>
        <input 
          type="number"
          onChange={(event) =>{
            mathLevel(event.target.value);
          }}
          />
        <h3>Science Interest Level</h3>
        <input 
          type="number"
          onChange={(event) =>{
            scienceLevel(event.target.value);
          }}
          />

        <h3>English Interest Level</h3>
        <input 
          type="number"
          onChange={(event) =>{
            englishLevel(event.target.value);
          }}
          />
        <h3>Art Interest Level</h3>
        <input 
          type="number"
          onChange={(event) =>{
            artLevel(event.target.value);
          }}
          />

        <h3>History Interest Level</h3>
        <input 
          type="number"
          onChange={(event) =>{
            historyLevel(event.target.value);
          }}
          />
        
        <button onClick={addSurvey}> Submit Survey</button>
      </div>

      <div className="employees">
        <button onClick={getEmployees}>Get Course Result</button>
        {employeeList.map((val,key) => {
          return(
          <div className="employee">
            <div>
                <h3>Course ID: {val.mathinterest}</h3>
                <h3>Course Name: {val.school}</h3>
                <h3>Course Description: {val.major}</h3>
                <h3>Semester Available: {val.interest}</h3>


              </div>

            </div>
          );
        }
        
        )}

        

        
      </div>

    </div>
  );
}

export default App;
