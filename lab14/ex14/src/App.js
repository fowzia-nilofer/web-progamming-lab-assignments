import React from 'react';
import ImageDisplay from "./ImageDisplay";
import LoginForms from './LoginForms';
import ProfileImage from './ProfileImage';
import ProfilePage from './ProfilePage';

function App(){
  return(
    <>
      <div>
        <ImageDisplay/>
      </div>
      <div>
        <LoginForms/>
      </div>
      <div>
        <ProfilePage/>
      </div>
    </>
  );
}

export default App;