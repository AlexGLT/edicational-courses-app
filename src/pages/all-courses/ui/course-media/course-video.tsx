import {useLayoutEffect, useRef, useCallback} from 'react';
import {VideoPlayer} from 'shared/ui';

import './course-video.scss';


const TIMEOUT = 250;

const setDisplayStyle = (element: HTMLImageElement | HTMLVideoElement | null, display: string = '') => {
	if (element) {
		element.style.display = display;
	}
};

const toggleView = (
	imageElement: HTMLImageElement | null,
	videoElement: HTMLVideoElement | null,
	disableImage: boolean
) => {
	if (disableImage) {
		setDisplayStyle(imageElement, 'none');
		setDisplayStyle(videoElement);
	} else {

		setDisplayStyle(imageElement);
		setDisplayStyle(videoElement, 'none');
	}
};

type Props = {
	link: string | undefined,
	previewLink?: string,
	title: string,
};

export const CourseVideo = ({link, previewLink, title}: Props) => {
	const timeoutId = useRef<ReturnType<typeof setTimeout>>();

	const imageRef = useRef<HTMLImageElement>(null);
	const videoRef = useRef<HTMLVideoElement>(null);

	const handleMouseEnter = useCallback(() => {
		timeoutId.current = setTimeout(() => {
			const imageElement = imageRef.current;
			const videoElement = videoRef.current;

			toggleView(imageElement, videoElement, true);

			if (videoElement && videoElement.readyState > videoElement.HAVE_CURRENT_DATA) {
				videoElement.play();
			}
		}, TIMEOUT);
	}, []);

	const handleMouseLeave = useCallback(() => {
		clearTimeout(timeoutId.current);

		const imageElement = imageRef.current;
		const videoElement = videoRef.current;

		toggleView(imageElement, videoElement, false);

		if (videoElement) {
			videoElement.pause();
			videoElement.currentTime = 0;
		}
	}, []);

	useLayoutEffect(() => {
		if (videoRef.current) {
			videoRef.current.style.display = 'none';
		}
	}, []);

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
