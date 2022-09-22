import * as React from "react";
import { appSectionsInfo } from "../appconfig/sections";

const useAppSections = () => {
	// Helpers
	function propChild(child, props) {
		return React.isValidElement(child) ? (
			React.cloneElement(child, {
				...props,
			})
		) : (
			<></>
		);
	}

	// Constants
	const sections = React.useMemo(
		() =>
			appSectionsInfo.map((d) => ({
				...d,
				component: propChild(d.component, d),
			})),
		[]
	);

	// const [sectionStatus, setSectionStatus] = React.useState()

	return [sections];
};

export default useAppSections;
