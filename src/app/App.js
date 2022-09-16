import * as React from "react";
import Layout from "./components/Layout";
import MainPanel from "./pieces/MainPanel";

const App = React.memo(function App() {
	return (
		<Layout>
			<MainPanel />
		</Layout>
	);
});

export default App;
