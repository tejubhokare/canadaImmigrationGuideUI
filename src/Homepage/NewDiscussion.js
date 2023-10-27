import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Axios from 'axios'

export default function NewDiscussion() {
    const [Title, setTitle] = useState("");
    const [Type, setType] = useState("Select an Option");
    const [Description, setDescription] = useState("");
    const [Tag, setTag] = useState("");

    const submitForumDetails = () => {
        Axios.post("http://localhost:3001/api/insertForum", {
            Title: Title, Type: Type, Description: Description, Tag: Tag
        }).then(() => {
            alert("Success")
        })
    }

    const buttonStyle = {
        position: "absolute",
        fontSize: '17px',
        marginTop: '1.5%',
        padding: '10px',
        width: '15%',
        color: 'white',
        border: '0',
        borderRadius: '10px',
        backgroundColor: 'olive',
        cursor: 'Pointer',
        marginLeft: '10%'
    }

    return (
        <div>
            <Header />
            <p style={{ border: '1px solid', width: '99%', marginLeft: '0.5%', marginTop: '3%' }}></p>
            <h2 style={{ marginLeft: '10%' }}><b>Title</b></h2>
            <input style={{ marginLeft: '10%', width: '60%', padding: '8px' }} type="text" onChange={(e) => {
                setTitle(e.target.value);
            }} />
            <h2 style={{ marginLeft: '10%' }}><b>Type</b></h2>
            <select style={{ marginLeft: '10%', width: '20%', padding: '8px' }} onChange={(e) => {
                setType(e.target.value);
            }}>

                <option>Select an Option</option>
                <option>Visitor Visa</option>
                <option>Work Permit</option>
                <option>Citizenship</option>
                <option>Study Visa</option>

            </select> <br />
            <textarea style={{ marginLeft: '10%', width: '60%', height: '150px', padding: '8px', marginTop: '2%' }} onChange={(e) => {
                setDescription(e.target.value);
            }} /><br />
            <input style={{ marginLeft: '10%', padding: '8px', marginTop: '2%' }} placeholder="add a tag" onChange={(e) => {
                setTag(e.target.value);
            }} />
            <input type="file" style={{ marginLeft: '2%' }} /><br />
            <button style={buttonStyle} onClick={submitForumDetails}>Create Discussion</button>

            <Footer />
        </div>
    )
}