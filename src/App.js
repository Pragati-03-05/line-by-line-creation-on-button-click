import './style.css';
import React, { useState } from 'react';

export default function App() {
  const [line, setLine] = useState([]);
  const [count, setCount] = useState(0);
  //const [val, setVal] = useState("link");
  const addNew = () => {
    setCount(count + 1);
    if (count < 4) {
      setLine([...line, count]);
      setTimeout(() => {
        let rr = document.getElementsByClassName('link')[count];
        rr.classList.add('link-after');
      }, 500);
    }
  };
  return (
    <div className="App">
      <button onClick={() => addNew()}>Add Link</button>
      {line.map((x, ind) => {
        return (
          <div key={ind}>
            <div className="link"></div>
          </div>
        );
      })}
    </div>
  );
}
