import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './index.scss';

export default function Home() {
	const navigate = useNavigate();
	useEffect(() => {
		navigate('/user/12');
	}, [navigate]);
}
