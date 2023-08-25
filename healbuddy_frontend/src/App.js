import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './container/Login';
import Signup from './container/Signup';
import Home from './container/Home';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './CSS/customformstyle.css'

import Test from './component/Test';

const clientID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function App() {
  return (
    <GoogleOAuthProvider clientId={clientID}>
      <Routes>
        <Route path='/*' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='test-page' element={<Test />} />
      </Routes>
    </GoogleOAuthProvider>
  );
}

export default App;
