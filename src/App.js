import './App.css';
import Nav from './NavBar/Nav';
import SideBar from './Components/Components/SideBar/SideBar';
import Feed from './Components/Components/Feed/Feed';
import Login from './Components/Login/Login';
import Widgets from './Components/Components/Widgets/Widgets';
import { selectUser } from '../src/features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { auth } from './Firebase';
import { login, logout } from '../src/features/userSlice'

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //user logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL
          })
        )
      }
      else {
        //logged out
        dispatch(logout())
      }
    })
  }, [])

  return (
    <div className="App">
      {/* Nav */}
      <Nav />
      {!user ? (
        <Login />
      ) : (
        <div className="App_body">
          {/* sidebar */}
          <SideBar />
          {/* feed */}
          <Feed />
          {/* widgets */}
          <Widgets/>
        </div>
      )}
    </div>
  );
}

export default App;
