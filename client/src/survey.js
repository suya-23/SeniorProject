import {useState} from 'react';
import Axios from 'axios';
import { useHistory, Redirect } from "react-router-dom";

function Survey() {
  const[school, setSchool] =useState("");
  const[major, setMajor] =useState("");

  const[math, mathLevel] =useState("");
  const[science, scienceLevel] =useState("");
  const[english, englishLevel] =useState("");
  const[art, artLevel] =useState("");
  const[history, historyLevel] =useState("");

  const[sports, sportsLevel] =useState("");
  const[vArt, vArtLevel] =useState("");
  const[wArt, wArtLevel] =useState("");
  const[politics, politicsLevel] =useState("");
  const[tech, techLevel] =useState("");
  const[film, filmLevel] =useState("");
  const[nature, natureLevel] =useState("");
  const[reading, readingLevel] =useState("");
  
  const[comp, compLevel] =useState("");
  const[group, groupLevel] =useState("");
  const[independent, independentLevel] =useState("");
  const[creative, creativeBinary] =useState("");
  const[critical, criticalBinary] =useState("");
  const[visual, visualBinary] =useState("");
  const[kinesthetic , kinestheticBinary] =useState("");
  const[auditory , auditoryBinary] =useState("");


  const [employeeList, setEmployeeList] = useState([]);

  const addSurvey = () => {
    Axios.post("http://localhost:3001/create", {
      school: school,
      major: major,
      math: math,
      science: science,
      english: english,
      art: art,
      history: history,
      sports: sports,
      vArt: vArt,
      wArt: wArt,
      politics: politics,
      tech: tech,
      film: film,
      nature: nature,
      reading: reading,
      comp: comp,
      group: group,
      independent: independent,
      creative: creative,
      critical: critical,
      visual: visual,
      kinesthetic: kinesthetic,
      auditory: auditory

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

        <h3>Sports</h3>
        <input 
          type="number"
          onChange={(event) =>{
            sportsLevel(event.target.value);

          }}
          />


        <h3>Visual art</h3>
        <input 
          type="number"
          onChange={(event) =>{
            vArtLevel(event.target.value);

          }}
          />


        <h3>Written art</h3>
        <input 
          type="number"
          onChange={(event) =>{
            wArtLevel(event.target.value);

          }}
          />


        <h3>Politics</h3>
        <input 
          type="number"
          onChange={(event) =>{
            politicsLevel(event.target.value);

          }}
          />


        <h3>Technology </h3>
        <input 
          type="number"
          onChange={(event) =>{
            techLevel(event.target.value);

          }}
          />


        <h3>Film</h3>
        <input 
          type="number"
          onChange={(event) =>{
            filmLevel(event.target.value);

          }}
          />


        <h3>Nature</h3>
        <input 
          type="number"
          onChange={(event) =>{
            natureLevel(event.target.value);

          }}
          />


        <h3>Reading</h3>
        <input 
          type="number"
          onChange={(event) =>{
            readingLevel(event.target.value);

          }}
          />

        <h3>On a scale of 1-5 how competitive are you?</h3>
        <input 
          type="number"
          onChange={(event) =>{
            compLevel(event.target.value);

          }}
          />

        <h3>On a scale of 1-5 how much do you like group activities</h3>
        <input 
          type="number"
          onChange={(event) =>{
            groupLevel(event.target.value);

          }}
          />

        <h3>On a scale of 1-5 how much do you like independent work</h3>
        <input 
          type="number"
          onChange={(event) =>{
            independentLevel(event.target.value);

          }}
          />

        <h3>How creative are you</h3>
        <input 
          type="number"
          onChange={(event) =>{
            creativeBinary(event.target.value);

          }}
          />

        <h3>Do you consider yourself to be a critical thinker</h3>
        <input 
          type="number"
          onChange={(event) =>{
            criticalBinary(event.target.value);

          }}
          />

        <h3>Are u a visual learner</h3>
        <input 
          type="number"
          onChange={(event) =>{
            visualBinary(event.target.value);

          }}
          />

        <h3>Are you a kinesthetic learner</h3>
        <input 
          type="number"
          onChange={(event) =>{
            kinestheticBinary(event.target.value);

          }}
          />

        <h3>Are you a auditory learner</h3>
        <input 
          type="number"
          onChange={(event) =>{
            auditoryBinary(event.target.value);

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

export default Survey;
