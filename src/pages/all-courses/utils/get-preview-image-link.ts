export const getPreviewImageLink = (link: string | undefined) => (
	link ? `${link}/cover.webp` : undefined
);
