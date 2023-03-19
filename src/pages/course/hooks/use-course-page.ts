import {useQuery} from 'react-query';

import {axios} from 'shared/core';

import type {CourseWithLessons} from '../typedef';


export const useCoursePage = () => {
	const {isLoading, data} = useQuery<CourseWithLessons>('page', () => (
		axios.get('/core/preview-courses/d75b0a7d-dba8-44e1-9b66-25074f701d9f')
			.then((response) => response.data)
	));

	return {isLoading, data};
};
