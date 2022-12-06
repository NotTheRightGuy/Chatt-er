import "../styles/chatBubble.css";

function MyChats({ message, user, time }) {
    return (
        <div className="my-chat-bubble">
            <div className="my-chat-bubble-user">
                <p>{user}</p>
            </div>
            <div className="my-chat-bubble-text">
                <p>{message}</p>
            </div>
            <div className="my-chat-bubble-time">
                <p>{time}</p>
            </div>
        </div>
    );
}

export default MyChats;
