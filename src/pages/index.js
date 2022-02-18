import React, { useContext } from 'react';
import Title from '../comps/Title';
import UploadForm from '../comps/UploadForm';
import ImageGrid from '../comps/ImageGrid';
import Modal from '../comps/Modal';

import { ImageSelected } from '../App';
export default function Index() {
	const [selectedImage,] = useContext(ImageSelected);
	return <>
		<Title />
		<UploadForm />
		<ImageGrid />
		{selectedImage ? (
			<Modal selectedImage={selectedImage} />
		) : null}
	</>;
}
