import React from "react";

function LoginButton(props){
    const loginstyle = {
        color: '#414288',
        backgroundColor: 'white',
        borderRadius: '10px',
        height: '47px',
        width: '114px',
        fontFamily: 'Arimo',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '24px',
        lineHeight: '28px',
        border: 'none',
        cursor:'pointer',
    }
    
    return (
        <div>
        <button style={loginstyle}>Login</button>
        </div>
    );
    
    }
    
    export default LoginButton;