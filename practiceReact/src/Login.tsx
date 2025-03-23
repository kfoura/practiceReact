import { Box, Typography } from "@mui/material";
import {useNavigate} from "react-router-dom";
import { TextField, Button, Container} from "@mui/material";
import HomeButton from "./components/HomeButton";

const Login = () => {
    const navigate = useNavigate();
    return (
        <Box sx={{
            display:"flex",
            flexDirection: "column",
            justifyContent:"center",
            alignItems:"center",
            height:"100vh",
            width:"100vw",
            
        }}>
        <HomeButton></HomeButton>
        <Container maxWidth="xs">
            <Box sx={{ display: "flex", 
                flexDirection: "column",
                alignItems: "center",
                mt: 8,
                p: 3,
                border: "1px solid #ccc",
                borderRadius: 2,
                boxShadow: 3, backgroundColor:"#ffffff"}}>
                <Typography variant="h5" sx={{color:"black"}} gutterBottom>
                    Login
                </Typography>
                <TextField className="loginField" required margin="normal" label="Username" placeholder="Example Username"/>
                <TextField className="loginField" required margin="normal" label="Password" placeholder="Example Password"/>
                <Button id="loginButton" variant="contained" onClick={() => navigate("/register")}>
                    Click to Register
                </Button>
                <Button id="loginButton" type="submit" variant="contained" onClick={() => navigate("/chat")}>
                    Login
                </Button>
            </Box>
        </Container>
        </Box>
    )
}

export default Login;
