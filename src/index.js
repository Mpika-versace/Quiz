import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import Firabase from './backend/Firebase'
import {AuthProvider} from './backend/FirebaseContexte'



ReactDOM.render(
  <AuthProvider>
    <React.StrictMode>   
        <App />
    </React.StrictMode>,
  </AuthProvider>,
  document.getElementById('root')
);


