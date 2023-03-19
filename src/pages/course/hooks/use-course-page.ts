import {useCallback, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {useQuery} from 'react-query';

import {axios} from 'shared/core';

import type {CourseWithLessons} from '../typedef';


export const useCoursePage = () => {
	const {courseId} = useParams();
	const navigate = useNavigate();

	const {isLoading, data, error} = useQuery<CourseWithLessons>(`course-${courseId}`, () => (
		axios.get(`/core/preview-courses/${courseId}`)
			.then((response) => response.data)
	));

	useEffect(() => {
		if (error) {
			navigate('/');
		}
	}, [navigate, error]);

	const navigateToHome = useCallback(() => {
		navigate('/');
	}, [navigate]);

	return {isLoading, data, navigateToHome};
};
