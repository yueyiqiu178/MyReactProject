import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Link, Route, Routes } from "react-router-dom";
import App from './App';
import Clock from './component/Clock';
import ContentDock from './component/ContentDock';
import HelloWorld from './component/HelloWorld';
import HelloWorld2 from './component/HelloWorld2';
import InputCounter from './component/InputCounter';
import TextAreaCounter from './component/TextAreaCounter';
import Users from './component/Users';
import CounterR from './component/CounterR.js'
import './index.css';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import store from './redux/Store.js'
import { Provider } from 'react-redux'
import WinepadDock from './winepad/WinepadDock'
let userJson = [{
  "id": 1,
  "first_name": "Patrick",
  "last_name": "Kim",
  "email": "pkim0@twitter.com",
  "gender": "Male",
  "ip_address": "96.145.80.132"
}, {
  "id": 2,
  "first_name": "Julia",
  "last_name": "Gordon",
  "email": "jgordon1@google.com.au",
  "gender": "Female",
  "ip_address": "164.174.125.92"
}, {
  "id": 3,
  "first_name": "Kathleen",
  "last_name": "Armstrong",
  "email": "karmstrong2@reference.com",
  "gender": "Female",
  "ip_address": "148.128.238.84"
}, {
  "id": 4,
  "first_name": "Betty",
  "last_name": "Garcia",
  "email": "bgarcia3@purevolume.com",
  "gender": "Female",
  "ip_address": "117.71.246.128"
}, {
  "id": 5,
  "first_name": "Wanda",
  "last_name": "Ross",
  "email": "wross4@amazon.co.uk",
  "gender": "Female",
  "ip_address": "101.153.132.101"
}, {
  "id": 6,
  "first_name": "Mark",
  "last_name": "Lopez",
  "email": "mlopez5@newsvine.com",
  "gender": "Male",
  "ip_address": "130.186.223.106"
}, {
  "id": 7,
  "first_name": "Katherine",
  "last_name": "Carroll",
  "email": "kcarroll6@exblog.jp",
  "gender": "Female",
  "ip_address": "48.159.239.241"
}, {
  "id": 8,
  "first_name": "Jonathan",
  "last_name": "Harris",
  "email": "jharris7@hp.com",
  "gender": "Male",
  "ip_address": "121.101.33.233"
}, {
  "id": 9,
  "first_name": "Christina",
  "last_name": "Gardner",
  "email": "cgardner8@goo.gl",
  "gender": "Female",
  "ip_address": "142.233.177.121"
}, {
  "id": 10,
  "first_name": "Sandra",
  "last_name": "Sanchez",
  "email": "ssanchez9@github.io",
  "gender": "Female",
  "ip_address": "78.27.23.245"
}]
  ;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <HashRouter>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/" className="nav-link active">Home</Link>
              </li>
              <li class="nav-item">
                <Link to="/HelloWorld" className="nav-link active">HelloWorld</Link>
              </li>
              <li class="nav-item">
                <Link to="/HelloWorld2" className="nav-link active">HelloWorld2</Link>
              </li>
              <li class="nav-item">
                <Link to="/clock" className="nav-link active">clock</Link>
              </li>
              <li class="nav-item">
                <Link to="/textAreaCounter" className="nav-link active">textAreaCounter</Link>
              </li>
              <li class="nav-item">
                <Link to="/inputCounter" className="nav-link active">inputCounter</Link>
              </li>
              <li class="nav-item">
                <Link to="/Users" className="nav-link active">Users</Link>
              </li>
              <li class="nav-item">
                <Link to="/ContentDock" className="nav-link active">ContentDock</Link>
              </li>
              <li class="nav-item">
                <Link to="/CounterR" className="nav-link active">CounterR</Link>
              </li>
              <li class="nav-item">
                <Link to="/WinepadDock" className="nav-link active">WinepadDock</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<App />} />
        {<Route path="/HelloWorld" element={<HelloWorld text="HAHA"/>} />}
        {<Route path="/HelloWorld2" element={<HelloWorld2 />} />}
        {<Route path="/clock" element={<Clock />} />}
        {<Route path="/textAreaCounter" element={<TextAreaCounter text="pcman" />} />}
        {<Route path="/inputCounter" element={<InputCounter text="kkman" />} />}
        {<Route path="/Users" element={<Users dataUrl={userJson} />} />}
        {<Route path="/ContentDock" element={<ContentDock />} />}
        {<Route path="/CounterR" element={<CounterR />} />}
        {<Route path="/WinepadDock" element={<WinepadDock />} />}
      </Routes>
    </HashRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

