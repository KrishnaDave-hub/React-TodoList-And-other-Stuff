import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route,
  Switch as Switch,
  Link
} from "react-router-dom";
import TodoList from "./TodoList";
import Navigation from "./Navigation";
import ContactUs from './ContactUs';
import Chart from './LineChart';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>To Do List</h1>
          </div>
          <div className="row">
            <TodoList />
          </div>
        </div>
      </div>
      <Chart/>
      <ContactUs/>
      {/* <Router>
        <Routes>
          <Route exact path="/" element={<TodoList />} /> 
          <Route exact path="/contactUs" element={<ContactUs />} />
          <Route exact path="/charts" element={<Chart />} />
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
