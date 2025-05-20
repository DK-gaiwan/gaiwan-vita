
import React, { useEffect } from 'react';
import './App.css';

const App = () => {
  useEffect(() => {
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.ready();
    }
  }, []);

  return <h1>Gaiwan WebApp работает!</h1>;
};

export default App;
