export const getPreviewImageLink = (link: string | undefined, order: number) => (
	link ? `${link}/lesson-${order}.webp` : undefined
);
