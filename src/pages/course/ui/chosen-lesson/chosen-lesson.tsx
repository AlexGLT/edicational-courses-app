import {VideoPlayer} from 'shared/ui';

import {useChosenLesson} from '../../hooks';
import {getPreviewImageLink} from '../../utils';
import {ChosenLessonInfo} from './chosen-lesson-info';

import './chosen-lesson.scss';

import type {Lesson} from '../../typedef';


export const ChosenLesson = ({id, title, link, previewImageLink, order}: Lesson) => {
	const {videoRef} = useChosenLesson({id});
	const previewLink = getPreviewImageLink(previewImageLink, order);

	return (
		<div className="chosen-lesson">
			<VideoPlayer ref={videoRef} link={link} previewLink={previewLink} customClassNames="chosen-lesson__video"/>
			<ChosenLessonInfo title={title} order={order}/>
		</div>
	);
};
