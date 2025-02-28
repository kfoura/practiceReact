import { useState } from "react";

function Checkbox () {
    const [clicked, setClicked] = useState(false);

    const handleClick = (event: React.ChangeEvent<HTMLInputElement> ) => {
        setClicked(event.target.checked);
        alert("Checkbox Clicked!");
    };


    return (
        <div> 
            <label>
                <input type="checkbox" checked = {clicked} onChange={handleClick}></input>
                Click me to find out what happens!
            </label>
            
        </div>
    )
}
export default Checkbox;
