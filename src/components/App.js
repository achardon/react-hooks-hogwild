import React, {useState} from "react";
import Nav from "./Nav";
import HogTiles from './HogTiles';
import Organization from './Organization';

import hogs from "../porkers_data";

function App() {

	const [hogTiles, setHogtiles] = useState(hogs)
    
	const [greaseFilter, setGreaseFilter] = useState(false)

	let hogsToDisplay = [...hogTiles]
	
	function onFilterGreased() {
		
		if (greaseFilter) {
			hogsToDisplay = hogsToDisplay.filter(hog => hog.greased === true)
			setHogtiles(hogsToDisplay)
		}
		else {
			setHogtiles(hogs)
		}
		//debugger;
		
	}

	return (
		<div className="App">
			<Nav />
			<Organization 
			onFilterGreased={onFilterGreased}
			greaseFilter={greaseFilter}
			setGreaseFilter={setGreaseFilter}
			/>
	
			<HogTiles 
			hogs={hogTiles}
			/>
		</div>
	);
}

export default App;
