import React, { useState } from "react";
import Box from "./Box";

const Squares = (props) => {
	let [comment, setComment] = useState("");

	let [range, setRange] = useState("10");

	function handleSubmit(e) {
		e.preventDefault();
		alert(`You gave us a ${range} star rating and commented: "${comment}"`);
		setComment("");
		setRange("10");
	}

	// let [on, setToOn] = useState(props.on);

   const [sqs, setSqs] = useState([...props.squares]);

   function toggle (id: number) {
      console.log(id);
      setSqs((prevSqs) => {
         return prevSqs.map((sqr) => {
            return (sqr.id === id) ? {...sqr, on: !sqr.on} : sqr
         })
      })
   }

	const sq = sqs.map((square) => {
		return (
			<Box
				key={square.id}
				on={square.on}
				toggle={() => toggle(square.id)}
			/>
		);
	});
	return (
		<>
			<div className="squares">{sq}</div>
			<form action="" onSubmit={handleSubmit}>
				<label htmlFor="range">Rate us: {range} 🌟</label>
				<input
					type="range"
					name="range"
					min={0}
					max={10}
					id=""
					value={range}
					onChange={(e) => setRange(e.target.value)}
				/>
				<label htmlFor="comment">Comment: </label>
				<textarea
					name="comment"
					id=""
					cols={30}
					rows={10}
					value={comment}
					onChange={(e) => setComment(e.target.value)}
				></textarea>
				<button disabled={comment.length < 15 ? true : false} type="submit">
					Submit
				</button>
			</form>
		</>
	);
};

export default Squares;
