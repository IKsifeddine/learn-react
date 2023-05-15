import React from 'react'
import {Link} from"react-router-dom"
import CalculeForm from '../tpform/CalculForm'
import Incrimentation from "../../src/TP_calculatrice/Incrimentation"
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import axios_Test from '../Fetch/axios_Test'


function Menu() {
  return (
    <div>
        <ul>
            <li><Link to="/calcul" >calculatrice</Link></li>
            <li><Link to="/compteur" >compte</Link></li>
            <li><Link to ="/axios_Test">axios</Link></li>
        </ul>
        <Routes>
            <Route path="/calcul" element={<CalculeForm/>}></Route>
            <Route path="/compteur" element={<Incrimentation/>}></Route>
            <Route path="/axios_Test" element={<axios_Test/>}></Route>
        </Routes>
    </div>
  )
}

export default Menu
