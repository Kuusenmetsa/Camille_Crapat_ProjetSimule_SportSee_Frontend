import './index.scss';

import Icons from '../Icons';

import Bike from '../../assets/icônes/bike.svg';
import Musculation from '../../assets/icônes/musculation.svg';
import Natation from '../../assets/icônes/natation.svg';
import Yoga from '../../assets/icônes/yoga.svg';

export default function SideBar() {
	return (
		<div className='sidebar'>
			<nav>
				<ul>
					<Icons key='link-yoga' img={Yoga} alt='yoga' url='/' />
					<Icons key='link-natation' img={Natation} alt='natation' url='/' />
					<Icons key='link-bike' img={Bike} alt='vélo' url='/' />
					<Icons key='link-musculation' img={Musculation} alt='musculation' url='/' />
				</ul>
			</nav>
			<p className='sidebar__copyright'>Copiryght, SportSee 2020</p>
		</div>
	);
}
