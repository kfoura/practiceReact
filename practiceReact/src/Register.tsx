import { Box, Typography } from "@mui/material";
import {useNavigate} from "react-router-dom";
import { TextField, Button, Container} from "@mui/material";
import HomeButton from "./components/HomeButton";

const Register = () => {
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
                boxShadow: 3, backgroundColor:"#ffffff"           }}>
                <Typography variant="h5" sx={{color:"black"}} gutterBottom>
                    Login
                </Typography>
                <TextField className="registerField" required margin="normal" label="Username" placeholder="Example Username"/>
                <TextField className="registerField" required margin="normal" label="Email" placeholder="example@example.com"/>
                <TextField className="registerField" required margin="normal" label="Password" placeholder="Example Password"/>
                <Button id="loginButton" variant="contained" onClick={() => navigate("/login")}>
                    Click to Login
                </Button>
                <Button id="loginButton" type="submit" variant="contained" onClick={() => navigate("/chat")}>
                    Register
                </Button>
            </Box>
        </Container>
        </Box>
    )
}

export default Register;
