import './index.scss';

export default function Home() {
	return (
		<main className='home'>
			<div>
				<h2 className='home__title'>
					Bonjour, <span className='home__title--name'>Camille</span>
				</h2>
				<p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
			</div>
		</main>
	);
}
