import "../styles/login.css";
import { useRef, useState } from "react";
import InvalidPass from "../components/invalidPass";
import axios from "axios";

function LogIn() {
    const userNameRef = useRef(null);
    const passwordRef = useRef(null);
    const [wrongPass, setWrongPass] = useState(false);
    const handleLogin = () => {
        axios
            .get(
                `https://Chatter-Server.talkingaboutabout.repl.co/api/creds/?username=${userNameRef.current.value}`
            )
            .then((res) => {
                if (res.data.password === passwordRef.current.value) {
                    console.log("Logged in");
                    window.location.href = `/chatroom?=${userNameRef.current.value}`;
                } else {
                    setWrongPass(true);
                    setTimeout(() => setWrongPass(false), 3000);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div className="login-container">
            {wrongPass ? <InvalidPass /> : null}
            <div className="login-title">Log In</div>
            <div className="login-form">
                <input type="text" ref={userNameRef} placeholder="Username" />
                <input
                    type="password"
                    ref={passwordRef}
                    placeholder="Password"
                />
                <button onClick={handleLogin}>Log In</button>
                <p className="signin-prompt">
                    Don't Remember being here before?
                </p>
                <button onClick={() => (window.location.href = "/signup")}>
                    Sign In
                </button>
            </div>
        </div>
    );
}

export default LogIn;
