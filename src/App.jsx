import React, { useState } from 'react';
import { GoogleLogin } from './auth/GoogleLogin';
import { HomeScreen } from './screen/HomeScreen';


export default function App() {
  const [session, setSession] = useState(false); // false = not logged in yet

  return (
    <div>
      {session ? <HomeScreen /> : <GoogleLogin onLogin={() => setSession(true)} />}
    </div>
  );
}
