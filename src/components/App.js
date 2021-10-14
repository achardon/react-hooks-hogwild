import React, {useState} from "react";
import Nav from "./Nav";
import HogTiles from './HogTiles';
import Organization from './Organization';

import hogs from "../porkers_data";

function App() {

	const [hogTiles, setHogtiles] = useState(hogs)
	const [greaseFilter, setGreaseFilter] = useState(false)
	const [sortByName, setSortByName] = useState(false)
	
	function onFilterGreased() {
		setGreaseFilter(!greaseFilter)
	}

	function onSortByName() {
		setSortByName(!sortByName)
	}

	let hogsToDisplay = hogTiles.filter((hog) => {
		if (!greaseFilter) return true;

		return hog.greased === true;
	})
	debugger
	if (sortByName) {
		console.log('sortbyname')
		hogsToDisplay.sort()
	}

	// hogsToDisplay = hogTiles.sort()
	//NEED TO SORT BY 'NAME' KEY
	
	return (
		<div className="App">
			<Nav />
			<Organization 
			onFilterGreased={onFilterGreased}
			greaseFilter={greaseFilter}
			onSortByName={onSortByName}
			/>
	
			<HogTiles 
			hogs={hogsToDisplay}
			/>
		</div>
	);
}

export default App;
