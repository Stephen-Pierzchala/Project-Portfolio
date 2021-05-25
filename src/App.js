import "./App.css";
import ProjectList from "./Components/ProjectList/ProjectList";
import ProjectIntro from "./Components/ProjectIntro/ProjectIntro";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import LineBreak from "./Components/LineBreak/LineBreak";

function App() {
	return (
		<div className="App">
			<Header />
			<LineBreak />
			<ProjectIntro />
			<LineBreak />
			<ProjectList />
			<LineBreak />
			<Footer />
		</div>
	);
}

export default App;
