import {CourseMainInfo} from 'shared/typedef';


export type CourseWithLessonsCount = CourseMainInfo & {
	lessonsCount: number,
};
