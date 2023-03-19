import {VideoPlayer} from 'shared/ui';

import {useCourseVideo} from '../../hooks';

import './course-video.scss';


type Props = {
	link: string | undefined,
	previewLink?: string,
	title: string,
};

export const CourseVideo = ({link, previewLink, title}: Props) => {
	const {imageRef, videoRef, handleMouseEnter, handleMouseLeave} = useCourseVideo();

	return (
		<div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
			<img ref={imageRef} className="course-media" src={previewLink} alt={title}/>
			<VideoPlayer
				ref={videoRef}
				link={link}
				previewLink={previewLink}
				controls={false}
				muted={true}
				customClassNames="course-media"
			/>
		</div>
	);
};
