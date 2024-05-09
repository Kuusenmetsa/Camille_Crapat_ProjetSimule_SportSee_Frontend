import { NavLink } from 'react-router-dom';

import './index.scss';

export default function Link({ text, url }) {
	return (
		<li>
			<NavLink to={url}>{text}</NavLink>
		</li>
	);
}
