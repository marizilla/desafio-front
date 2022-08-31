import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ListVagas from './components/vagas/list/ListVagas';
import VerVaga from './components/vagas/check/VerVaga';
import AddVaga from './components/vagas/add/AddVaga';
import EditVaga from './components/vagas/edit/EditVaga';

const App = () => {
  return (
    <React.Fragment>
      <NavBar/>
      <Routes>
        <Route path={'/'} element={<Navigate to={'/vagas/list'}/>}/>
        <Route path={'/vagas/list'} element={<ListVagas/>}/>
        <Route path={'/vagas/add'} element={<AddVaga/>}/>
        <Route path={'/vagas/check/:vagaId'} element={<VerVaga/>}/>
        <Route path={'/vagas/edit/:vagaId'} element={<EditVaga/>}/>
      </Routes>
    </React.Fragment>
  );
}

export default App;
