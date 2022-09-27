import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	TextField,
} from "@mui/material";
import { lightBlue, yellow } from "@mui/material/colors";
import * as React from "react";

const classes = {
	textField: function s(t) {
		return {
			margin: t.spacing(0, 2, 2, 0),
			width: `${100 - this.i * 7}%`,
			input: {
				color: yellow[100],
			},
		};
	},
	field: {
		size: "medium",
		variant: "standard",
	},
	selectMenu: {
		maxWidth: 256,
		root: {
			color: lightBlue[100],
		},
	},
};

const BioField = React.memo(function BioField({
	i,
	fieldInfo,
	fieldValue,
	inputHandle,
}) {
	return fieldInfo.type !== "menu" ? (
		<TextField
			sx={classes.textField.bind({ i })}
			id={fieldInfo.id}
			label={fieldInfo.label}
			type={fieldInfo.type}
			value={fieldValue[fieldInfo.field] || ""}
			onChange={inputHandle.bind({
				field: fieldInfo.field,
			})}
			{...classes.field}
			autoComplete="off"
		/>
	) : (
		<FormControl
			sx={{ mt: 2, mb: 2 }}
			key={`${fieldInfo.id}-${i}`}
			fullWidth
		>
			<InputLabel id={`${fieldInfo.id}-label`}>
				{fieldInfo.label}
			</InputLabel>
			<Select
				sx={classes.selectMenu}
				labelId={`${fieldInfo.id}-label`}
				id={`${fieldInfo.id}-select-helper`}
				value={fieldValue[fieldInfo.field] || ""}
				label={`${fieldInfo.label}`}
				onChange={inputHandle.bind({
					field: fieldInfo.field,
				})}
				{...classes.field}
			>
				{fieldInfo.menuItems.map((g, i) => (
					<MenuItem
						key={`${g.value}+${i}`}
						value={`${g.value}`}
					>{`${g.label}`}</MenuItem>
				))}
			</Select>
		</FormControl>
	);
});

export default BioField;
