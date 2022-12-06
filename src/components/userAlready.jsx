import "../styles/userExist.css";

function UserExist() {
    return (
        <div className="userExist">
            <h1>User Already Exists</h1>
            <p>
                Username is already registered. You may want to log in or try
                using a different username
            </p>
        </div>
    );
}

export default UserExist;
