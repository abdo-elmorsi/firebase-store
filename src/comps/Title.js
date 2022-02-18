import { motion } from 'framer-motion';
import React, { useContext } from 'react';

import { User } from "../App";
const Title = () => {
	const [, setUser] = useContext(User);

	const handleSignOut = () => {
		setUser(null);
		localStorage.clear();
	}
	return (
		<motion.div
			animate={{ y: [-100, 0,] }}
			transition={{ ease: "easeOut", duration: 1 }}
			className="title">
			<div className='head'>
				<h1>Abdo Elmorsy</h1>
				<h1 onClick={handleSignOut}>logout</h1>
			</div>

			<h2>Your Pictures</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
		</motion.div>
	)
}

export default Title;