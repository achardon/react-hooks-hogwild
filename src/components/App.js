import React, {useState} from "react";
import Nav from "./Nav";
import HogTiles from './HogTiles';
import Organization from './Organization';

import hogs from "../porkers_data";

function App() {

	const hogTiles = hogs
	const [greaseFilter, setGreaseFilter] = useState(false)
	const [sortByName, setSortByName] = useState(false)
	const [sortByWeight, setSortByWeight] = useState(false)
	const [hiddenPigs, setHiddenPigs] = useState([])

	
	function onFilterGreased() {
		setGreaseFilter(!greaseFilter)
		if (greaseFilter === true) {
			setHiddenPigs([])
		}
	}

	function onSortByName() {
		setSortByName(!sortByName)
		if (sortByWeight === true) {
			setSortByWeight(false)
		}
	}

	function onSortByWeight() {
		setSortByWeight(!sortByWeight)
		if (sortByName === true) {
			setSortByName(false)
		}
	}

	let hogsToDisplay = hogTiles.filter((hog) => {
		if (!greaseFilter) return true;

		return hog.greased === true;
	})
	//debugger
	if (sortByName) {
		hogsToDisplay = hogsToDisplay.sort((nextHog, currentHog) => {
			return nextHog.name.localeCompare(currentHog.name);
		})
	}

	if (sortByWeight) {
		hogsToDisplay = hogsToDisplay.sort((nextHog, currentHog) => {
			return nextHog.weight - currentHog.weight;
		})
	}
	
	return (
		<div className="App">
			<Nav />
			<Organization 
			onFilterGreased={onFilterGreased}
			greaseFilter={greaseFilter}
			onSortByName={onSortByName}
			sortByName={sortByName}
			onSortByWeight={onSortByWeight}
			sortByWeight={sortByWeight}
			/>
	
			<HogTiles 
			hogs={hogsToDisplay}
			hiddenPigs={hiddenPigs}
			setHiddenPigs={setHiddenPigs}
			/>
		</div>
	);
}

export default App;
