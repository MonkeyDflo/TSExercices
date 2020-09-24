import React from 'react';
import { useState, useEffect } from 'react';

const CounterExample = () => {
    const [count, setCount] = useState(0);
    //useEffect
    useEffect(() => {
        document.title = `You clicked ${count} times`;
      });
    
    return(
        <div>
            <p>Vous avez cliqué {count} fois</p>
                <button onClick={() => setCount(count + 1)}>
                    Cliquez ici
                </button>
        </div>
    );
}

export default CounterExample;
    