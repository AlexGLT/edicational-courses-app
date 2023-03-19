import {Pagination} from '@mui/material';

import {Main} from 'shared/ui';
import {CoursePreview} from './course-preview';

import './all-courses-layout.scss';

import type {ChangeEvent} from 'react';
import type {CourseWithLessonsCount} from '../typedef';


type Props = {
	selectedCourses: CourseWithLessonsCount[],
	pageCount: number,
	page: number,
	handlePageChange: (event: ChangeEvent<unknown>, newPage: number) => void,
};

export const AllCoursesLayout = ({selectedCourses, pageCount, page, handlePageChange}: Props) => {
	return (
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
	);
};
