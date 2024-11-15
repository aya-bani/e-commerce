import ReactDOM from 'react-dom/client';
import './index.css';  
import App from './App';
import { AuthProvider } from './context/AuthContext';  // Import AuthProvider

// Create root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app with AuthProvider
root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
