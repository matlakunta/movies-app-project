import Cookies from 'js-cookie'
import Header from '../Header'
import Footer from '../Footer'
import './index.css'

const Account = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <>
      <div className="header-section">
        <Header />
      </div>
      <div className="account-container">
        <h1 className="account-heading">Account</h1>
        <hr className="hr-line" />
        <div className="membership-container">
          <h1 className="membership-heading">Member ship</h1>
          <div className="user-details">
            <p className="user-name">satyanikhilm@gmail.com</p>
            <p className="password">Password: ********</p>
          </div>
        </div>
        <hr className="hr-line" />
        <div className="plan-details-container">
          <p className="plan-details-heading">Plan details</p>
          <p className="premium-user-name">Premium</p>
          <p className="ultra-hd">Ultra HD</p>
        </div>
        <hr className="hr-line" />
        <button onClick={onClickLogout} type="button" className="logout-btn">
          Logout
        </button>
      </div>
      <div className="footer-section">
        <Footer />
      </div>
    </>
  )
}

export default Account
