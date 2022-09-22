import React from "react";

const useContainerDimensions = (containerRef, effect) => {
	// States
	const [dimensions, setDimensions] = React.useState({ width: 0, height: 0 });

	// Effect
	React.useEffect(() => {
		const getDimensions = () => ({
			width: containerRef.current.offsetWidth,
			height: containerRef.current.offsetHeight,
		});
		const handleResize = () => {
			setDimensions(getDimensions());
		};

		if (containerRef.current) {
			setDimensions(getDimensions());
		}

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [containerRef, effect]);

	React.useDebugValue("Viz Dimensions");

	return dimensions;
};

export default useContainerDimensions;
