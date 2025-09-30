import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

export default function LoginScreen() {
	const { login } = useAuth();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState<string | null>(null);

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			await login(username, password);
		} catch (err) {
			setError('Invalid username or password');
		}
	};

	return (
		<div>
			<h1>Login</h1>
			<form onSubmit={handleLogin}>
				<div>
					<label>Username:</label>
					<input
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>
				<div>
					<label>Password:</label>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				{error && <p style={{ color: 'red' }}>{error}</p>}
				<button type="submit">Login</button>
			</form>
		</div>
	);
}
