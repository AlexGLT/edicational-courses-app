import {Main} from 'shared/ui';
import {LessonsSection} from './lessons-section';
import {CourseMainInfo} from './course-main-info';

import type {CourseWithLessons} from '../typedef';


export const CourseLayout = ({title, description, lessons}: CourseWithLessons) => {
	return (
		<Main>
			<CourseMainInfo title={title} description={description} />
			<LessonsSection lessons={lessons}/>
		</Main>
	);
};