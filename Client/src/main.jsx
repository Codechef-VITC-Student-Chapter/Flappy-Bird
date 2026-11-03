// Import necessary modules and components
import React from 'react'; // React library for building user interfaces
import ReactDOM from 'react-dom/client'; // ReactDOM for rendering React components to the DOM
import App from './App.jsx'; // The main App component for your application
import './index.css'; // Import the global CSS file for styling

// Create a root element to render your React application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* The React.StrictMode component helps identify potential problems in your application */}
    <App />
    {/* The App component is the top-level component of your React application */}
  </React.StrictMode>
);
