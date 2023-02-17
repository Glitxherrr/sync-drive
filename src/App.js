import './App.css';
import Header from './components/header';
import Sidebar from './components/sidebar';
import FilesView from './components/filesView/FilesView';
import SideIcons from './components/sideIcons';

import GDriveLogo from './media/google-drive-logo.png';

import { auth, provider } from "./firebase";
import { useState, useEffect } from 'react';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return unsubscribe;
  }, []);

  const handleLogin = () => {
    if (!user) {
      auth.signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else {
      auth.signOut()
        .then(() => {
          setUser(null);
        })
        .catch((err) => alert(err.message))
    }
  }

  const handleDelete = () => {
    // Add your code to handle file deletion here
    console.log('Files deleted');
  }

  return (
    <div className="app">
    <div className='app__background' />
    
      {user ? (
        <>
          <Header userPhoto={user.photoURL} />
          <div className="app__main">
            <Sidebar />
            <FilesView />
          </div>
          <div className="app__buttons">

            <button className="app__logout" onClick={handleLogin}>Logout</button>
          </div>
        </>
      ) : (
        <div className="app__login">
          <img src={GDriveLogo} alt="Google Drive" />
          <button onClick={handleLogin}>Log in to Google Drive</button>
        </div>
      )}
    </div>

  );
}

export default App;
