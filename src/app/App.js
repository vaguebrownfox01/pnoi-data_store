import * as React from "react";
import Layout from "./components/Layout";
import MainPanel from "./pieces/MainPanel";

import { SubjectProvider } from "./state/data/SubjectContext";
const App = React.memo(function App() {
	return (
		<SubjectProvider>
			<Layout>
				<MainPanel />
			</Layout>
		</SubjectProvider>
	);
});

export default App;
