import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './container/Login';
import Signup from './container/Signup';
import Home from './container/Home';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './CSS/customformstyle.css'
import SetPassword from './component/SetPassword';
import ScrollAnimation from './container/ScrollAnimations';

const clientID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function App() {
  return (
    <GoogleOAuthProvider clientId={clientID}>
      <ScrollAnimation>
        <Routes>
          <Route path='set-password/:JSONData' element={<SetPassword />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path='/*' element={<Home />} />
        </Routes>
      </ScrollAnimation>
    </GoogleOAuthProvider>
  );
}

export default App;
