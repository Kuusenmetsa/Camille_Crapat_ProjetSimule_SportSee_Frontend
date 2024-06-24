import { ResponsiveContainer, LineChart, XAxis, YAxis, Tooltip, Line } from 'recharts';

import './index.scss';

export default function ChartLine({ data }) {
	const CustomToolpit = (props) => {
		const { active, payload } = props;
		if (active && payload.length > 0) {
			return (
				<div className='chartLine__toolpit'>
					<p className='chartLine__toolpit__text toolpit__text--kg'>{`${payload[0].value} min`}</p>
				</div>
			);
		}
	};

	return (
		<div className='chartLine'>
			<span className='chartLine__title'>Durée moyenne des sessions</span>
			<ResponsiveContainer width='100%' aspect={1}>
				<LineChart data={data.averages} margin={{ top: 15, right: 15, bottom: 15, left: 15 }}>
					<defs>
						<linearGradient id='gradient'>
							<stop offset='0%' stopColor='#fff' stopOpacity={0.4} />
							<stop offset='100%' stopColor='#fff' stopOpacity={1} />
						</linearGradient>
					</defs>
					<XAxis
						dataKey='day'
						axisLine={false}
						tickLine={false}
						tickFormatter={(day) => {
							const dayOfWeek = {
								1: 'L',
								2: 'M',
								3: 'M',
								4: 'J',
								5: 'V',
								6: 'S',
								7: 'D',
							};
							return dayOfWeek[day];
						}}
						stroke='#fff'
						style={{ opacity: 0.5, fontSize: '0.83vw' }}
					/>
					<YAxis
						dataKey='sessionLength'
						yAxisId='right'
						orientation='right'
						axisLine={false}
						tickLine={false}
						hide={true}
						domain={['dataMin - 5', 'dataMax + 15']}
					/>
					<Tooltip content={<CustomToolpit />} cursor={false} />
					<Line
						type='natural'
						dot={false}
						dataKey='sessionLength'
						yAxisId='right'
						stroke='url(#gradient)'
						strockeWidth={2}
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
}
