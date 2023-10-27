import { useState, useEffect } from 'react';
import '../CSS/ForumStyle.css';
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import Axios from 'axios'

export default function Forum() {
    const isAuthenticated = true;
    let navigate = useNavigate();
    const authRoute = () => {
        if (isAuthenticated) {
            navigate("/NewDiscussion")
        }
        else {
            navigate("/login")
        }


    }

    const [ForumData, setForumData] = useState([]);

    useEffect(() => {
        // Fetch form data from the backend when the component mounts
        Axios.get('http://localhost:3001/api/forumdata')
            .then((response) => {
                setForumData(response.data);
            })
            .catch((error) => {
                console.error(error);
            });

    }, []);

    return (
        <div>
            <Header />
            <p className="p"></p>
            <input className="inputStyle" type="text" placeholder="Enter your question here" />
            <h2 className="h2">Recent Activity</h2>
            <button className="buttonStyle" onClick={authRoute}>New Discussion</button>
            <p className="p1"></p>

            {ForumData.map((formDataEntry, index) => (
                <div>
                    <div key={index} className='activityStyle'>
                        <h3>{formDataEntry.Title}</h3>
                        {/* <p>Type: {formDataEntry.Type}</p> */}
                        <p>{formDataEntry.Description}</p>
                        {/* <p>Tag: {formDataEntry.Tag}</p> */}
                    </div><br></br>
                </div>
            ))}
        </div>
    )
}
