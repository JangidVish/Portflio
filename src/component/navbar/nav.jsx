import React from 'react'
import "./nav.css";
import logo from "../../images/logo.png";
import {Home} from 'lucide-react';
import { PanelsTopLeft } from 'lucide-react';
import {Phone} from 'lucide-react';
import { GanttChartSquare } from 'lucide-react';


const nav = () => {
  return (
    <div className="nav-wrapper">
    <div className='nav'>
        <img src={logo} alt="" srcset="" />
        <ul>
            <li><Home />
            <p>Home</p></li>
            {/* <li>About</li> */}
            <li><PanelsTopLeft/>
            <p>Profile</p></li>
            <li><GanttChartSquare />
            <p>Services</p></li>
            <li><Phone /><p>Contact us</p></li>
        </ul>
    </div>
    </div>
  )
}

export default nav