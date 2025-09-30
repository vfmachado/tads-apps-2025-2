import { useEffect, useState } from 'react';

interface AuthContext {
	isAuthenticated: boolean;
	login: (username: string, password: string) => Promise<void>;
	logout: () => void;
}

export function useAuth(): AuthContext {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	useEffect(() => {
		// Check authentication status on mount
		const token = localStorage.getItem('authToken');
		setIsAuthenticated(!!token);
	}, []);

	const login = async (username: string, password: string) => {
		// Simulate an API call for authentication
		if (username === 'admin' && password === 'password') {
			localStorage.setItem('authToken', 'mockToken');
			setIsAuthenticated(true);
		} else {
			throw new Error('Invalid credentials');
		}
	};

	const logout = () => {
		localStorage.removeItem('authToken');
		setIsAuthenticated(false);
	};

	return { isAuthenticated, login, logout };
}
