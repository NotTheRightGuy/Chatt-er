import "./App.css";
import HomePage from "./pages/homepage";
import SignUp from "./pages/signup";
import LogIn from "./pages/logIn";
import ChatRoom from "./pages/chat";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/chat" element={<ChatRoom />} />
        </Routes>
    );
}

export default App;
