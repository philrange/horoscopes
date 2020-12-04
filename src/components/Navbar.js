import React from 'react'
import { Link } from 'gatsby'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-primary"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
        

        {/*<img src={logo} alt="Kaldi" style={{ width: '88px' }} />*/}
                
        <div className='navbar-item'>
            <h1>Astrology Readings</h1>
        </div>

                
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>

          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-end has-text-centered">
              <Link className="navbar-item" to="/about">
                About
              </Link>

                <div className="navbar-item has-dropdown is-hoverable">
                  <Link className="navbar-link" to="">
                    Horoscopes
                  </Link>

                    <div className="navbar-dropdown">
                      <Link className="navbar-item" to="/horoscopes/aries">
                        Aries
                      </Link>               
                      <Link className="navbar-item" to="/horoscopes/gemini">
                        Gemini
                      </Link>

                       <hr className="navbar-divider"/>
                     <Link className="navbar-item" to="/horoscopes/gemini">
                        dfdf
                      </Link>
                    </div>

                </div>




              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
              <Link className="navbar-item" to="/starsigns">
                Starsigns
              </Link>
              <Link className="navbar-item" to="/planets">
                Planets
              </Link>
              <Link className="navbar-item" to="/houses">
                Houses
              </Link>
            </div>

          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
