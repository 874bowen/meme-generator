import React, { useState } from "react";
import Box from "./Box";

const Squares = (props) => {
	let [formData, setFormData] = useState({
		comment: "",
		range: "10",
		email: "",
		isFriendly: true,
		employed: "",
		favColor: ""
	})

	function handleChange(e: any) {
		// let [type, name, value, checked] = e.target;
		let {name, type, checked, value} = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: type === "checked" ? checked : value
		}))
	}

	function handleSubmit(e: any) {
		e.preventDefault();
		// alert(`${formData.email} gave us a ${formData.range} star rating and commented: "${formData.comment}"`);
		alert(JSON.stringify(formData))
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
				<hr />
				{/* <label htmlFor="isFriendly">Are you friendly</label> */}
				<input type="checkbox" name="isFriendly" id="isFriendly" checked={formData.isFriendly} onChange={handleChange} />
				<hr />
				<fieldset>
					<legend>Are you employed</legend>
					<input type="radio" name="employed" id="" value="employed" onChange={handleChange} /> Employed
					<input type="radio" name="employed" id="" value="not employed" onChange={handleChange} /> Not employed
					<input type="radio" name="employed" id="" value="still student" onChange={handleChange} /> Student
				</fieldset>
				<select name="favColor" id="" onChange={handleChange}>
					<option value="">-- choose color --</option>
					<option value="red">Red</option>
					<option value="pink">Pink</option>
					<option value="blue">Blue</option>
					<option value="navy">Navy</option>
					<option value="cream">Cream</option>
					<option value="purple">Purple</option>
				</select>
				<button disabled={formData.comment.length < 15 ? true : false} type="submit">
					Submit
				</button>
			</form>
		</>
	);
};

export default Squares;
