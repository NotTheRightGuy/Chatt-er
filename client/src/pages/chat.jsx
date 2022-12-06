import "../styles/chatroom.css";
import { useRef, useState } from "react";
import SendImage from "../assets/Right-arrow.png";

import OtherChats from "../components/fromChats";
import MyChats from "../components/toChats";

import { io } from "socket.io-client";
var socket = io("https://Chatter.talkingaboutabout.repl.co");

function ChatRoom() {
    const userName = window.location.href.split("=")[1];
    const [bubbles, setBubbles] = useState([]);
    const chatRef = useRef(null);

    const submitChatClick = () => {
        const chatText = chatRef.current.value;
        if (chatText === "") {
            return;
        }
        const newBubble = {
            message: chatText,
            user: userName,
            time: new Date().toLocaleString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: false,
            }),
        };
        socket.emit("new-message", newBubble); //Emitting the new message to the server

        setBubbles([...bubbles, newBubble]); //Adding the new message to the bubbles array
        chatRef.current.value = ""; //Clearing the input field
    };

    socket.on("receive-message", (message) => {
        //Receiving the new message from the server
        setBubbles([...bubbles, message]); // Adding the new message to the bubbles array
    });

    return (
        <div className="chatroom">
            <div className="chat-container">
                {bubbles.map((bubble, index) => {
                    if (bubble.user === userName) {
                        return (
                            <MyChats
                                key={index}
                                message={bubble.message}
                                user={bubble.user}
                                time={bubble.time}
                            />
                        );
                    } else {
                        return (
                            <OtherChats
                                key={index}
                                message={bubble.message}
                                user={bubble.user}
                                time={bubble.time}
                            />
                        );
                    }
                })}
            </div>
            <div className="chat-input">
                <input
                    type="text"
                    ref={chatRef}
                    placeholder="Start Typing"
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            submitChatClick();
                        }
                    }}
                />
                <button onClick={submitChatClick}>
                    <img src={SendImage} className="send-image" />
                </button>
            </div>
        </div>
    );
}
export default ChatRoom;
