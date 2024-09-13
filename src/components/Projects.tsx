import data from '../data/projects.tsx'

export default function Projects() {
	const projects = data.map((project) => {
		return (
			<a href={project.link} target='_blank'>
				{' '}
				<div className='project'>
					<h4 className='title'>
						{project.name} <span>↗️</span>
					</h4>
					<h4 className='sub-title'>{project.subTitle}</h4>
					<p>{project.description}</p>
					<div className='links'>
						<a
							href={
								project.repo === 'Private' ? '' : project.repo
							}
							target='_blank'
						>
							{project.repo === 'Private' ? 'Private' : 'Code'}
						</a>
						<a href={project.link} target='_blank'>
							{project.repo === 'Private' ? 'Demo' : 'Link'}
						</a>
					</div>

					<div className='keywords'>
						{project.keywords.map((keyword) => {
							return <span className='keyword'>{keyword}</span>
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
