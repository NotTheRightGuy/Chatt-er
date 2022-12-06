import "../styles/chatBubble.css";

const ChatBubble = ({ message, user }) => {
    return (
        <div className="chat-bubble">
            <div className="user">{user}</div>
            <div className="message">{message}</div>
        </div>
    );
};

export default ChatBubble;
