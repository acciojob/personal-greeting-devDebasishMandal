import React from "react";
import { useState } from "react";

const Greet=()=>{

    const [name,setName]=useState("");

  function handleInput(e){
     setName(e.target.value);
  }

  

    return(<div>
        {/* <p>Enter your name:</p> */}
        <input type="text" onChange={handleInput}></input>
        <p>{`Hello ${name}!`}</p>
        

    </div>
        
    )
}


export default Greet;