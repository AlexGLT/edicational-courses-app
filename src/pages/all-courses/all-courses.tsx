import {Pagination, CircularProgress} from '@mui/material';

import {Header, Main} from 'shared/ui';
import {useAllCourses} from './hooks';
import {CoursePreview} from './ui';

import './all-courses.scss';


export const AllCoursesPage = () => {
	const {page, handlePageChange, pageCount, selectedCourses, isLoading} = useAllCourses();

	return (
		<>
			<Header/>
			{isLoading || !selectedCourses ? (
				<CircularProgress size={50}/>
			) : (
				<Main>
					<section className="all-courses">
						{selectedCourses.map((course) => <CoursePreview key={course.id} {...course}/>)}
					</section>
					<Pagination
						size="large"
						shape="rounded"
						showFirstButton={true}
						showLastButton={true}
						count={pageCount}
						page={page + 1}
						onChange={handlePageChange}
					/>
				</Main>
			)}
		</>
	);
};
