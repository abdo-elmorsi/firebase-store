import React, { useEffect } from 'react';
import useStorage from '../hooks/useFirestorage';
import { motion } from 'framer-motion';

const ProgressBar = ({ file, setFile }) => {
	const { progress, url } = useStorage(file);

	useEffect(() => {
		if (url) {
			setFile(null);
		}
	}, [url, setFile]);

	return (
		<motion.div className="progress-bar"
			initial={{ width: 0 }}
			animate={{ width: progress + '%' }}
		>{progress + "%"}</motion.div>
	);
}

export default ProgressBar;