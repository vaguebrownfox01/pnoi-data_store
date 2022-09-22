import * as React from "react";
import { appSectionsInfo } from "../appconfig/sections";

const useAppSections = () => {
	function propChild(child, props) {
		return React.isValidElement(child) ? (
			React.cloneElement(child, {
				...props,
			})
		) : (
			<></>
		);
	}

	const sections = React.useMemo(
		() =>
			appSectionsInfo.map((d) => ({
				...d,
				component: propChild(d.component, d),
			})),
		[]
	);

	return [sections];
};

export default useAppSections;
