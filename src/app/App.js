import * as React from "react";
import Layout from "./layouts/Layout";
import MainPanel from "./components/MainPanel";

const App = React.memo(function App() {
	return (
		<Layout>
			<MainPanel />
		</Layout>
	);
});

export default App;
