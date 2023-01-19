import * as React from "react";
import { appSectionsInfo } from "../appconfig/sections";

const useAppSections = () => {
	// States
	const [sectionStatus, setSectionStatus] = React.useState();
	const [subjectStatus, setSubjectStatus] = React.useState({});

	function handleSetSectionState(sectionKey, isDone) {
		setSectionStatus((p) => ({ ...p, [sectionKey]: isDone }));
	}

	function handleSetSubjectState(subjectInfo) {
		setSubjectStatus(subjectInfo);
	}

	// Helpers
	const propChild = React.useCallback((child, props) => {
		return React.isValidElement(child) ? (
			React.cloneElement(child, {
				...props,
				setSectionState: handleSetSectionState,
				setSubjectStatus: handleSetSubjectState,
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
			(prv, cur) => ({ ...prv, [cur["sectionKey"]]: false }),
			{}
		);
		setSectionStatus(sectionStates);
	}, []);

	return [sections, sectionStatus, subjectStatus];
};

export default useAppSections;
