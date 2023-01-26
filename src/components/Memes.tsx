import React, { useState } from "react";
import { memesData } from "../memesData";

const Memes = () => {

   const [meme, setMeme] = useState({
      topText: "",
      bottomText: "",
      randomImage: ""
   });

   const [formData, setFormData] = useState({
      email: "",
      password: "",
      confirm_password: "",
      isSubscribed: false
   })

   const allMemeImages = memesData.data.memes;

   function getRandomImage() {
      let randomIndex = Math.floor(Math.random() * allMemeImages.length);
      console.log(allMemeImages[randomIndex]);
      setMeme((prevMeme => ({
         ...prevMeme,
         randomImage: `${allMemeImages[randomIndex].url}`
      })));
   }

   function validate(password: string, confirm_password: string) {
      return password === confirm_password;
   }

   function handleOnSubmit (e: any) {
      e.preventDefault();
      let isValidated: boolean = validate(formData.password, formData.confirm_password)
      if (isValidated){
         alert(JSON.stringify(formData))
      } else {
         alert("Passwords did not match");
         return
      }

      if (formData.isSubscribed){
         alert("Thank you for subscribing to our newsletter");
      }
   }

   function handleOnChange (e: any) {
      const {type, name, value, checked} = e.target;
      setFormData((prevFormData) => ({
         ...prevFormData,
         [name]: type === "checkbox" ? checked : value
      }))
   }

   return(
      <div className="form">
         <div className="form__input-div">
            <input type="text" name="top-text" id="top-text" placeholder="Shut up" />
            <input type="text" name="bottom-text" id="bottom-text" placeholder="and take my money" />
         </div>
         <button onClick={getRandomImage}><h4>Get a new meme image</h4></button>
         <img src={meme.randomImage} alt=""  />
         <form onSubmit={handleOnSubmit}>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" value={formData.email} onChange={handleOnChange} />
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" id="password" value={formData.password} onChange={handleOnChange} />
            <label htmlFor="confirm_password">Confirm Password: </label>
            <input type="password" name="confirm_password" id="confirm_password" value={formData.confirm_password} onChange={handleOnChange}  />
            <input type="checkbox" name="isSubscribed" id="isSubscribed" checked={formData.isSubscribed} onChange={handleOnChange} />
            <button>Sign Up</button>
         </form>
      </div>
   );
}

export default Memes;