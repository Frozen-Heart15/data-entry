import React from 'react';
import './App.css';
import { Header } from 'common/header';
import { Sidebar } from 'common/sidebar'
import { Login } from 'pages/login';
import { Dashboard } from 'pages/dashboard';
import { FirmEntry } from 'pages/firmEntry';
import { NoteEntry } from 'pages/noteEntry';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [
    state,
    setState,
  ] = React.useState({
    showMenu: true,
  });

  const toggleMenu = () => {
    setState(prevState => ({
      ...prevState,
      showMenu: !prevState.showMenu,
    }));
  }

  return (
  
  <Router>
    <Header  toggleMenu={toggleMenu}/>
    <Sidebar showMenu={state.showMenu} >
    <Routes>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/" element={<Dashboard/>} />
      <Route exact path="/firm-entry" element={<FirmEntry/>} />
      <Route exact path="/note-entry" element={<NoteEntry/>} />
    </Routes>
    </Sidebar>
  </Router>

  );
}

export default App;
