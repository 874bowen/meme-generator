import React, { useEffect, useState } from "react";
import { memesData } from "../memesData";

const Memes = () => {
   type MemesArray = {
      id: string,
      name: string,
      url: string,
      width: number,
      height: number,
      box_count: number
   }

	const [allMemes, setAllMemes] = useState<MemesArray []>([]);

	const [meme, setMeme] = useState({
		topText: "",
		bottomText: "",
		randomImage: "",
	});

	function getRandomImage() {
		let randomIndex = Math.floor(Math.random() * allMemes.length);
		console.log(allMemes[randomIndex]);
		setMeme((prevMeme) => ({
			...prevMeme,
			randomImage: `${allMemes[randomIndex].url}`,
		}));
	}

	function handleOnChange(e: any) {
		let { name, value } = e.target;
		setMeme((prevMeme) => ({
			...prevMeme,
			[name]: value,
		}));
	}

	useEffect(() => {
		fetch("https://api.imgflip.com/get_memes")
			.then((res) => res.json())
			.then(({ data }) => setAllMemes(data.memes));
	}, []);

	console.log(allMemes);

	return (
		<section className="form__div">
			<div className="form">
				<div className="form__input-div">
					<input
						type="text"
						name="topText"
						id="topText"
						placeholder="Shut up"
						value={meme.topText}
						onChange={handleOnChange}
					/>
					<input
						type="text"
						name="bottomText"
						id="bottomText"
						placeholder="and take my money"
						value={meme.bottomText}
						onChange={handleOnChange}
					/>
				</div>
				<button onClick={getRandomImage}>
					<h4>Get a new meme image</h4>
				</button>
				<div className="form__image-div">
					<img src={meme.randomImage} className="form__meme-image" alt="" />
					<div className="form__top-text form__meme--text">{meme.topText}</div>
					<div className="form__bottom-text form__meme--text">
						{meme.bottomText}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Memes;
