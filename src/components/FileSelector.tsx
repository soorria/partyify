import React, { ChangeEvent } from 'react';
import useDrop from 'react-use/esm/useDrop';

export default function FileSelector(props: { onFileSelected: (file: File | undefined) => void }): JSX.Element {
	const state = useDrop({
		onFiles(files) {
			if (files.length) {
				props.onFileSelected(files[0]);
			}
		},
	});

	const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		props.onFileSelected(e.currentTarget.files?.[0]);
	};

	return (
		<>
			<input type='file' id='file-input' className='FileSelector__Input' onChange={handleFileChange} />
			<label htmlFor='file-input' className='Button FileSelector__Label'>
				Drop an image or pick one...
			</label>

			{state.over && (
				<div className='FileSelector__DropIndicator'>
					<div className='Button'>Drop it to party-ify!</div>
				</div>
			)}
		</>
	);
}
