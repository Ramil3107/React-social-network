import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import { Route, Routes, } from 'react-router-dom';
import DialogContainer from './components/Dialog/DialogContainer';
import FindUsersContainer from './components/FindUsers/FindUsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';



const App = (props) => {
  return (
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

            <Route path='/profile/*' element={<ProfileContainer />} />

            <Route path="/dialog" element={<DialogContainer />} />

            <Route path="/users" element={<FindUsersContainer />} />

          </Routes>
        </div>

      </div>
    </div>
  )
}


export default App;


