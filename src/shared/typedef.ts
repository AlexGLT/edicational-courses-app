enum CourseStatus {
	launched = 'launched'
}

type CourseVideoPreview = {
	link: string,
	duration: number,
	previewImageLink: string,
};

export type CourseMainInfo = {
	id: string,
	title: string,
	tags: string[],
	launchDate: string,
	status: CourseStatus,
	description: string,
	duration: number,
	previewImageLink: string,
	rating: number,
	containsLockedLessons: boolean,
	meta?: {
		slug: string,
		skills: string[],
		courseVideoPreview: CourseVideoPreview,
	} | null,
};
