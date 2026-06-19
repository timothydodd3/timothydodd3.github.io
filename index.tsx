import React from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  return (
    <>
      <header>Hi There!</header>
      <h3>Welcome to my site!</h3>
      <p>
        My Name is Tim, and I'm a Software Engineer specializing in C++. This is my first personal
        TypeScript project & eventually will become my professional online portfolio.
      </p>
      <p>This site is still under construction, Feel free to check whenever for updates!</p>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
