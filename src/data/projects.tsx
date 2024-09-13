interface Project {
	id: number
	name: string
	subTitle: string
	description: string
	repo: string
	link: string
	keywords: string[]
	image: string
}

const data: Project[] = [
	{
		id: 1,
		name: 'OboeSūji',
		subTitle: 'Japanese Numbers Reciting App',
		description:
			'Sūji o oboeru (数字を覚える) translates to "memorize numbers" in Japanese, and this app is designed to do just that! The app presents you with numbers on the screen, challenging you to recall their readings in romaji, kanji, and hiragana. The answers are hidden at first, but you can reveal them if you\'re unsure or want to check your answer.',
		repo: 'https://github.com/aditiintechk/oboe-suji',
		link: 'https://oboesuji.netlify.app/',
		keywords: [
			'Solo',
			'React with Typescript',
			'Tailwind CSS',
			'Vite',
			'Learning App',
		],
		image: '',
	},
	{
		id: 2,
		name: 'Meteoros',
		subTitle: 'Meteroite Explorer (NASA API)',
		description:
			"Meteoros is an interactive web app for space enthusiasts to explore meteor showers. It uses NASA's API to provide real-time data on over a thousand meteor showers, with filtering options to focus on specific events. The app also offers chart-based visualizations summarizing meteor strikes per year and by composition.This project is an initiative by Chingu (https://www.chingu.io/)",
		repo: 'https://github.com/chingu-voyages/v45-tier2-team-17',
		link: 'https://meteoros.vercel.app/',
		keywords: [
			'Collaboration',
			'React with Typescript',
			'SCSS',
			'Vite',
			'Chingu Project',
			'API',
		],
		image: '',
	},
	{
		id: 3,
		name: 'Restimer',
		subTitle: 'Accurate Break Scheduler',
		description:
			'Restimer is a productivity-enhancing application designed to help customer service agents effortlessly manage their work and break schedules, ensuring they stay on track with their daily responsibilities. With Restimer, you can bid farewell to the manual adjustments of phone alarms and countdown timers.',
		repo: 'Private',
		link: 'https://github.com/aditiintechk/restimer-demo',
		keywords: [
			'Pair Programming',
			'HTML',
			'CSS',
			'JavaScript',
			'Flask',
			'My SQL',
			'Full Stack Application',
			'possible SAAS',
		],
		image: '',
	},
	{
		id: 4,
		name: 'Milk Meter',
		subTitle: 'Milk Amount tracking app for my Aunt',
		description:
			'Milk Meter is a simple Progressive Web App (PWA) designed to track and manage the daily milk consumption for a joint family of 10 people. The app provides an intuitive way for each nuclear family in the joint household to monitor and adjust their milk requirements. It also simplifies the monthly calculation of milk consumption to streamline payment collection for my aunt post payment to the vendor.',
		repo: 'https://github.com/aditiintechk/milk-meter',
		link: 'https://aditiintechk.github.io/milk-meter/',
		keywords: ['Solo', 'HTML', 'CSS', 'Typescript', 'PWA', 'FullCalendar'],
		image: '',
	},
]

export default data
