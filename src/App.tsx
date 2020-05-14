import React from 'react';
import GlobalStyle from './styles/global';
//import SignIn from './pages/Signin/index';
import SignUp from './pages/Signup/index';

const App: React.FC = () => (
  <>
    <SignUp />
    <GlobalStyle />
  </>
);

export default App;
