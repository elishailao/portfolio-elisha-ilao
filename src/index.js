import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import favicon from './images/MyLogo.png';

// Set favicon from bundled src image so it works in dev and production
const setFavicon = (url) => {
  const head = document.getElementsByTagName('head')[0];
  const existing = head.querySelector("link[rel='icon']") || head.querySelector("link[rel*='icon']");
  if (existing) {
    existing.href = url;
  } else {
    const link = document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    link.href = url;
    head.appendChild(link);
  }
};
setFavicon(favicon);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
