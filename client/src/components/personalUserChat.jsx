import "../styles/chatBubble.css";

const UserChatBubble = ({ message, user }) => {
    return (
        <div className="personal-chat-bubble">
            <div className="user">{user}</div>
            <div className="message">{message}</div>
        </div>
    );
};

export default UserChatBubble;
