import './App.css';
import Nav from './NavBar/Nav';
import SideBar from './Components/Components/SideBar/SideBar';
import Feed from './Components/Components/Feed/Feed';

function App() {
  return (
    <div className="App">
      {/* Nav */}
      <Nav />
      <div className="App_body">
        {/* sidebar */}
        <SideBar />
        {/* feed */}
        <Feed/>
        {/* widgets */}
      </div>
    </div>
  );
}

export default App;
