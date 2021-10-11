import { useState } from "react";
import "./Card.css";
const Card = ({ hero }) => {
	const [toggleCard, setToggleCard] = useState(false);
	const handleToggleCard = () => {
		setToggleCard(!toggleCard);
	};
	return (
		<div className={toggleCard ? "card card-expanded" : "card"}>
			<div className="expand-icon" onClick={handleToggleCard}>
				+
			</div>
			<div className="image">
				<img src={hero.images.md} alt={`hero-${hero.name}`} />
			</div>
			<div className="hero-details">
				<div>
					<h3>{hero.name}</h3>
					<p> Full name: {hero.biography.fullName} </p>
					<p>Race: {hero.appearance.race} </p>
					<p> Alignment: {hero.biography.alignment} </p>
					<p>Publisher: {hero.biography.publisher} </p>
				</div>
				{/* {toggleCard && ( */}
				<div className={toggleCard ? "powers-active" : "powers"}>
					<h3>Powers</h3>
					{Object.keys(hero.powerstats).map((power) => {
						return (
							<p key={hero.id}>
								{power} : {hero.powerstats[`${power}`]}
							</p>
						);
					})}
				</div>
				{/* // )} */}
			</div>
		</div>
	);
};

export default Card;
