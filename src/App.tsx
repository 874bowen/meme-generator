import React, { useState } from "react";
import { Boxes } from "./boxes";
import Memes from "./components/Memes";
import Navbar from "./components/Navbar";
import Squares from "./components/Squares";

function App () {
   const [squares, setSquares] = useState(Boxes);
   
   return (
      <>
      <Navbar />
      <Memes />
      <Squares squares={squares} darkMode={true} />
      </>
   );
}

export default App;