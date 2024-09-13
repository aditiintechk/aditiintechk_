export default function Skills() {
	const skills = [
		'HTML',
		'CSS',
		'JavaScript',
		'React.js',
		'TypeScript',
		'TailwindCSS',
		'SCSS',
		'Figma',
		'Git (Version Control)',
		'Github',
		'Firebase',
		'MYSQL',
		'React Router 6',
		'Python',
		'Flask',
		'Progressive Web App (PWA)',
		'Next.js',
	]

	const skillSet = skills.map((skill) => {
		return <span key={skill}>{skill}</span>
	})
	return (
		<section className='skill-section'>
			<h3>SKILLS</h3>
			<div>{skillSet}</div>
		</section>
	)
}
