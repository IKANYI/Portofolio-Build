import { useState } from 'react'
import './Head.css'
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

function Header() {
    const [menu, setMenu] = useState("Home")
    const [click, setClick] = useState(true)

    const handleMenu = () => setClick(!click)

    return (
        <header>
            <div className="menu-navbar">
                <Link to='/'><li onClick={() => { setMenu("Home") }}>Home{menu === "Home" ? <hr /> : <></>}</li></Link>
                <Link to='/Blogs' onClick={() => { setMenu("Blogs") }}><li>Blog{menu === "Blogs" ? <hr /> : <></>}</li></Link>
                <Link to='/Work'><li onClick={() => { setMenu("Work") }}>Work{menu === "Work" ? <hr /> : <></>}</li></Link>
            </div>
            {click ? <div className="menu-nav-bar">
                <div className="menu">
                    <h2 onClick={handleMenu}><IoMdClose /></h2>
                </div>
                <Link to='/'><li onClick={() => { setMenu("Home") }}>Home{menu === "Home" ? <hr /> : <></>}</li></Link>
                <Link to='/Blogs' onClick={() => { setMenu("Blogs") }}><li>Blog{menu === "Blogs" ? <hr /> : <></>}</li></Link>
                <Link to='/Work'><li onClick={() => { setMenu("Work") }}>Work{menu === "Work" ? <hr /> : <></>}</li></Link>
            </div> : <div className="menu">
                <h2 onClick={handleMenu}><FaBars /></h2>
            </div>}
        </header>
    )
}

export default Header