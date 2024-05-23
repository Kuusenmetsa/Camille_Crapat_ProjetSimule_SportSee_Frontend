import './index.scss';

import Information from '../../components/Information';

import KcalIcon from '../../assets/icônes/calories-icon.svg';
import ProteinIcon from '../../assets/icônes/protein-icon.svg';
import GlucidIcon from '../../assets/icônes/carbs-icon.svg';
import LipidIcon from '../../assets/icônes/fat-icon.svg';

export default function Home() {
	return (
		<main className='home'>
			<div>
				<h2 className='home__title'>
					Bonjour, <span className='home__title--name'>Camille</span>
				</h2>
				<p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
			</div>
			<div className='home__dashboard'>
				<div className='home__dashboard__graphics'></div>
				<div className='home__dashboard__informations'>
					<Information img={KcalIcon} poids='155' unit='kCal' type='Calories' key='Calories' />
					<Information img={ProteinIcon} poids='155' unit='g' type='Proteines' key='Proteines' />
					<Information img={GlucidIcon} poids='155' unit='g' type='Glucides' key='Glucides' />
					<Information img={LipidIcon} poids='155' unit='g' type='Lipides' key='Lipides' />
				</div>
			</div>
		</main>
	);
}
