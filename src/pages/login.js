import React, { useState, useContext } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import { User } from "../App";
import './auth.css'

export default function Login() {
	const Navigate = useNavigate()
	const auth = getAuth();
	const [, setUser] = useContext(User);
	const [email, setemail] = useState('');
	const [password, setpassword] = useState('');
	const handleLogin = (e) => {
		e.preventDefault();
		if (email.trim().length < 2 || password.length < 2) {
			alert('Please add valid data')
		} else {
			signInWithEmailAndPassword(auth, email, password).then((res) => {
				localStorage.setItem('user', res?.user?.accessToken)
				setUser(res?.user?.accessToken);
				Navigate('/');
			}).catch((error) => {
				// const errorCode = error.code;
				const errorMessage = error.message;
				alert(errorMessage)
			});
		}
	}
	return (
		<div className='box'>
			<div className='col-1'>
			</div>
			<div className='col-2'>
				<div className='form'>
					<form onSubmit={handleLogin}>
						<div className='form-box'>
							<h2>LogIn</h2>
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
							<Link to='/signin' className='switch'>signin</Link>
						</div>
						<button>
							LogIn
						</button>
					</form>
				</div>
			</div>
		</div>
	)

}
