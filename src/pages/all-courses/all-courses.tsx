import {CircularProgress} from '@mui/material';

import {Header} from 'shared/ui';
import {useAllCourses} from './hooks';
import {AllCoursesLayout} from './ui';


export const AllCoursesPage = () => {
	const {
		isLoading, selectedCourses, pageCount, page, handlePageChange,
		handleCoursePreviewClick, navigateToHome
	} = useAllCourses();

	return (
		<>
			<Header navigateToHome={navigateToHome}/>
			{isLoading || !selectedCourses ? (
				<CircularProgress size={50}/>
			) : (
				<AllCoursesLayout
					selectedCourses={selectedCourses}
					pageCount={pageCount}
					page={page}
					handlePageChange={handlePageChange}
					handleCoursePreviewClick={handleCoursePreviewClick}
				/>
			)}
		</>
	);
};
