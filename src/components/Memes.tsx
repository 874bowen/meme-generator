import React, { useState } from "react";
import { memesData } from "../memesData";

const Memes = () => {

   const [memeImage, setMemeImage] = useState("");

   const memes = memesData.data.memes

   function getRandomImage() {
      let randomIndex = Math.floor(Math.random() * memes.length);
      console.log(memes[randomIndex]);
      setMemeImage(`${memes[randomIndex].url}`);
   }

   console.log(memeImage)

   return(
      <div className="form">
         <div className="form__input-div">
            <input type="text" name="top-text" id="top-text" placeholder="Shut up" />
            <input type="text" name="bottom-text" id="bottom-text" placeholder="and take my money" />
         </div>
         <button onClick={getRandomImage}><h4>Get a new meme image</h4></button>
         <img src={memeImage} alt=""  />
      </div>
   );
}

export default Memes;