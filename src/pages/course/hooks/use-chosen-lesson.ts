import {useEffect, useRef} from 'react';


type Params = {
	id: string,
};

export const useChosenLesson = ({id}: Params) => {
	const videoRef = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		const currentTime = Number(localStorage.getItem(id));

		const videoElement = videoRef.current;

		if (videoElement) {
			videoElement.currentTime = currentTime ?? 0;
		}

		return () => {
			if (videoElement) {
				localStorage.setItem(id, String(videoElement.currentTime));
			}
		};
	}, [id]);

	return {videoRef};
};