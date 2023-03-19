import {useEffect, forwardRef} from 'react';
import Hls from 'hls.js';

import type {MutableRefObject} from 'react';


type Props = {
	link: string | undefined,
	previewLink?: string,
	controls?: boolean,
	width?: number,
	height?: number,
	autoplay?: boolean,
	muted?: boolean,
	customClassNames?: string,
};

export const VideoPlayer = forwardRef<HTMLVideoElement, Props>(function VideoPlayer (props, ref) {
	const {
		link,
		previewLink,
		width,
		height,
		controls = true,
		autoplay = false,
		muted = false,
		customClassNames
	} = props;

	useEffect(() => {
		const videoRef = ref as MutableRefObject<HTMLVideoElement>;

		if (Hls.isSupported() && videoRef.current && link) {
			const hls = new Hls();
			hls.loadSource(link);
			hls.attachMedia(videoRef.current);
		}
	}, [ref, link]);

	return (
		<video
			ref={ref}
			className={customClassNames}
			poster={previewLink}
			width={width}
			height={height}
			controls={controls}
			autoPlay={autoplay}
			muted={muted}
		/>
	);
});
