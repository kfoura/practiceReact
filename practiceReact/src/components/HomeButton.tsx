import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";

function HomeButton() {
    const navigate = useNavigate();

    return (
        <div id="HomeButton" style={{cursor:"pointer"}}>
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
            onClick={() => navigate("/")}>Home</Button>
        </div>
    )
}

export default HomeButton;