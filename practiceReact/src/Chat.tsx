import { Box, Typography, TextField, InputAdornment, Button } from "@mui/material";
//import {useNavigate} from "react-router-dom";
import HomeButton from "./components/HomeButton";

const Chat = () => {
    //const navigate = useNavigate();

    return (
    <>
        <Box sx={{display: "flex", flexDirection:"column", alignItems:"center", gap: '64px', justifyContent:"center", width:"100vw", height:"100vh"}}>
            <HomeButton></HomeButton>
            <Box sx={{ display: "flex", 
                flexDirection: "column",
                alignItems: "center",
                mt: 8,
                p: 3,
                border: "1px solid #ccc",
                borderRadius: 2,
                boxShadow: 3, backgroundColor:"#ffffff"}}>
            <Box className="chatText" sx={{
                display:"flex",
                flexDirection:"column", 
                alignItems:"center",
                border: 2,
                borderColor:"primary",
                borderRadius:"8px"
            }}>
                <Typography variant="body1" sx={{ mt: 2, color:"black", textShadow: "1px 1px 2px black, 0 0 5px black"
}}> Sample Text </Typography>
            </Box>
            <Box className="textBox" sx = {{mt: 2, display:"flex", flexDirection:"column", alignItems:"center"}} component="form">
                <TextField fullWidth multiline rows={2} variant="filled" placeholder="Type your text here" className="chatText" InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <Button id="sendButton" type="submit" variant="contained" color="secondary"> Send </Button>
                        </InputAdornment>   
                    ),
                }}
                />
            </Box>
        </Box>
        </Box>
    </>
    )
}

export default Chat;