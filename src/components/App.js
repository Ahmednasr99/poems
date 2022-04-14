import React from "react";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";
import { useState } from 'react';
import { useEffect } from "react";

function App() {

  const [poem, setPoem] = useState([]);
  const [isvisible ,setisVisible]=useState(false)


  const request = async () => {
    let req = await fetch('http://localhost:8004/poems')
    let res = await req.json()
    console.log(res)
    setPoem(res)
    
    
}
useEffect(request,[])
console.log(poem)
  return (
    <div className="app">
      <div className="sidebar">
        <button >Show/hide new poem form</button>
        {true ? <NewPoemForm /> : null}
      </div>
      <PoemsContainer poem={poem}  />
    </div>
  );
}

export default App;
