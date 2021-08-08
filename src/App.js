import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Feed from "./components/Feed/Feed";

function App() {
  return (
    <div className="App">
        <div className="wrapper">
            <Header />
            <BrowserRouter>
                <Navbar />
                <div className='content'>
                   <Route path='/chats' component={Dialogs} />
                   <Route path='/profile' component={Profile} />
                   <Route path='/music' component={Music} />
                   <Route path='/settings' component={Settings} />
                   <Route path='/feed' component={Feed} />
                </div>
            </BrowserRouter>
        </div>
    </div>
  )
}

export default App;
