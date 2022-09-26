import SubjectIcon from "@mui/icons-material/AccountCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Box, ListItemIcon } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import {
	SUBJECT_AGE,
	SUBJECT_ID,
	SUBJECT_NAME,
} from "../../appconfig/metadata";
import { initSubject, SUB_STORE_KEY_BIODATA } from "../../appconfig/sections";

const SubjectList = React.memo(function SubjectList({
	list,
	currentItem,
	onSelect,
}) {
	function handleSubjectSelectFromList() {
		const info = this.subjectInfo;

		onSelect(info);
	}

	return (
		<>
			{list?.length > 0 && (
				<Box
					sx={{
						mb: 4,
						maxHeight: 256,
						overflow: "auto",
					}}
				>
					<List aria-label="contacts">
						<ListItem disablePadding>
							<ListItemButton
								selected={currentItem[SUBJECT_ID] === ""}
								onClick={handleSubjectSelectFromList.bind({
									subjectInfo: initSubject,
								})}
							>
								<ListItemIcon>
									<AddCircleIcon color="secondary" />
								</ListItemIcon>
								<ListItemText secondary={"Add New Subject"} />
							</ListItemButton>
						</ListItem>
						{list.map((subInfo) => {
							const {
								[SUBJECT_ID]: subId,
								[SUB_STORE_KEY_BIODATA]: info,
							} = subInfo;

							return (
								<ListItem key={subId} disablePadding>
									<ListItemButton
										selected={
											currentItem[SUBJECT_ID] === subId
										}
										onClick={handleSubjectSelectFromList.bind(
											{
												subjectInfo: subInfo,
											}
										)}
									>
										<ListItemIcon>
											<SubjectIcon />
										</ListItemIcon>
										<ListItemText
											primary={`${info[SUBJECT_NAME]}, ${info[SUBJECT_AGE]}y`}
										/>
									</ListItemButton>
								</ListItem>
							);
						})}
					</List>
				</Box>
			)}
		</>
	);
});

export default SubjectList;
