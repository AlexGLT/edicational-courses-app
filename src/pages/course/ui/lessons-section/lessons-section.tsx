import {useLessonsSection} from '../../hooks';
import {ChosenLesson} from '../chosen-lesson';
import {LessonsList} from '../lessons-list';

import './lessons-section.scss';

import type {Lesson} from '../../typedef';


type Props = {
	lessons: Lesson[],
};

export const LessonsSection = ({lessons}: Props) => {
	const {chosenLesson, chosenOrder, handleChangeOrder} = useLessonsSection({lessons});

	return (
		<section className="lessons-section">
			<ChosenLesson {...chosenLesson}/>
			<LessonsList chosenOrder={chosenOrder} handleChangeOrder={handleChangeOrder} lessons={lessons}/>
		</section>
	);
};
