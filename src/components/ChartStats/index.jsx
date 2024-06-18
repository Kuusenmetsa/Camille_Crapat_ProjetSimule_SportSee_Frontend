import { ResponsiveContainer, RadialBarChart, RadialBar, Cell } from 'recharts';

import './index.scss';

export default function ChartStats({ data }) {
	const score = [
		{
			type: 'max',
			value: 1,
		},
		{
			type: 'start',
			value: !data.todayScore ? data.score : data.todayScore,
		},
	];
	const background = ['#FFFFFF', '#E60000'];

	return (
		<div className='chartStats'>
			<ResponsiveContainer width='100%' aspect={1}>
				<span className='chartStats__title'>Score</span>
				<div className='chartStats__obj'>
					<p className='chartStats__obj--percent'>{score[1].value * 100 + '%'}</p>
					<p className='chartStats__obj--text'>de votre</p>
					<p className='chartStats__obj--text'>objectif</p>
				</div>
				<RadialBarChart data={score} innerRadius='53%' outerRadius='72%' startAngle={210} endAngle={-150}>
					<RadialBar dataKey='value' cornerRadius={10}>
						{score.map((entry, index) => (
							<Cell key={`cell-${index}`} fill={background[index % background.length]} />
						))}
					</RadialBar>
				</RadialBarChart>
			</ResponsiveContainer>
		</div>
	);
}
