export const download = (content: string | Blob | File, fileName: string, type?: string): void => {
	const blob = typeof content === 'string' ? new Blob([content], { type }) : content;
	const a = document.createElement('a');
	a.href = URL.createObjectURL(blob);
	a.download = fileName;
	a.rel = 'noopener';
	a.dispatchEvent(new MouseEvent('click'));
};
