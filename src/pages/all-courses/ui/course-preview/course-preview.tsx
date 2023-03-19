import {Card} from '@mui/material';

import {getPreviewImageLink} from '../../utils';
import {CourseVideo} from '../course-media';
import {CourseInfo} from '../course-info';

import './course-preview.scss';

import type {CourseWithLessonsCount} from '../../typedef';


type Props = CourseWithLessonsCount & {
	handleCoursePreviewClick: (courseId: string) => void,
};

export const CoursePreview = ({id, title, rating, previewImageLink, meta, handleCoursePreviewClick}: Props) => {
	const previewLink = getPreviewImageLink(previewImageLink);

	const handleClick = () => {
		handleCoursePreviewClick(id);
	};

	return (
		<Card className="course-preview" onClick={handleClick}>
			<CourseVideo
				link={meta?.courseVideoPreview?.link}
				previewLink={previewLink}
				title={title}
			/>
			<CourseInfo
				title={title}
				skills={meta?.skills}
				rating={rating}
			/>
		</Card>
	);
};