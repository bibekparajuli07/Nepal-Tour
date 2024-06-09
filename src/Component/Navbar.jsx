// import React from 'react'
import "./Navbar.css"
import { Menuitems } from "./Menuitems"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (

    <div>
        <nav className="Nav">
        <h1 className="logo">Nepal Tour </h1>
            <div className="nvmenu">
            <ul>
                {Menuitems.map((item, index)=>{
                  return(
                        <li key={index}>
                          <Link to={item.url}>{item.title}</Link>
                         </li>     
                  );
                })}
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar