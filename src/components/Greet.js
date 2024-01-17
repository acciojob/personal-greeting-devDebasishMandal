import React from "react";
import { useState } from "react";

const Greet=()=>{

    const [name,setName]=useState("");

  function handleInput(e){
     setName(e.target.value);
  }



    return(<div>
        {name!=""?<p>Enter your name:Hello {name}!</p>:""}
        <form>
        <input type="text" onChange={handleInput}></input>
        </form>
        
        

    </div>
        
    )
}


export default Greet;