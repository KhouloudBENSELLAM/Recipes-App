import React from "react";
import{Link,Outlet} from "react-router-dom";
import { useState } from "react";
import SideBar from "./Sidebar";
import { faHome, faCog, faList, faInfoCircle} from "@fortawesome/free-solid-svg-icons";


export default function Menu(){
    const[showsidebar, setShowSideBar] = useState(false);
    const links=[
        { name: "Home", path: "/", icon: faHome },
        { name: "Settings", path: "/Settings", icon: faCog },
        { name: "Recipes", path: "/SignUp", icon: faList },
        // { name: "About Us", path: "/about", icon: faInfoCircle },
        // { name: "Sign Up", path: "/SignUp"},
    ]

    const colseSidebar = ()=>{
        setShowSideBar(false);
    }
    return(
        <>
            <nav className="navbar container">
                <div className="logo">
                    <Link to="/">Tasty<span>Threads</span></Link>
                </div>
                <div className="nav-links">
                    <div>
                        {links.map(link=>(
                            <Link className="nav-link" to={link.path} key={link.name}>{link.name}</Link>
                        ))
                        }
                    </div>
                    
                </div>
                <div onClick={() =>setShowSideBar(true)} className={showsidebar ? "sidebar-btn active" : "sidebar-btn"}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </nav>
            {showsidebar && <SideBar links={links} close={colseSidebar} />}


            <div className="container-fluid w-75 mx-auto">
                <Outlet />
            </div>

        </>
    )
}