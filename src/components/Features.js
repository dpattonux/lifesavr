import React from "react";

function Features(){
    const featureStyle ={
        textAlign:'center',
        height:147,
        color:'white',
        backgroundColor:'#3ad2ff',
        position: 'absolute',
        top:352,
        width:'100%',
        fontFamily: 'Arimo',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '48px',
        lineHeight: '55px',
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center'
        

     };
      return(
        <div style={featureStyle}>
            <p>Features</p>
        </div>
    )
};

export default Features;