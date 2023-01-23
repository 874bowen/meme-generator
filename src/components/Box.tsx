import React, { useState } from "react";

const Box = (props: any) => {

   

   const styles = {
      backgroundColor: props.on ? "#223223" : "#cccccc"
   }
   return (
      <div className="square" style={styles} onClick={() => props.toggle(props.id)}>

      </div>
   );
}

export default Box;