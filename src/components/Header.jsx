import React from 'react'
import headerStyle from "./header.module.css"
import logo from "../images/animal-g12131b141_640.png"
import { HiOutlinePlus} from "react-icons/hi";
import { Link } from 'react-router-dom'



function Header() {
  return (
    <div className={headerStyle.headerApp}>
        <div className={headerStyle.headerContainer}>
            <div>
                <a><img src={logo} style={{width: "60px"}}></img></a>
            </div> 
            <Link to="/">
                <div style={{"cursor":"pointer"}}>
                    <div className={headerStyle.textHome}><span>Tus posts</span></div>
                </div>
            </Link>   
            <Link to="/createPost">
                <div className={headerStyle.uploadWrapper}>
                <div className={headerStyle.iconWrapper}>
                    <HiOutlinePlus/>
                    <span className={headerStyle.textUpload}>Subir Post</span>
                </div>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Header