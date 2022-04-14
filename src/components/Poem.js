import React from "react";
import {useState} from "react";



function Poem({poem, setPoem}) {
  const {title , content , author}=poem;
  const [read, setRead]=useState(true)
  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      <p>
        <strong>- By {author}</strong>
      </p>
      <button onClick={()=>
      setRead(false)
      }>{read? "mark as read" : "mask as unread"}</button>
    </div>
  );
}

export default Poem;
