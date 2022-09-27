import * as React from "react";

import {
	SUBJECT_AGE,
	SUBJECT_ID,
	SUBJECT_NAME,
	SUBJECT_TYPE,
} from "../appconfig/metadata";
import { SUB_STORE_KEY_BIODATA, initSubject } from "../appconfig/sections";

const useSelect = (listItems, currentItem, onSelect) => {
	const [list, setList] = React.useState([]);
	const [selected, setSelected] = React.useState({});

	const handleSelect = (index) => {
		const info = index > -1 ? listItems[index] : initSubject;
		onSelect(info);
	};

	React.useEffect(() => {
		if (currentItem) {
			const { [SUB_STORE_KEY_BIODATA]: info } = currentItem;
			setSelected({
				id: info[SUBJECT_ID],
				name: info[SUBJECT_NAME],
				age: info[SUBJECT_AGE],
				type: info[SUBJECT_TYPE],
			});
		}
	}, [currentItem]);

	React.useEffect(() => {
		if (listItems) {
			const l = listItems.map((s, i) => {
				const { [SUB_STORE_KEY_BIODATA]: info } = s;
				return {
					index: i,
					id: info[SUBJECT_ID],
					name: info[SUBJECT_NAME],
					age: info[SUBJECT_AGE],
					type: info[SUBJECT_TYPE],
				};
			});
			setList(l);
		}
	}, [listItems]);

	return [list, selected, handleSelect];
};

export default useSelect;
