import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';
import React from "react";
import {
  BrowserRouter as Router,
  Routes, // поначалу был Switch
  Route,
  // Link
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light'); // this is default version
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  // const removeBodyClasses = ()=>{
  //   document.body.classList.remove('bg-primary')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-dark')
  // }

  const toggleMode = ()=>{     // 'cls' - жақша ішіндегі value
    // removeBodyClasses(); 
    // console.log(cls);
    // document.body.classList.add('bg-' + cls);  // меняется свет 

    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Enabled dark mode", "success");
      // document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing Mode';  // меняется title 
      // }, 2000); 
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now'; // меняется title
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Enabled light mode", "success");
      // document.title = 'TextUtils - Light Mode';
    }
  }

  return (
    <>
    <Router> 
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About"/>
      <Alert alert={alert}/>

      {/* /users      --> Component 1
      /users/home --> Component 2 */}

      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element = {<About mode={mode}/>} /> 
          <Route exact path="/" element={<TextForm heading="Try TextUtils - Word Counter Character Counter" mode={mode} showAlert={showAlert}/>}/>   {/* title is for pro,oting the site in Google */} 
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;


