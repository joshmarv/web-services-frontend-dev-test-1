import React, { useEffect, useState } from "react";
import "./SearchBar.css";

function SearchBar(props) {
	const [search, setSearch] = useState("");

	const handleChange = (e) => {
		setSearch(e.target.value);
	};
	useEffect(() => {}, [search]);
	return (
		<div className="search-bar">
			<input
				onChange={(e) => handleChange(e)}
				placeholder="Search by Name"
				type="text"
			/>
		</div>
	);
}

export default SearchBar;
