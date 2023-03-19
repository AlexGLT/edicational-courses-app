import {Typography} from '@mui/material';

import './list.scss';


type Props = {
	caption?: string,
	items: string[],
};

export const List = ({caption, items}: Props) => {
	return (
		<div className="list">
			{caption && <Typography className="list__caption" noWrap={true}>{caption}:</Typography>}
			<ul>
				{items.map((item) => <li key={item} className="list__item">{item}</li>)}
			</ul>
		</div>
	);
};
