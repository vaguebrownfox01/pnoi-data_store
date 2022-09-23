import * as React from "react";
import { appSectionsInfo } from "../appconfig/sections";

const useAppSections = () => {
	// States
	const [sectionStatus, setSectionStatus] = React.useState();

	function handleSetSectionState(sectionKey, isDone) {
		setSectionStatus((p) => ({ ...p, [sectionKey]: isDone }));
	}

	// Helpers
	const propChild = React.useCallback((child, props) => {
		return React.isValidElement(child) ? (
			React.cloneElement(child, {
				...props,
				setSectionState: handleSetSectionState,
			})
		) : (
			<></>
		);
	}, []);

	// Constants
	const sections = React.useMemo(() => {
		return appSectionsInfo.map((d) => ({
			...d,
			component: propChild(d.component, d),
		}));
	}, [propChild]);

	React.useEffect(() => {
		const sectionStates = sections.reduce(
			(prv, cur) => ({ ...prv, [cur["key"]]: false }),
			{}
		);
		setSectionStatus(sectionStates);
	}, [sections]);

	return [sections, sectionStatus];
};

export default useAppSections;
