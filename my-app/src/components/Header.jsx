import ironhackLogo from "../images/ironhack-logo-xs.png";
import leftCornerLogo from "../images/menu-top-xs.png";
import "../components/Header.css"

 export default function Header(props){
 return (
    <header className="header">
    <nav className="Navbar">
            <img src={ironhackLogo} alt="logo" className="logo"/>
            <img src={leftCornerLogo} alt="leftCornerLogo" className="leftCornerLogo"/>
    </nav>
    <div className="title">
    <h1>Say hello to <br/>ReactJS</h1>
    <div/>
    <p>You will learn how to use <br/>the most popular frontend library, <br/>and become a super Ninja developer.</p>
    <button className="button">Awesome!</button>
    </div>
    </header>
 );   
}
