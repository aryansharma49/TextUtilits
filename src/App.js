import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import Alert from './components/Alert'
// import About from './components/About'
import React, { useState } from 'react'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {

  const [mode, setmode] = useState("light");// whether dark mode is enabled or not\
  const [alert, setalert] = useState(null);

  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#042743'
      showalert1("Dark Mode Has Been Enabled", "success")
    } else {
      setmode('light');
      document.body.style.backgroundColor = 'white'
      showalert1("Light Mode Has Been Enabled", "success")
    }
  };

  const showalert1 = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }

  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" abouttext="About" mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path="/About" element={<About />}></Route> */}
            {/* <Route exact path="/" element={<TextForm heading="Enter the text to analiyze below" mode={mode} showalert={showalert1} />} ></Route> */}
            <TextForm heading="Enter the text to analiyze below" mode={mode} showalert={showalert1} />
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
};

export default App;
