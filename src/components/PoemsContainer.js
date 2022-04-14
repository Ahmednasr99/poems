import React from "react";
import Poem from "./Poem";

function PoemsContainer({poem,setPoem}) {

  return (
    <div className="poems-container">
      {poem.map(element=>{
        return(
        <Poem key={element.id} poem={element} />
        )
      })}
    </div>
  );

}



export default PoemsContainer;
