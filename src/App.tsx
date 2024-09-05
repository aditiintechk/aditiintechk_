import './App.css'
import Intro from './components/Intro.tsx'
import About from './components/About.tsx'
// import Skills from './components/Skills.tsx'
import Projects from './components/Projects.tsx'

function App() {
	return (
		<main>
			<section className='fixed'>
				<Intro />
			</section>
			<section className='not-fixed'>
				<About />
				{/* <Skills /> */}
				<Projects />
			</section>
		</main>
	)
}

export default App
