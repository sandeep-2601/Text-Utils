import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1300);
  }

  let handleToggleModeClick = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} onClick={() => handleToggleModeClick()} />
        <Alert alert={alert}></Alert>
        <div className="container">
          <Routes>
            <Route path="/donation" element={<About mode={mode} />}/>
            <Route path="/about" element={<About mode={mode} />}/>
            <Route exact path="/" element={<TextForm color={mode === 'light' ? 'white' : 'black'} onClick={() => handleToggleModeClick()} onShowAlert={(message, type) => showAlert(message, type)} />
            } />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
