import './index.scss';

import Logo from '../../assets/images/logo.svg';

import Link from '../Link/index.jsx';

export default function Header() {
	return (
		<header>
			<img src={Logo} alt='logo de sportsee' className='logo' />
			<nav>
				<ul>
					<Link key='link-accueil' text='Accueil' url='/' />
					<Link key='link-profil' text='Profil' url='/' />
					<Link key='link-réglage' text='Réglages' url='/' />
					<Link key='link-communauté' text='Communauté' url='/' />
				</ul>
			</nav>
		</header>
	);
}
