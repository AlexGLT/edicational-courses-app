import {Typography} from '@mui/material';


type Props = {
	title: string,
	order: number,
}

export const ChosenLessonInfo = ({title, order}: Props) => {
	return (
		<Typography variant='h4'>
			Lesson №{order}: {title}
		</Typography>
	);
};