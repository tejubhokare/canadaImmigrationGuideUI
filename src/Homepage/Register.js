import { useState } from "react"
import Axios from 'axios'

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

    return (
        <div>
            <p>First Name</p>
            <input type="text" placeholder="First Name" onChange={(e) => { setFirstName(e.target.value); }} />
            <p>Last Name</p>
            <input type="text" placeholder="Last Name" onChange={(e) => { setLastName(e.target.value); }} />
            <p>Email ID</p>
            <input type="text" placeholder="Email ID" onChange={(e) => { setEmailID(e.target.value); }} />
            <p>Password</p>
            <input type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value); }} />
            <p>Confirm Password</p>
            <input type="password" placeholder="Confirm Password" onChange={(e) => { setConfirmPassword(e.target.value); }} />
            <button onClick={submitRegisterDetails}>Register</button>
        </div>
    )
}