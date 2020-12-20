import './App.css';
import Feed from './components/feed/feed';
import Header from './components/header/header'
import Login from './components/Login/login';
import Sidebar from './components/sidebar/sidebar'
import Widget from './components/widgets/widget';
import { useStateValue } from './stateProvider';

function App() {
  const [{ user },dispatch] = useStateValue();
  // const user = 's';
  return (
  <div className="App">
  {!user?<Login/>:<>
    <Header />
    <div className="app__body">
      <Sidebar/>
      <Feed/>
      <Widget/>
    </div>
  </>}
  </div>
  );
}

export default App;
