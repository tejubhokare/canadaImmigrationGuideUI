import { useState } from "react"
import Axios from 'axios'
import { Link } from "react-router-dom"


function LoginUser() {
    const [emailID, setEmailID] = useState("")
    const [password, setPassword] = useState("")

    const submitLoginDetails = () => {
        Axios.post("http://localhost:3001/api/auth", {
            email: emailID, password: password
        }).then((response) => alert(response.data.message))
            .catch((response) => alert(response.data.message));

    }
    const myStyle = {
        zIndex: 50,
        fontSize: '15px',
        marginLeft: '3.1%',
        paddingTop: '7%',
        width: '30%',
        color: 'black',

    };
    const myStyle1 = {
        zIndex: 50,
        fontSize: '30px',
        marginLeft: '30%',
        marginTop: '1%',
        width: '30%',
        color: 'black',

    };

    const inputStyle = {
        marginLeft: '30%',
        width: '25%',
        padding: '12px',
        fontSize: '17px',
        marginTop: '1%',
        border: '0.5px solid',
        borderRadius: '10px'
    }

    const buttonLogin = {
        marginLeft: '32%',
        fontSize: '20px',
        textAlign: 'center',
        width: '23%',
        color: 'white',
        backgroundColor: 'blueviolet',
        padding: '10px',
        border: '0',
        borderRadius: '10px',
        marginTop: '1%',
        cursor: 'pointer'
    }
    const buttonLogin1 = {
        marginLeft: '34%',
        fontSize: '20px',
        textAlign: 'center',
        width: '18%',
        color: 'white',
        backgroundColor: 'green',
        padding: '10px',
        border: '0',
        borderRadius: '10px',
        marginTop: '1%',
        cursor: 'pointer'
    }

    return (
        <div>
            <img src='/img/advisorBack.jpg'
                alt="advisor"
                width='70%'
                height='100%'
                style={{ position: "absolute", zIndex: -1, marginLeft: '', marginTop: '-1%' }}
            />
            <Link to="/img">
                <img src='/img/canada.png'
                    alt="country"
                    width='16%'
                    height='13%'

                    style={{
                        position: "absolute", zIndex: -1, marginLeft: '3%', marginTop: '1%',
                    }}
                />
            </Link>

            <img src='/img/login1.jpg'
                alt="background"
                width='20%'
                height='40%'
                style={{
                    position: "absolute", zIndex: -1, marginLeft: '65%',
                    border: '0',
                    borderRadius: '10px',
                    marginTop: '1%'
                }}
            />
            <img src='/img/login2.jpg'
                alt="background"
                width='20%'
                height='40%'
                style={{
                    position: "absolute", zIndex: -1, marginLeft: '80%',
                    border: '0',
                    borderRadius: '200px',
                    marginTop: '15%'
                }}
            />
            <img src='/img/login3.jpg'
                alt="background"
                width='20%'
                height='40%'
                style={{
                    position: "absolute", zIndex: -1, marginLeft: '65%',
                    border: '0',
                    borderRadius: '200px',
                    marginTop: '28%'
                }}
            />


            <h1 style={myStyle}>Canadian Immigration Guide</h1>

            <h3 style={myStyle1}>Sign in to your Account</h3>
            <input style={inputStyle} type="text" name="emailid" placeholder="Enter Email ID" onChange={(e) => {
                setEmailID(e.target.value);
            }} /><br></br>
            <input style={inputStyle} type="password" name="pass" placeholder="Enter Password" onChange={(e) => {
                setPassword(e.target.value);
            }} /><br></br>
            <button type="submit" style={buttonLogin} onClick={submitLoginDetails} >Log In</button>
            <p style={{ marginLeft: '38.5%', }}>Forgot password?</p>
            <p style={{ border: '1px solid', width: '140px', marginLeft: '30%' }}></p>
            <p style={{ marginLeft: '42.7%', marginTop: '-2.3%' }}>or</p>
            <p style={{ border: '1px solid', width: '140px', marginLeft: '45%', marginTop: '-2%' }}></p>
            <button type="submit" style={buttonLogin1}>Create New Account</button>
        </div>
    )
}

export default LoginUser;