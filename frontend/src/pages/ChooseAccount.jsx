import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/auth.css'

const ChooseAccount = () => (
  <div className="choose-page">
    <div className="choose-card">
      <div className="choose-header">
        <h1>Continue as</h1>
        <p>Choose your role to sign in or register and start using the app.</p>
      </div>

      <div className="choose-grid">
        <div className="choose-block">
          <div>
            <h2>User</h2>
            <p>Order delicious meals from nearby restaurants with a simple login.</p>
          </div>
          <div className="choose-actions">
            <Link to="/user/login" className="choose-button">
              Login
            </Link>
            <Link to="/user/register" className="choose-link">
              Register
            </Link>
          </div>
        </div>

        <div className="choose-block">
          <div>
            <h2>Food Partner</h2>
            <p>Manage your menu, orders, and delivery availability in one place.</p>
          </div>
          <div className="choose-actions">
            <Link to="/food-partner/login" className="choose-button">
              Login
            </Link>
            <Link to="/food-partner/register" className="choose-link">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default ChooseAccount
