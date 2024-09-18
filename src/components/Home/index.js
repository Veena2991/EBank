import {Link, Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

const Home = props => {
  const token = Cookies.get('jwt_token')
  if (token === undefined) {
    return <Redirect to="/ebank/login" />
  }

  const remove = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/ebank/login')
  }

  return (
    <div className="home-container">
      <div className="logo-and-logoutBtn">
        <Link to="/" className="link-element">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
            alt="website logo"
            className="ebank-logo-image"
          />
        </Link>
        <button className="logout-btn" type="button" onClick={remove}>
          Logout
        </button>
      </div>
      <div className="body-container">
        <h1 className="heading-home">Your Flexibility, Our Excellence</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
          alt="digital card"
          className="digital-card-img"
        />
      </div>
    </div>
  )
}
export default Home
