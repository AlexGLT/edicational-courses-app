import {useState, useCallback} from "react";

import type {Lesson} from '../typedef';


type Params = {
	lessons: Lesson[],
};

export const useLessonsSection = ({lessons}: Params) => {
	const [chosenOrder, setChosenOrder] = useState(0);

	const handleChangeOrder = useCallback((newOrder: number) => {
		setChosenOrder(newOrder);
	}, []);

	const chosenLesson = lessons[chosenOrder];

	return {chosenLesson, chosenOrder, handleChangeOrder};
};
