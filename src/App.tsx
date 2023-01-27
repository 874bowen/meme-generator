import React, { useState } from "react";
import { Boxes } from "./boxes";
import Memes from "./components/Memes";
import Navbar from "./components/Navbar";


function App () {
   const [squares, setSquares] = useState(Boxes);
   
   return (
      <>
         <Navbar />
         <Memes />
      </>
   );
}

export default App;