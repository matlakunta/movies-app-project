import {Component} from 'react'
import {Link} from 'react-router-dom'

import {HiOutlineSearch} from 'react-icons/hi'
import {MdMenuOpen} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'

import './index.css'

class Header extends Component {
  state = {
    fullMenu: false,
  }

  showMenu = () => {
    this.setState({fullMenu: true})
  }

  hideMenu = () => {
    this.setState({fullMenu: false})
  }

  render() {
    const {fullMenu} = this.state
    const {searchRoute, isHome, isPopular, isAccount} = this.props
    const searchContainer = searchRoute
      ? 'search-input-route-container search-input-container'
      : 'search-input-container'
    const searchIcon = searchRoute ? 'search-route-icon icons' : 'icons'
    const searchBtn = searchRoute
      ? 'search-route-btn search-button'
      : 'search-button'

    const homeRoute = isHome ? 'menu-items highlight' : 'menu-items'
    const popularRoute = isPopular ? 'menu-items highlight' : 'menu-items'
    const accountRoute = isAccount ? 'menu-items highlight' : 'menu-items'

    return (
      <nav className="nav-bar">
        <div className="header">
          <Link to="/" className="image-link">
            <img
              src="https://res.cloudinary.com/ddry7fpzp/image/upload/v1662296727/Movies_Logo_vr3wvf.png"
              alt="website logo"
              className="header-image-logo"
            />
          </Link>
          <ul className="header-menu desktop-menu">
            <Link to="/" className={homeRoute}>
              <li>Home</li>
            </Link>
            <Link to="/popular" className={popularRoute}>
              <li>Popular</li>
            </Link>
          </ul>
          <div className="icons-container">
            <div className={searchContainer}>
              {searchRoute && (
                <input
                  type="search"
                  className="search-input"
                  placeholder="Search"
                />
              )}
              <Link to="/search">
                <button type="button" className={searchBtn}>
                  <HiOutlineSearch className={searchIcon} />
                </button>
              </Link>
            </div>
            <Link to="/account">
              <img
                className="avatar desktop-menu"
                alt="profile"
                src="https://res.cloudinary.com/dsiyffj0o/image/upload/v1671165868/Avatar_gbes4m.png"
              />
            </Link>
            <button
              type="button"
              className="mobile-menu close-btn"
              onClick={this.showMenu}
            >
              <MdMenuOpen className="hamburger icons" />
            </button>
          </div>
        </div>
        <nav className="mobile-nav">
          {fullMenu && (
            <ul className="mobile-menu-items">
              <Link to="/" className={homeRoute}>
                <li>Home</li>
              </Link>
              <Link to="/popular" className={popularRoute}>
                <li>Popular</li>
              </Link>
              <Link to="/account" className={accountRoute}>
                <li>Account</li>
              </Link>
              <li>
                <button
                  onClick={this.hideMenu}
                  className="close-btn"
                  type="button"
                >
                  <AiFillCloseCircle className="close icons" />
                </button>
              </li>
            </ul>
          )}
        </nav>
      </nav>
    )
  }
}

export default Header
