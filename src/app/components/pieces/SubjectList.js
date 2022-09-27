import SubjectIcon from "@mui/icons-material/AccountCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Box, ListItemIcon } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import useSelect from "../../hooks/useSelect";

const SubjectList = React.memo(function SubjectList({
	list: listItems,
	currentItem,
	onSelect,
}) {
	const [list, selected, handleSelect] = useSelect(
		listItems,
		currentItem,
		onSelect
	);

	function handleSubjectSelectFromList() {
		handleSelect(this.itemIndex);
	}

	return (
		<>
			<Box
				sx={{
					mb: 4,
					maxHeight: 200,
					overflow: "auto",
				}}
			>
				<List aria-label="contacts">
					<ListItem disablePadding>
						<ListItemButton
							selected={selected.id === ""}
							onClick={handleSubjectSelectFromList.bind({
								itemIndex: -1,
							})}
						>
							<ListItemIcon>
								<AddCircleIcon color="secondary" />
							</ListItemIcon>
							<ListItemText secondary={"Add New Subject"} />
						</ListItemButton>
					</ListItem>
					{list.map((info) => {
						return (
							<ListItem key={info.id} disablePadding>
								<ListItemButton
									selected={selected.id === info.id}
									onClick={handleSubjectSelectFromList.bind({
										itemIndex: info.index,
									})}
								>
									<ListItemIcon>
										<SubjectIcon color="primary" />
									</ListItemIcon>
									<ListItemText
										primary={`${info.name}, ${info.age}y`}
									/>
								</ListItemButton>
							</ListItem>
						);
					})}
				</List>
			</Box>
		</>
	);
});

export default SubjectList;
