import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'

const App = () => {
  return (
    <BrowserRouter basename={window.location.pathname || ''}>
      <Routes />
    </BrowserRouter>
  )
}
ReactDOM.render(<App />, document.getElementById('root'));

