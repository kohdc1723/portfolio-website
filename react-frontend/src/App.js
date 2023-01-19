import "./App.css";
import { NavBar, Skills, Education, Experience } from "./components";
import { Main, About } from "./containers";

function App() {
	return (
		<main className="bg-white px-10 md:px-20 lg:px-40">
			<NavBar />
			<Main />
			<About />
			{/* <Skills />
			<Education />
			<Experience /> */}
		</main>
	);
}

export default App;
