import React, {useState} from "react";
import Nav from "./Nav";
import HogTiles from './HogTiles';
import Organization from './Organization';

import hogs from "../porkers_data";

function App() {

	const [hogTiles, setHogtiles] = useState(hogs)
    
	const [greaseFilter, setGreaseFilter] = useState(false)
	
	function onFilterGreased() {
		setGreaseFilter(!greaseFilter)
		//debugger;
	}

	const hogsToDisplay = hogTiles.filter((hog) => {
		if (!greaseFilter) return true;

		return hog.greased === true;
	})

	return (
		<div className="App">
			<Nav />
			<Organization 
			onFilterGreased={onFilterGreased}
			greaseFilter={greaseFilter}
			setGreaseFilter={setGreaseFilter}
			/>
	
			<HogTiles 
			hogs={hogsToDisplay}
			/>
		</div>
	);
}

export default App;
