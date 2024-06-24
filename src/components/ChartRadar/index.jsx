import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from 'recharts';

import './index.scss';

export default function ChartRadar({ data }) {
	const kind = data.kind;
	const dataFormat = data.performances.map((el, index) => ({ ...el, kind: kind[index + 1] }));
	return (
		<div className='chartRadar'>
			<ResponsiveContainer width='100%' aspect={1}>
				<RadarChart data={dataFormat} outerRadius='65%'>
					<PolarGrid radialLines={false} />
					<PolarAngleAxis style={{ fontSize: '0.7vw' }} stroke='#FFFFFF' tickLine={false} dataKey='kind' />
					<Radar dataKey='value' stroke='#FF0101B2' fill='#FF0101B2' fillOpacity={0.7} />
				</RadarChart>
			</ResponsiveContainer>
		</div>
	);
}
