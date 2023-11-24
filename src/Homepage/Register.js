import { useState } from "react"
import Axios from 'axios'
import { Link } from "react-router-dom"

export default function Register() {
    const [FirstName, setFirstName] = useState("")
    const [LastName, setLastName] = useState("")
    const [EmailID, setEmailID] = useState("")
    const [Password, setPassword] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")

    const submitRegisterDetails = () => {
        Axios.post("http://localhost:3001/api/insert", {
            firstName: FirstName, lastName: LastName, email: EmailID, password: Password, confirmPassword: ConfirmPassword
        }).then(() => {
            alert("Success")
        })
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
        marginLeft: '34%',
        marginTop: '-1%',
        width: '30%',
        color: 'black',

    };

    const inputStyle = {
        marginLeft: '32%',
        width: '25%',
        padding: '12px',
        fontSize: '17px',
        marginTop: '1%',
        border: '0.5px solid',
        borderRadius: '10px'
    }

    const buttonLogin = {
        marginLeft: '34%',
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

            <h3 style={myStyle1}>Create new Account</h3>
            {/* <p>First Name</p> */}
            <input type="text" style={inputStyle} placeholder="First Name" onChange={(e) => { setFirstName(e.target.value); }} />
            {/* <p>Last Name</p> */}
            <input type="text" style={inputStyle} placeholder="Last Name" onChange={(e) => { setLastName(e.target.value); }} />
            {/* <p>Email ID</p> */}
            <input type="text" style={inputStyle} placeholder="Email ID" onChange={(e) => { setEmailID(e.target.value); }} />
            {/* <p>Password</p> */}
            <input type="password" style={inputStyle} placeholder="Password" onChange={(e) => { setPassword(e.target.value); }} />
            {/* <p>Confirm Password</p> */}
            <input type="password" style={inputStyle} placeholder="Confirm Password" onChange={(e) => { setConfirmPassword(e.target.value); }} />
            <button style={buttonLogin} onClick={submitRegisterDetails}>Register</button>
            <p style={{ marginLeft: '37.5%', }}>Already have account?  <a href="/login" style={{ textDecoration: 'none', color: 'blue' }}>Log in</a></p>
        </div>
    )
}