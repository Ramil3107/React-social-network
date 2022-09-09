import './App.css';
import Navigation from './components/Navigation/Navigation';
import { Route, Routes, } from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './redux/appReducer';
import { lazy, Suspense, useEffect } from 'react';
import Preloader from './components/common/Preloader/Preloader';

const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));
const DialogContainer = lazy(() => import('./components/Dialog/DialogContainer'));
const FindUsersContainer = lazy(() => import('./components/FindUsers/FindUsersContainer'));



const App = (props) => {

  useEffect(() => {
    props.initializeApp()
  }, [])



  return (
    <div>


      <div className='container'>
        <div className="app-wrapper">

          <div id='header' className='item'>
            <HeaderContainer />
          </div>

          <div id='navbar' className='item'>
            <Navigation />
          </div>
          {
            props.initialized ? (<div id='content' className='item'>
              <Suspense fallback={<Preloader />}>
                <Routes>
                  <Route path='/' element={<ProfileContainer />} />
                  <Route path='/profile/' element={<ProfileContainer />} >
                    <Route path=':userId' element={<ProfileContainer />} />
                  </Route>

                  <Route path="/dialog/" element={<DialogContainer />} />

                  <Route path="/users" element={<FindUsersContainer />} />

                  <Route path="/login" element={<Login />} />

                </Routes>
              </Suspense>
            </div>)
              :
              (<Login />)
          }


        </div>
      </div>

    </div>
  )
}

let mapStateToProps = (state) => ({
  initialized: state.app.initialized
})


export default connect(mapStateToProps, { initializeApp })(App)


