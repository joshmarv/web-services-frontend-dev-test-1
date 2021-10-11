import { useEffect, useState } from "react";
import "./ListView.css";
import Card from "../../components/Card/Card";
import SearchBar from "../../components/SearchBar/SearchBar";
// import { fetchHeroes } from "../../utils.js/request";

const ListView = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			// const res = await fetchHeroes();
			// // console.log(res);
			// setData(res);

			fetch(
				"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json"
			)
				.then((response) => response.json())
				.then((data) => {
					console.log(data);
					setData(data);
				});
		};
		fetchData();
	}, []);
	console.log(data);
	return (
		<div className="list-view">
			<SearchBar />
			{data.map((item) => {
				return <Card key={item.id} hero={item} />;
			})}
		</div>
	);
};

export default ListView;
