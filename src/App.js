import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import Dialog from './components/Dialog/Dialog';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';



const App = (props) => {
  return (
    <BrowserRouter>
      <div className='container'>
        <div className="app-wrapper">

          <div id='header' className='item'>
            <Header />
          </div>

          <div id='navbar' className='item'>
            <Navigation />
          </div>

          <div id='content' className='item'>
            <Routes>
              <Route path="/profile" element={<Profile profile={props.state.profile} addPost={props.addPost} />} />
              <Route path="/dialog" element={<Dialog messages={props.state.messages} />} />
            </Routes>
          </div>

        </div>
      </div>
    </BrowserRouter>
  )
}


export default App;


