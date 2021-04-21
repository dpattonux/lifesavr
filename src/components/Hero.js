import React from "react";
import people from '../img/people.svg';
import { Link } from "react-router-dom";

function Hero(){
    const heroImg={
        width: '305px',
        height: 333,
        padding: 20,
    }

    const heroStyle={
        position: 'absolute',
        width: '100%',
        height: '250px',
        margin: 0,
        background: '#1492B8', 
        display:'flex',
        flexDirection:'row', 
        justifyContent:'space-around',
    }
    const signUpStyle={
        width: '25%', 
        fontFamily: 'Arimo',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '36px',
        lineHeight: '35px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        textAlign: 'center',
        color: '#FFFFFF',
        padding: '20px',
        
    }

    const buttonStyle = {
        color: '#414288',
        backgroundColor: 'white',
        borderRadius: '20px',
        height: '39px',
        width: '188px',
        fontFamily: 'Arimo',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '24px',
        lineHeight: '28px',
        border: 'none',
        textDecoration:'none',
        cursor:'pointer',
    }
    const imgWidth ={
        width:"100%",
    }

    return(
        <div style={heroStyle}>
            <div style={signUpStyle}>
            <p style={{margin: 0}}>Budgeting can be hard</p>
            <p>Let us make it simple</p>
            <Link to="/budgetSelection">< button style={buttonStyle}>Sign Up</ button></Link>
            </div>
            <div style={heroImg}>
                <img src={people} alt="Group of people" style={imgWidth}/>
            </div>
        </div>
    )
};

export default Hero;