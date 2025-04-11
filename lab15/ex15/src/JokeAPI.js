import React, { useEffect, useState } from 'react';

function JokeAPI(){
    
        const [joke, setJoke] = useState('');
      
        const fetchJoke = async () => {
          const response = await fetch('https://official-joke-api.appspot.com/jokes/random');
          const data = await response.json();
          setJoke(`${data.setup} - ${data.punchline}`);
        };
      
        useEffect(() => {
          fetchJoke();
        }, []);
      
        return (
          <div>
            <p>{joke}</p>
            <button onClick={fetchJoke}>New Joke</button>
          </div>
        );
      
}


export default JokeAPI;