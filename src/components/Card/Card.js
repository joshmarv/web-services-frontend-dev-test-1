import { useState } from "react";
import "./Card.css";
const Card = ({ hero }) => {
	const [toggleCard, setToggleCard] = useState(false);
	const handleToggleCard = () => {
		setToggleCard(!toggleCard);
	};
	return (
		<div className="card card-expanded">
			<div className="expand-icon" onClick={handleToggleCard}>
				+
			</div>
			<div className="image">
				<img src={hero.images.sm} alt={`hero-${hero.name}`} />
			</div>
			<div>
				<div>
					<h3>{hero.name}</h3>
					<p> Full name: {hero.biography.fullName} </p>
					<p>Race: {hero.appearance.race} </p>
					<p> Alignment: {hero.biography.alignment} </p>
					<p>Publisher: {hero.biography.publisher} </p>
				</div>
				<div className=""></div>
			</div>
		</div>
	);
};

export default Card;
