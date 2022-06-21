import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import Dialog from './components/Dialog/Dialog';
import { BrowserRouter, Route, Routes,} from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navigation />
        <div className='app-wrapper-content'>
          <Routes>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/dialog" element={<Dialog />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}


export default App;


