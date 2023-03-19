import {CircularProgress} from '@mui/material';

import {Header} from 'shared/ui';
import {useCoursePage} from './hooks';
import {CourseLayout} from './ui';


export const CoursePage = () => {
	const {isLoading, data} = useCoursePage();

	return (
		<>
			<Header/>
			{isLoading || !data ? (
				<CircularProgress size={50}/>
			) : (
				<CourseLayout {...data}/>
			)}
		</>
	);
};
