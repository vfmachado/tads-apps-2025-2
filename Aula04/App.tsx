import React from 'react';
import { useAuth } from './hooks/useAuth';
import LoginScreen from './screens/LoginScreen';

function App() {
	const { isAuthenticated } = useAuth();

	if (!isAuthenticated) {
		return <LoginScreen />;
	}

	return (
		<div>
			{/* Render the current app */}
		</div>
	);
}

export default App;
