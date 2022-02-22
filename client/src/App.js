import './App.css';
import {useState} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import loggingIn from "./login";
import Survey from './survey';
import register from ".registration";
import feedback from "./feedback";
import Axios from 'axios';

function App(){
  return (
<BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/login" element={<loggingIn />} />
            <Route path="/registration" element={<register />} />
              <Route path="/feedback" element={<feedback />} />
                <Route path="/survey" element={<Survey />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
