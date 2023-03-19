import {Typography} from '@mui/material';

import './course-main-info.scss';


type Props = {
	title: string,
	description: string,
};

export const CourseMainInfo = ({title, description}: Props) => {
	return (
		<section className="course-main-info">
			<Typography variant="h2">{title}</Typography>
			<Typography variant="h6">{description}</Typography>
		</section>
	);
};