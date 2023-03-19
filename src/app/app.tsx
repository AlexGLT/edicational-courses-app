import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {QueryClientProvider, QueryClient} from 'react-query';

import {AllCoursesPage} from 'pages/all-courses';
import {CoursePage} from 'pages/course';

import './app.scss';


export const router = createBrowserRouter([
	{
		path: '/',
		element: <AllCoursesPage/>
	},
	{
		path: '/:courseId',
		element: <CoursePage/>
	}
]);

const queryClient = new QueryClient();

export const App = () => {
	return (
		<div className='app'>
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router}/>
			</QueryClientProvider>
		</div>
	);
};
