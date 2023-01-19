import "./App.css";
import { NavBar, Skills, Education, Experience } from "./components";
import { Main, About, Projects } from "./containers";

function App() {
	return (
		<main className="bg-white px-10 md:px-20 lg:px-44">
			<NavBar />
			<Main />
			<About />
			<Projects />
		</main>
	);
}

export default App;
