import {Typography} from '@mui/material';

import {List, Rating} from 'shared/ui';

import './course-info.scss';


const SKILLS_CAPTION = 'Skills you will acquire';

type Props = {
	title: string,
	rating: number,
	skills?: string[],
};

export const CourseInfo = ({title, rating, skills}: Props) => {
	return (
		<div className="course-info">
			<Typography variant="h6" noWrap={true} title={title}>
				{title}
			</Typography>
			{
				!!skills?.length && (
					<List caption={SKILLS_CAPTION} items={skills}/>
				)
			}
			<Rating customClassNames="course-info__rating" ratingScore={rating}/>
		</div>
	);
};
