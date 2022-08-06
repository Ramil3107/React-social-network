import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import DialogContainer from './components/Dialog/DialogContainer';



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

              <Route path="/profile" element={<Profile />} />


              <Route path="/dialog" element={<DialogContainer />} />

            </Routes>
          </div>

        </div>
      </div>
    </BrowserRouter>
  )
}


export default App;


