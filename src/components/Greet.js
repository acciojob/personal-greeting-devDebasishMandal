import React from "react";
import { useState } from "react";

const Greet=()=>{

    const [name,setName]=useState("");

  function handleInput(e){
     setName(e.target.value);
  }



    return(<div>
        <p>Enter your name :</p>
        <form>
        <input type="text" onChange={handleInput}></input>
        </form>
        <p>{name}</p>

    </div>
        
    )
}


export default Greet;