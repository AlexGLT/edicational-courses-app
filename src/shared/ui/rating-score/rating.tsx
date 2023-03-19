import {Typography} from '@mui/material';
import {StarRounded, StarHalfRounded, StarOutlineRounded} from '@mui/icons-material';
import {clsx} from 'clsx';

import './rating.scss';

import type {ReactNode} from 'react';


type Props = {
	ratingScore: number,
	customClassNames?: string,
};

const getIcon = (ratingScore: number): ReactNode => {
	if (ratingScore < 2) {
		return <StarOutlineRounded/>;
	}

	if (ratingScore >= 2 && ratingScore < 4) {
		return <StarHalfRounded/>;
	}

	return <StarRounded/>;
}

export const Rating = ({ratingScore, customClassNames}: Props) => {
	const icon = getIcon(ratingScore);

	return (
		<Typography className={clsx('rating', customClassNames)}>
			{icon} {ratingScore}
		</Typography>
	);
};