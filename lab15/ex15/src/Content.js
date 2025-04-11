import React,{useState} from "react";
import './styles.css';

function Content(){
    const [showJoke,setShowJoke] = useState(false);

    const handleClick = () => {
        setShowJoke(true);
    };
    
    return(
        <>
            <button className="btn" style={{backgroundColor: "red", padding: 7, fontSize: "20px"}} onClick={handleClick}>Joke!</button>
            {showJoke && <p>This is a joke!</p>}
        </>
    );
}

export default Content;