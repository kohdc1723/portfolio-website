import "./App.css";
import { NavBar } from "./components";
import { Main, About, Projects } from "./containers";

function App() {
	return (
		<div className="bg-slate-100 px-10 md:px-20 lg:px-44">
			<NavBar />
			<Main />
			<About />
			<Projects />
		</div>
	);
}

export default App;