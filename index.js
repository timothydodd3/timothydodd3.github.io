import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import ReactDOM from 'react-dom/client';
function App() {
    return (_jsxs(_Fragment, { children: [_jsx("header", { children: "Hi There!" }), _jsx("h3", { children: "Welcome to my site!" }), _jsx("p", { children: "My Name is Tim, and I'm a Software Engineer specializing in C++. This is my first personal TypeScript project & eventually will become my professional online portfolio." }), _jsx("p", { children: "This site is still under construction, Feel free to check whenever for updates!" })] }));
}
ReactDOM.createRoot(document.getElementById('root')).render(_jsx(React.StrictMode, { children: _jsx(App, {}) }));
