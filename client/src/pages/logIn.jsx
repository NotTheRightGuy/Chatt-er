import "../styles/login.css";
import { useRef } from "react";
import axios from "axios";

function LogIn() {
    const userNameRef = useRef(null);
    const passwordRef = useRef(null);
    const handleLogin = () => {
        axios
            .get(
                `https://Chatter.talkingaboutabout.repl.co/api/creds/?username=${userNameRef.current.value}`
            )
            .then((res) => {
                if (res.data.password === passwordRef.current.value) {
                    console.log("Logged in");
                } else {
                    console.log("Invalid password");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div className="login-container">
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
