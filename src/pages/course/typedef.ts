import {CourseMainInfo} from 'shared/typedef';


export enum LessonStatus {
	locked = 'locked',
	unlocked = 'unlocked'
}

export type Lesson = {
	id: string,
	title: string,
	duration: number,
	order: number,
	type: string,
	status: LessonStatus,
	link: string,
	previewImageLink: string,
	meta: null,
};

export type CourseWithLessons = CourseMainInfo & {
	lessons: Lesson[]
};
