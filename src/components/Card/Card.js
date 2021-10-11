import "./Card.css";
const Card = ({ hero }) => {
	return (
		<div className="card">
			<div className="image">
				<img src={hero.images.sm} alt={`hero-${hero.name}`} />
			</div>
			<div>
				<h3>{hero.name}</h3>
				<p> Full name: {hero.biography.fullName} </p>
				<p>Race: {hero.appearance.race} </p>
				<p> Alignment: {hero.biography.alignment} </p>
				<p>Publisher: {hero.biography.publisher} </p>
			</div>
		</div>
	);
};

export default Card;
