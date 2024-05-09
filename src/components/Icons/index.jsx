import { NavLink } from 'react-router-dom';

import './index.scss';

export default function Icons({ img, alt, url }) {
	return (
		<li>
			<NavLink to={url}>
				<img src={img} alt={alt} />
			</NavLink>
		</li>
	);
}
