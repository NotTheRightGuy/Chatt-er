import "../styles/chatroom.css";
import { useRef, useState, useEffect } from "react";
import { io } from "socket.io-client";
import OtherUserChatBubble from "../components/otherUserChat";
import UserChatBubble from "../components/personalUserChat";
const prevBubbles = [];
var socket = io("https://Chatter.talkingaboutabout.repl.co");

function ChatRoom() {
    const userName = window.location.href.split("=")[1];
    const [bubbles, setBubbles] = useState(prevBubbles);
    const chatRef = useRef(null);
    const submitChatClick = () => {
        const chatText = chatRef.current.value;
        if (chatText === "") {
            return;
        }
        const newBubble = { message: chatText, user: userName };
        socket.emit("new-message", newBubble);
        setBubbles([...bubbles, newBubble]);
        chatRef.current.value = "";
    };
    socket.on("receive-message", (message) => {
        setBubbles([...bubbles, message]);
    });
    return (
        <div className="chatroom-container">
            <div className="chatContainers">
                {bubbles.map((bubble) => {
                    if (bubble.user != userName) {
                        return (
                            <OtherUserChatBubble
                                key={Math.random()}
                                message={bubble.message}
                                user={bubble.user}
                            />
                        );
                    } else {
                        return (
                            <UserChatBubble
                                key={Math.random()}
                                message={bubble.message}
                                user={bubble.user}
                            />
                        );
                    }
                })}
            </div>
            <div className="chatSection">
                <div className="profile-pic"></div>
                <div className="chatInput">
                    <input
                        type="text"
                        placeholder="Start Typing"
                        ref={chatRef}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                submitChatClick();
                            }
                        }}
                    />
                </div>
                <div className="deliver">
                    <button className="sendButton" onClick={submitChatClick}>
                        <img src="https://img.icons8.com/material/30/null/checkmark--v2.png" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ChatRoom;
