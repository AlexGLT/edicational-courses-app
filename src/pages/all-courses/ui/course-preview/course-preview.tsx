import {Card} from '@mui/material';

import {getPreviewImageLink} from '../../utils';
import {CourseVideo} from '../course-media';
import {CourseInfo} from '../course-info';

import './course-preview.scss';

import type {CourseWithLessonsCount} from '../../typedef';

export const CoursePreview = ({title, rating, previewImageLink, meta}: CourseWithLessonsCount) => {
	const {courseVideoPreview, skills} = meta || {};
	const previewLink = getPreviewImageLink(previewImageLink);

	return (
		<Card className="course-preview">
			<CourseVideo
				link={courseVideoPreview?.link}
				previewLink={previewLink}
				title={title}
			/>
			<CourseInfo
				title={title}
				skills={skills}
				rating={rating}
			/>
		</Card>
	);
};