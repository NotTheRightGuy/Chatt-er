import "../styles/chatBubble.css";

function OtherChats({ message, user, time }) {
    return (
        <div className="other-chat-bubble">
            <div className="other-chat-bubble-user">
                <p>{user}</p>
            </div>
            <div className="other-chat-bubble-text">
                <p>{message}</p>
            </div>
            <div className="other-chat-bubble-time">
                <p>{time}</p>
            </div>
        </div>
    );
}

export default OtherChats;
