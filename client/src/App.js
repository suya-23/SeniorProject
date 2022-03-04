import './App.css';
import {useState} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoggingIn from "./login";
import Survey from './survey';
import Register from "./registration";
import Feedback from "./feedback";
import Axios from 'axios';

function App(){
  return (
      <Routes>
        <Route path="/" element={<App />}></Route>
          <Route path="/login" element={<LoggingIn />} ></Route>
            <Route path="/registration" element={<Register />} ></Route>
              <Route path="/feedback" element={<Feedback />} ></Route>
              <Route path="/Survey" element={<Survey />} ></Route>

      </Routes>
  );
}

const AppWrapper = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default AppWrapper;

