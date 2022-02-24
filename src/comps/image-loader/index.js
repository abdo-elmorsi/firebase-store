import React, { useState } from 'react'
import './style.css'

const ImageLoader = ({ src, alt, className }) => {
	const loadedImages = {};
	const [loaded, setLoaded] = useState(loadedImages[src]);

	const onLoad = () => {
		loadedImages[src] = true;
		setLoaded(true);
	}

	return (
		<>
			{!loaded && (
				<span>
					Loading...
				</span>
			)}
			<img
				onLoad={onLoad}
				alt={alt || ''}
				className={`${className || ''} ${loaded ? 'is-img-loaded' : 'is-img-loading'}`}
				src={src}
			/>
		</>
	)
}

export default ImageLoader