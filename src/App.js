import './App.css';
import Navigation from './components/Navigation/Navigation';
import { Route, Routes, } from 'react-router-dom';
import DialogContainer from './components/Dialog/DialogContainer';
import FindUsersContainer from './components/FindUsers/FindUsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './redux/appReducer';
import { useEffect } from 'react';



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
              <Routes>

                <Route path='/profile/' element={<ProfileContainer />} >
                  <Route path=':userId' element={<ProfileContainer />} />
                </Route>

                <Route path="/dialog/" element={<DialogContainer />} />

                <Route path="/users" element={<FindUsersContainer />} />
                <Route path="/login" element={<Login />} />

              </Routes>
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


