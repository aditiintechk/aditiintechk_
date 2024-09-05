import data from '../data/projects.tsx'

export default function Projects() {
	const projects = data.map((project) => {
		return (
			<a href={project.link} target='_blank'>
				{' '}
				<div className='project'>
					<h4>{project.name} ↗️</h4>
					<h4>{project.subTitle}</h4>
					<p>{project.description}</p>
					<div className='links'>
						<a
							href={
								project.repo === 'Private' ? '' : project.repo
							}
						>
							{project.repo === 'Private' ? 'Private' : 'Code'}
						</a>
						<a href={project.link}>Link</a>
					</div>

					<div className='keywords'>
						{project.keywords.map((keyword) => {
							return (
								<span className='skill keyword'>{keyword}</span>
							)
						})}
					</div>
				</div>
			</a>
		)
	})
	return (
		<section className='project-section'>
			<h3>PROJECTS</h3>
			{projects}
		</section>
	)
}
