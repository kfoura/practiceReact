import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Home.css";
const Home = () => {
    const navigate = useNavigate();

    return (
        <Box className="Home-header" sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center", 
            height: "100vh",
            width: "100vw"}}> 
            <Box 
                sx = {{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <Typography variant="h3" sx = {{
                    padding: "20px",
                    margin: "20px"
                }}
                className="Home_title"
                > Welcome to the K4CHATROOM! </Typography>
            </Box>
            <Typography variant="h6" className="welcomeText">
            This Chatroom allows you to type in the chat and get pre-populated responses.
            </Typography>
            <Button variant="contained" color="secondary" sx= {{
                display: "inline", 
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "1%",
                padding: "10px 20px",
                border: 1,
                transition: "all 0.2s ease",
                "&:hover": {
                    opacity: "70%",
                    boxShadow: 25,
                    border: 1
                },
            }} 
            onClick={() => navigate("/login")}>Login</Button>
        </Box>
        
    )
}

export default Home;