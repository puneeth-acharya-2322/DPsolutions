import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// No custom CSS — we use the original Webflow CSS served from /webflow.css

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
