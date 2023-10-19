import '../CSS/ForumStyle.css';
import Header from "./Header";
import { useNavigate } from "react-router-dom";

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

    return (
        <div>
            <Header />
            <p className="p"></p>
            <input className="inputStyle" type="text" placeholder="Enter your question here" />
            <h2 className="h2">Recent Activity</h2>
            <button className="buttonStyle" onClick={authRoute}>New Discussion</button>
            <p className="p1"></p>
        </div>
    )
}
