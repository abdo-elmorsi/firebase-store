import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link, Navigate } from 'react-router-dom';
import './auth.css'

export default function Login({ setUser }) {
	const auth = getAuth();
	const [email, setemail] = useState('');
	const [password, setpassword] = useState('');
	const handleLogin = (e) => {
		e.preventDefault();
		createUserWithEmailAndPassword(auth, email, password).then((res) => {
			localStorage.setItem('user', res?.user?.accessToken)
			setUser(res?.user?.accessToken);
			<Navigate to="/" />
		}).catch((error) => {
			const errorMessage = error.message;
			alert(errorMessage)
		});
	}
	return (
		<div className='box'>
			<div className='col-1'>
			</div>
			<div className='col-2'>
				<div className='form'>
					<form onSubmit={handleLogin}>
						<div className='form-box'>
							<h2>SignIn</h2>
							<label>Email</label>
							<input
								value={email}
								onChange={(e) => setemail(e.target.value)}
								type='email' placeholder='Enter email' />
						</div>
						<div className='form-box'>
							<label>Password</label>
							<input
								value={password}
								onChange={(e) => setpassword(e.target.value)}
								type='password' placeholder='Enter password' />
						</div>
						<div className='reigster'>
							<Link to='/login' className='switch'>login</Link>
						</div>
						<button>
							SignIn
						</button>
					</form>
				</div>
			</div>
		</div>
	)

}
