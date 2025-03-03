import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <Box classname="Home-header"> 
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
                classname="Home_title"
                > Welcome to the K4CHATROOM! </Typography>
            </Box>
        </Box>
    )
}