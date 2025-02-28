import { useEffect, useState } from "react";

function Timer() {
    const [time, settime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
            settime(new Date().toLocaleTimeString());
        }, 1000);
        
        return () => clearInterval(interval);
    }, []);
    
    return (
        <div>
            <header> 
                Current Time: <span> {time} </span>
            </header>
        </div>
    )
}


export default Timer;