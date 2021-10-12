import { useEffect, useState } from "react";
import "./ListView.css";
import Card from "../../components/Card/Card";
import SearchBar from "../../components/SearchBar/SearchBar";
// import { fetchHeroes } from "../../utils.js/request";

const ListView = () => {
	const [data, setData] = useState([]);
	const [render, setRender] = useState([]);
	const [query, setQuery] = useState("");
	const [tags, setTags] = useState({});
	const [tagQuery, setTagQuery] = useState("");
	const [tagList, setTagList] = useState([]);

	const getTags = () => {
		let tagList = [];
		Object.values(tags).forEach((tag) => {
			tag.forEach((tagItem) => {
				tagList.append(tagItem.toLowerCase());
			});
		});
		const tagListSet = [...new Set(tagList)];

		return tagListSet;
	};
	useEffect(() => {
		const getTags = () => {
			let tagList = [];
			Object.values(tags).forEach((tag) => {
				tag.forEach((tagItem) => {
					tagList.append(tagItem.toLowerCase());
				});
			});
			const tagListSet = [...new Set(tagList)];

			return tagListSet;
		};
		const tagList = getTags();
		setTagList(tagList);
	}, [tags]);

	useEffect(() => {
		const filterTags = () => {
			var PATTERN = tagQuery.toLowerCase();

			let keys = [];
			// Object.values(tags).map(tag => {

			// })
			Object.entries(tags).forEach(([key, value]) => {
				value.forEach((tagItem) => {
					if (tagItem.indexOf(PATTERN) > -1) {
						keys.push(key);
						// break;
					}
				});
			});
			console.log(keys);

			const tagIds = [...new Set(keys)];
			const filtered = data.filter((word) => !tagIds.includes(word.id));
			setRender(filtered);
		};

		filterTags();
	}, [tagQuery, data, tags]);
	console.log("tagQuery", tagQuery);
	console.log(tags);
	// filter heroes by search
	useEffect(() => {
		const findHero = () => {
			var PATTERN = query.toLowerCase();
			const filtered = data.filter(
				(word) => word.name.toLowerCase().indexOf(PATTERN) > -1
			);
			setRender(filtered);
		};

		if (query !== 0) {
			findHero();
		}
	}, [query, data]);
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
					setData(data);
					setRender(data);
				});
		};
		fetchData();
	}, []);
	console.log(data);
	return (
		<div className="list-view">
			<SearchBar query={query} setQuery={setQuery} />
			{Object.keys(tags).length !== 0 && (
				<div className="tags">
					{tagList.map((name) => {
						return (
							<span
								onClick={() => setTagQuery(name)}
								className="tag"
							>
								{name}
							</span>
						);
					})}
				</div>
			)}
			{render.map((item) => {
				return (
					<Card
						key={item.id}
						hero={item}
						tags={tags}
						setTags={setTags}
					/>
				);
			})}
		</div>
	);
};

export default ListView;
