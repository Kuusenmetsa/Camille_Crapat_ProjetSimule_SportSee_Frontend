import './index.scss';

export default function Information({ img, poids, unit, type }) {
	return (
		<div className='information'>
			<img src={img} alt={`icône - ${type}`} className='information__logo' />
			<div className='information__text'>
				<div className='information__text--weight'>{`${poids}${unit}`}</div>
				<div className='information__text--type'>{type}</div>
			</div>
		</div>
	);
}
