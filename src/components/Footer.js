import React from "react";
import graph from "../img/graph.svg";
import pie from "../img/pie.svg";
import money from "../img/money.svg";



function Footer(){
const columnStyle ={
textAlign:'center',
display:'flex',
flexDirection:'column',
alignItems:'center',
justifyContent: 'space-between',
width:'277px',

}
const footerStyle = {
    display:'flex',
    flexDirection:'row',
    alignItems:'flex-start',
    justifyContent: 'space-around', 
    position: 'absolute',
    top:600,
    // bottom:'18.79%',
    width:'100%',
    flexWrap:'wrap',
}
const headerStyle ={
    position: 'absolute',
    width:174,
    height:56,
    fontFamily:'Arimo',
    fontSize:24,
    color:'black',
    top:'60px',
    
}
const pStyle={
    position: 'absolute',
    width: 277,
    height:63,
    fontFamily:'Arimo',
    fontSize:20,
    top: 170,
    color:'rgba(0,0,0,0.6)',

}

    return(
<footer style={footerStyle}>
<div style={columnStyle}>
<img src={graph} alt="Bar Graph"/>
<p style={headerStyle}>Track Income and Expenses</p>
<p style={pStyle}>Know how much income your taking in compared to expenses going out.</p>
</div>
<div style={columnStyle}>
    <img src={pie} alt="Pie Chart"/>
<p style={headerStyle}>Create and Manage Your Budget</p>
<p style={pStyle}>Create a custom budget that works for you</p>
</div>
<div style={columnStyle}>
    <img src={money} alt="Dollar Sign"/>
<p style={headerStyle}>Money Tips and Guides</p>
<p style={pStyle}>Learn new ways to earn and save money.</p>
</div>
</footer>
    )
};

export default Footer;