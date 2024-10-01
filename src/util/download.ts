export const downloadFromUrl = (url: string, fileName: string): void => {
	const a = document.createElement('a');
	a.href = url;
	a.download = fileName;
	a.rel = 'noopener';
	a.dispatchEvent(new MouseEvent('click'));
};
