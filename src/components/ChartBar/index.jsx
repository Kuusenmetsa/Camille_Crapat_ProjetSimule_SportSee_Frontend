import { ResponsiveContainer, BarChart, Legend, CartesianGrid, XAxis, YAxis, Tooltip, Bar } from 'recharts';

import './index.scss';

export default function ChartBar({ data }) {
	const CustomToolpit = (props) => {
		const { active, payload } = props;
		if (active && payload.length > 0) {
			return (
				<div className='toolpit'>
					<p className='toolpit__text toolpit__text--kg'>{`${payload[0].value} kg`}</p>
					<p className='toolpit__text toolpit__text--kcal'>{`${payload[1].value} kcal`}</p>
				</div>
			);
		}
	};

	return (
		<div className='chartBar'>
			<span className='chartBar__title'>Activité quotidienne</span>
			<ResponsiveContainer width='100%' aspect={2.5}>
				<BarChart data={data.sessions} margin={{ top: 25, right: 30, bottom: 25, left: 40 }}>
					<CartesianGrid strokeDasharray='3 3' vertical={false} />
					<XAxis
						dataKey='day'
						axisLine={false}
						tickLine={false}
						tickFormatter={(date) => {
							return date.split('0')[4];
						}}
					/>
					<YAxis
						dataKey='kilogram'
						yAxisId='left'
						orientation='left'
						axisLine={false}
						tickLine={false}
						hide={true}
						domain={[60, 'dataMax + 5']}
					/>
					<YAxis dataKey='calories' yAxisId='right' orientation='right' axisLine={false} tickLine={false} />
					<Legend align='right' verticalAlign='top' iconSize={8} height={60} />
					<Tooltip content={<CustomToolpit />} offset={55} />
					<Bar
						dataKey='kilogram'
						yAxisId='left'
						legendType='circle'
						fill='#282D30'
						name='Poids (kg)'
						radius={[3, 3, 0, 0]}
						barSize={7}
					/>
					<Bar
						dataKey='calories'
						yAxisId='right'
						legendType='circle'
						fill='#E60000'
						name='Calories brûlées (kCal)'
						radius={[3, 3, 0, 0]}
						barSize={7}
					/>
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}
