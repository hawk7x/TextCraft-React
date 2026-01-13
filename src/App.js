import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
// import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';

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

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Enabled dark mode", "success");
      document.title = 'TextUtils - Dark Mode';
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
      document.title = 'TextUtils - Light Mode';
    }
  }

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>

      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
 