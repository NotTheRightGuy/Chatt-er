import "../styles/signup.css";
import UserExist from "../components/userAlready";
import { useRef, useState } from "react";
import axios from "axios";
function SignUp() {
    const userNameRef = useRef(null);
    const passwordRef = useRef(null);
    const emailRef = useRef(null);
    const [userExists, setUserExists] = useState(false);
    const handleSignUp = () => {
        const user = {
            email: emailRef.current.value,
            username: userNameRef.current.value,
            password: passwordRef.current.value,
        };
        axios
            .post(
                "https://Chatter-Server.talkingaboutabout.repl.co/api/creds/",
                user
            )
            .then((res) => {
                window.location.href = "/login";
            })
            .catch((err) => {
                setUserExists(true);
                setTimeout(() => setUserExists(false), 3000);
                console.log(err);
            });
    };

    return (
        <div className="signup-container">
            {userExists ? <UserExist /> : null}
            <div className="signup-title">Sign Up</div>
            <div className="signup-form">
                <input type="text" placeholder="Email" ref={emailRef} />
                <input type="text" placeholder="Username" ref={userNameRef} />
                <input
                    type="password"
                    placeholder="Password"
                    ref={passwordRef}
                />
                <button type="submit" onClick={handleSignUp}>
                    Register
                </button>
            </div>
        </div>
    );
}

export default SignUp;
