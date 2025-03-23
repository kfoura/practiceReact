import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Chat from "./Chat";

import './Home.css';

const App = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element=<Home /> />
                <Route path="/login" element=<Login /> />
                <Route path="/register" element=<Register /> />
                <Route path="/chat" element=<Chat /> />
            </Routes>
        </Router>
    )
}

export default App;