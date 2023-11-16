import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Route, Routes, Link } from "react-router-dom";
import HelloWorld from './component/HelloWorld';
import HelloWorld2 from './component/HelloWorld2'
import Clock from './component/Clock';
import TextAreaCounter from './component/TextAreaCounter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <nav className="px-5 flex items-center h-[60px] bg-indigo-500 text-white">
        <h1 className="mr-auto text-2xl">React TodoList</h1>
        <ul className="flex">
          <li className="mr-3">
            <Link to="/" className="border p-3 hover:bg-indigo-600 duration-500">Home</Link>
          </li>
          <li>
            <Link to="/HelloWorld" className="border p-3 hover:bg-indigo-600 duration-500">HelloWorld</Link>
          </li>
          <li>
            <Link to="/HelloWorld2" className="border p-3 hover:bg-indigo-600 duration-500">HelloWorld2</Link>
          </li>
          <li>
            <Link to="/clock" className="border p-3 hover:bg-indigo-600 duration-500">Clock</Link>
          </li>
          <li>
            <Link to="/textAreaCounter" className="border p-3 hover:bg-indigo-600 duration-500">TextAreaCounter</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<App />} />
        {<Route path="/HelloWorld" element={<HelloWorld />} />}
        {<Route path="/HelloWorld2" element={<HelloWorld2 />} />}
        {<Route path="/clock" element={<Clock />} />}
        {<Route path="/textAreaCounter" element={<TextAreaCounter text="pcman" />} />}
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

