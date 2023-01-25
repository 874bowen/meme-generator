import React, { useState } from "react";
import Box from "./Box";

const Squares = (props) => {
	let [formData, setFormData] = useState({
		comment: "",
		range: "10",
		email: ""
	})

	function handleChange(e) {
		setFormData((prevData) => ({
			...prevData,
			[e.target.name]: e.target.value
		}))
	}

	function handleSubmit(e) {
		e.preventDefault();
		alert(`${formData.email} gave us a ${formData.range} star rating and commented: "${formData.comment}"`);
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
				<label htmlFor="range">Rate us: {formData.range} 🌟</label>
				<input
					type="range"
					name="range"
					min={0}
					max={10}
					id=""
					value={formData.range}
					onChange={handleChange}
				/>
				<label htmlFor="email">Email</label>
				<input type="email" name="email" id="email" placeholder="abc@gmail.com" value={formData.email} onChange={handleChange} />
				<label htmlFor="comment">Comment: </label>
				<textarea
					name="comment"
					id=""
					cols={30}
					rows={10}
					value={formData.comment}
					onChange={handleChange}
				/>
				<button disabled={formData.comment.length < 15 ? true : false} type="submit">
					Submit
				</button>
			</form>
		</>
	);
};

export default Squares;
