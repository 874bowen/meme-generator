import React, { useState } from "react";
import { memesData } from "../memesData";

const Memes = () => {

   const [meme, setMeme] = useState({
      topText: "",
      bottomText: "",
      randomImage: ""
   });

   const allMemeImages = memesData.data.memes;

   function getRandomImage() {
      let randomIndex = Math.floor(Math.random() * allMemeImages.length);
      console.log(allMemeImages[randomIndex]);
      setMeme((prevMeme => ({
         ...prevMeme,
         randomImage: `${allMemeImages[randomIndex].url}`
      })));
   }


   return(
      <div className="form">
         <div className="form__input-div">
            <input type="text" name="top-text" id="top-text" placeholder="Shut up" />
            <input type="text" name="bottom-text" id="bottom-text" placeholder="and take my money" />
         </div>
         <button onClick={getRandomImage}><h4>Get a new meme image</h4></button>
         <img src={meme.randomImage} alt=""  />
      </div>
   );
}

export default Memes;