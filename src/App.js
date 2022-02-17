import './App.css';
import Nav from './NavBar/Nav';
import SideBar from './Components/SideBar/SideBar';

function App() {
  return (
    <div className="App">
      {/* Nav */}
      <Nav />
      <div className="App_body">
        {/* sidebar */}
        <SideBar />
        {/* feed */}
        {/* widgets */}
      </div>
    </div>
  );
}

export default App;
