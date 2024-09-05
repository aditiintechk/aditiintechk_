import './App.css'
import Intro from './components/Intro.tsx'
import About from './components/About.tsx'
// import Projects from './components/Projects.tsx'

function App() {
	return (
		<main>
			<section className='fixed'>
				<Intro />
			</section>
			<section className='not-fixed'>
				<About />
			</section>
		</main>
	)
}

export default App
