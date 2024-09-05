import github from '../../public/logos/github-brands-solid.svg'
import linkedin from '../../public/logos/linkedin-in-brands-solid.svg'
import x from '../../public/logos/x-twitter-brands-solid.svg'

export default function Intro() {
	return (
		<section className='intro-section'>
			<h1>Aditi Deshpande</h1>
			<h2>Front-end Developer</h2>
			<p>
				I develop websites to simplify & enhance the experiences of
				those around me.
			</p>
			<div className='social-links'>
				<a href='https://github.com/aditiintechk' target='_blank'>
					<img src={github} alt='github logo' />
				</a>
				<a
					href='https://www.linkedin.com/in/aditi-deshpande-b6966122a/'
					target='_blank'
				>
					<img src={linkedin} alt='linkedin logo' />
				</a>
				<a href='https://x.com/aditiintechk' target='_blank'>
					<img src={x} alt='x logo' />
				</a>
			</div>
		</section>
	)
}
