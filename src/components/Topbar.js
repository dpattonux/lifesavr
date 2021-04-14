import React from "react";
import LoginButton from "./LoginButton";
import robot from '../img/robot.svg';

function Topbar(props){
const topstyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#3ad2ff',
    color: 'white',
    paddingLeft: '35px',
    paddingRight: '35px',
    fontFamily: 'Arimo',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '28px',
    lineHeight: '32px',
    margin: 0,
}
const titleStyle = {
    display:'flex',
    flexDirection:'row'

}

return (
    <nav id="login" style={topstyle}>
    <div style={titleStyle}>
    <img src={robot} alt="Robot Logo"/>
    <h1>LifeSavr</h1>
    </div>

    <LoginButton/>
    </nav>
);

}

export default Topbar;