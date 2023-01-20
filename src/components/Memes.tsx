import React, { useState } from "react";
import { memesData } from "../memesData";

const Data = (props: any) => {
   return(
      <h1>{props.h}</h1>
   )
}

const Memes = () => {
   const [things, setThings] = useState(["Thing 1", "Thing 2"])
   const memes = memesData.data.memes

   function handleOnClick(){
      // arr.push(`Thing ${arr.length + 1}`)
      setThings([...things, `Thing ${things.length + 1}`])
   }
   


   const data = things.map(a => {
      return <Data h={a} />
   })

   return(
      <div className="form">
         <div className="form__input-div">
            <input type="text" name="top-text" id="top-text" placeholder="Shut up" />
            <input type="text" name="bottom-text" id="bottom-text" placeholder="and take my money" />
         </div>
         <button onClick={handleOnClick}><h4>Get a new meme image</h4></button>
         {data}
      </div>
   );
}

export default Memes;