export default function Skills() {
	const skills = [
		'HTML',
		'CSS',
		'JAVASCRIPT',
		'REACT',
		'TYPESCRIPT',
		'TAILWIND',
		'SCSS',
		'FIGMA',
		'GIT',
		'GITHUB',
		'API',
		'FIREBASE',
		'MY SQL',
		'ALGOLIA SEARCH',
		'REACT ROUTER',
		'PYTHON',
		'FLASK',
		'PWA',
		'NEXT JS',
	]

	const skillSet = skills.map((skill) => {
		return (
			<span className='skill' key={skill}>
				{skill}
			</span>
		)
	})
	return (
		<section className='skill-section'>
			<h3>SKILLS</h3>
			<div>{skillSet}</div>
		</section>
	)
}
